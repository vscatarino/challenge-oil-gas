import { Equipment } from "../model/Equipment";
import { Period, PeriodType } from "../model/Period";
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

    async createMany(equipments: Equipment[]) {
        console.log("criando o Equipamentos: ", equipments)
        const devices: Equipment[] = await this.equipmentRepository.createMany(equipments)
        console.log("Equipamentos criados: ", devices)
        return devices
    }

    async findEquipmentsByPeriod(period: PeriodType) {
        console.log("Search equipment bay period of: ", period)
        const hours = this.convertPeriodToHours()[period]
        console.log("Hours: ", hours)
        const dateISO = this.getDataIso(hours)
        console.log("iso: ", dateISO)
        const equipmentList = await this.equipmentRepository.findEquipamentsByPeriod(dateISO)
        return equipmentList
    }

    private convertPeriodToHours() {
        return {
            [Period.ONE_DAY]: 24,
            [Period.TWO_DAY]: 48,
            [Period.ONE_WEEK]: 168,
            [Period.ONE_MONTH]: 720 //considerando que o mês tem 30 dias
        }
    }

    private getDataIso(hours: number) {
        let now = new Date()
        let initialDate = new Date(now)

        initialDate.setHours(now.getHours() - hours)
        return initialDate.toISOString()

    }
}