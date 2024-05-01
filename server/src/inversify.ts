import { MongoClient } from "mongodb";
import EquipmentService from "./services/EquipmentService";
import { getClient } from "./repository/MongoHolder";
import { EquipmentRepository } from "./repository/EquipmentRepository";

class Container {
    private client?: MongoClient
    private equipmentRepository?: EquipmentRepository

    async getClientDb() {
        if (!this.client) {
            this.client = await getClient()
        }

        return this.client
    }

    async getEquipmentRepository() {
        if (!this.client) {
            throw new Error("mongo client is not found")
        }
        if (!this.equipmentRepository) {
            this.equipmentRepository = new EquipmentRepository(this.client)
        }

        return this.equipmentRepository
    }

    getEquipmentService() {
        return new EquipmentService()
    }
}

const container = new Container()

export { container }