import { Equipment } from "../model/Equipment";

export default class EquipmentService {
    constructor() {

    }

    create(equipment: Equipment) {
        console.log("criando o Equipamento: ", equipment)
    }
}