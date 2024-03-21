import fs from 'fs'
import path from 'path'

export class RDB {
    constructor() {
        this.basePath = './src/R_DataBase/DB/';
    }

    readTable(tableName) {
        const filePath = path.join(this.basePath, tableName);
        console.log(filePath)
        if (fs.existsSync(filePath)) {
            const data = fs.readFileSync(filePath, 'utf8');
            return JSON.parse(data);
        } else {
            console.error(`File ${tableName} does not exist.`);
            return null;
        }
    }

    updateTable(tableName, data) {
        const filePath = path.join(this.basePath, tableName);
        if (fs.existsSync(filePath)) {
            fs.writeFileSync(filePath, JSON.stringify(data));
            console.log(`File ${tableName} updated successfully.`);
        } else {
            console.error(`File ${tableName} does not exist.`);
        }
    }
}

