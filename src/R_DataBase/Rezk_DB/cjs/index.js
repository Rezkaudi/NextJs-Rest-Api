// const fs = require('fs');
// const path = require('path');
import fs from 'fs'
import path from 'path'

class JsonFileHandler {
    constructor(basePath) {
        this.basePath = basePath;
    }

    createJsonFile(fileName, data) {
        const filePath = path.join(this.basePath, fileName);
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
        console.log(`File ${fileName} created successfully.`);
    }

    readJsonFile(fileName) {
        const filePath = path.join(this.basePath, fileName);
        if (fs.existsSync(filePath)) {
            const data = fs.readFileSync(filePath, 'utf8');
            return JSON.parse(data);
        } else {
            console.error(`File ${fileName} does not exist.`);
            return null;
        }
    }

    writeJsonFile(fileName, data) {
        const filePath = path.join(this.basePath, fileName);
        if (fs.existsSync(filePath)) {
            fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
            console.log(`File ${fileName} updated successfully.`);
        } else {
            console.error(`File ${fileName} does not exist.`);
        }
    }

    createFolder(folderName) {
        const folderPath = path.join(this.basePath, folderName);
        if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath);
            console.log(`Folder ${folderName} created successfully.`);
        } else {
            console.log(`Folder ${folderName} already exists.`);
        }
    }
}

// Example usage
const handler = new JsonFileHandler('./data');
handler.createFolder('testFolder');
handler.createJsonFile('test.json', { name: 'John Doe', age: 30 });
const data = handler.readJsonFile('test.json');
console.log(data);
handler.writeJsonFile('test.json', { name: 'Jane Doe', age: 28 });