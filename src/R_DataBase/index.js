import { RDB } from "./DB"

const handler = new RDB();
const DataBaseName = 'user.json'


export const getData = async () => {
    const data = await handler.readTable(DataBaseName);
    return data
}

export const getDataById = async (id) => {
    const data = await handler.readTable(DataBaseName);
    return data.filter(item => item.id === id)[0]
}

export const sendData = async (opj) => {
    await handler.updateTable(DataBaseName, opj);
    const newData = await getData()
    return newData
}

