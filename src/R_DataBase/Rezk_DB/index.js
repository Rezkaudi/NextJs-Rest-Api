const fs = require('fs');
const path = require('path');
// import fs from 'fs'
// import path from 'path'

export class RDB {
    constructor(basePath) {
        this.basePath = basePath;
    }

    createTable(tableName, data) {
        const filePath = path.join(this.basePath, tableName);
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
        console.log(`File ${tableName} created successfully.`);
    }

    readTable(tableName) {
        const filePath = path.join(this.basePath, tableName);
        if (fs.existsSync(filePath)) {
            const data = fs.readFileSync(filePath, 'utf8');
            return JSON.parse(data);
        } else {
            console.error(`File ${tableName} does not exist.`);
            return null;
        }
    }

    writeTable(tableName, data) {
        const filePath = path.join(this.basePath, tableName);
        if (fs.existsSync(filePath)) {
            fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
            console.log(`File ${tableName} updated successfully.`);
        } else {
            console.error(`File ${tableName} does not exist.`);
        }
    }

    createDataBase(dbName) {
        const folderPath = path.join(this.basePath, dbName);
        if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath);
            console.log(`Folder ${dbName} created successfully.`);
        } else {
            console.log(`Folder ${dbName} already exists.`);
        }
    }
}

// Example usage
const handler = new RDB('./db');
handler.createDataBase('testFolder');
handler.createTable('./testFolder/test.json', { name: 'John Doe', age: 30 });
const data = handler.readTable('test.json');
console.log(data);
handler.writeTable('test.json', { name: 'Jane Doe', age: 28 });