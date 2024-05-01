import { MongoClient } from "mongodb";
import { Equipment } from "../model/Equipment";
import { randomUUID } from "crypto"

export class EquipmentRepository {
    private client: MongoClient
    constructor(client: MongoClient) {
        this.client = client
    }

    async getCollection() {
        const database = this.client.db()
        return database.collection("equipments")
    }

    async create(equipment: Equipment) {
        const collection = await this.getCollection()
        equipment.id = randomUUID()
        await collection.insertOne(equipment)
        return equipment
    }
}