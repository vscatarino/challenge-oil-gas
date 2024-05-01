import { Equipment } from "../model/Equipment";
import { EquipmentRepository } from "../repository/EquipmentRepository";

export default class EquipmentService {
    private equipmentRepository: EquipmentRepository
    constructor(equipmentRepository: EquipmentRepository) {
        this.equipmentRepository = equipmentRepository
    }

    async create(equipment: Equipment) {
        console.log("criando o Equipamento: ", equipment)
        const device: Equipment = await this.equipmentRepository.create(equipment)
        console.log("equioamento criado: ", device)
        return device
    }

    async createMany(equipments: Equipment[]){
        console.log("criando o Equipamentos: ", equipments)
        const devices: Equipment[] = await this.equipmentRepository.createMany(equipments)
        console.log("Equipamentos criados: ", devices)
        return devices
    }
}