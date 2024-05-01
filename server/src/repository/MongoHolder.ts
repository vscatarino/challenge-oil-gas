import { MongoClient } from "mongodb";

let client: MongoClient

async function initializeMongoClient() {
    console.debug('Conectando com o mongo...')
    const uri = "mongodb://localhost:27017"
    client = new MongoClient(uri, { minPoolSize: 3 })
    await client.connect()
    console.debug('mongo conectado.')
}

const promiseConnected = initializeMongoClient()

export async function getClient() {
    try {
        await promiseConnected
        return client
    } catch (error) {
        console.error(error)
        throw new Error("Verifique a conexão com o banco de dados.")
    }
}