import EquipmentService from "./services/EquipmentService";

class Container {

    getEquipmentService() {
        return new EquipmentService()
    }
}

const container = new Container()

export { container }