import { RDB } from "./DB"

const handler = new RDB();
const DataBaseName = 'user.json'

const data = handler.readTable(DataBaseName);

export const getData = () => {
    return data
}

export const getDataById = (id) => {
    return data.filter(item => item.id === id)[0]
}

export const sendData = (opj) => {
    handler.updateTable(DataBaseName, [...data, opj]);
    return [...data, opj]
}

