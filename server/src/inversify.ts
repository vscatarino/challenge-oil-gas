import { MongoClient } from "mongodb";
import EquipmentService from "./services/EquipmentService";
import { getClient } from "./repository/MongoHolder";
import { EquipmentRepository } from "./repository/EquipmentRepository";

class Container {
    private client?: MongoClient
    private equipmentRepository?: EquipmentRepository
    private equipmentService?: EquipmentService

    async getClientDb() {
        if (!this.client) {
            this.client = await getClient()
        }

        return this.client
    }

    async getEquipmentRepository() {
        if (!this.client) {
            this.client = await this.getClientDb()
        }
        if (!this.equipmentRepository) {
            this.equipmentRepository = new EquipmentRepository(this.client)
        }

        return this.equipmentRepository
    }

    async getEquipmentService() {
        if (!this.equipmentRepository) {
            this.equipmentRepository = await this.getEquipmentRepository()
        }

        if (!this.equipmentService) {
            this.equipmentService = new EquipmentService(this.equipmentRepository)
        }
        return this.equipmentService
    }
}

const container = new Container()

export { container }