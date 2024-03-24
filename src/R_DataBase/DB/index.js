
const fs = require('fs')
const path = require('path')

export class RDB {
    constructor() {
        this.basePath = './src/R_DataBase/DB/';
    }

    async readTable(tableName) {
        const filePath = path.join(process.cwd(), 'src', 'R_DataBase', 'DB', tableName);
        if (fs.existsSync(filePath)) {
            const data = await fs.readFileSync(filePath, 'utf8');
            return JSON.parse(data);
        } else {
            console.error(`File ${tableName} does not exist.`);
            return null;
        }
    }

    async updateTable(tableName, data) {
        const filePath = path.join(process.cwd(), 'src', 'R_DataBase', 'DB', tableName);
        if (fs.existsSync(filePath)) {
            const oldData = await this.readTable(tableName)
            fs.writeFileSync(filePath, JSON.stringify([...oldData, data]));
            console.log(`File ${tableName} updated successfully.`);
        } else {
            console.error(`File ${tableName} does not exist.`);
        }
    }
}

