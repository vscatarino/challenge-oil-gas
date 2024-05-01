import { MongoClient } from "mongodb";
import EquipmentService from "./services/EquipmentService";
import { getClient } from "./repository/MongoHolder";

class Container {
    private client?: MongoClient

    async getClientDb() {
        if (!this.client) {
            this.client = await getClient()
        }

        return this.client
    }

    getEquipmentService() {
        return new EquipmentService()
    }
}

const container = new Container()

export { container }