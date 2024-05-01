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

    async createMany(equipments: Equipment[]) {
        const collection = await this.getCollection()
        const equipmentList = equipments.map(equipment => {
            equipment.id = randomUUID()
            return equipment
        })

        await collection.insertMany(equipmentList)
        return equipmentList
    }

    async findEquipamentsByPeriod(dateISO: string) {
        let pipeline = [
            {
                $match: {
                    "timestamp": { $gte: new Date(dateISO) }
                }
            },
            {
                $addFields: {
                    "value": { $convert: { input: "$value", to: "double", onError: 0 } }
                }
            },
            {
                $group: {
                    _id: "$equipmentId",
                    media: { $avg: "$value" }
                }
            }
        ]

        const collection = await this.getCollection()
        const list = await collection.aggregate(pipeline).toArray()
        console.log("List: ", list)
        return list

        // const list = await collection.find({ timestamp: { $gte: new Date(dateISO) } }).toArray()
        // return list
    }
}