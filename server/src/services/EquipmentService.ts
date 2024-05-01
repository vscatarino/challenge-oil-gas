import { ApiError } from "../model/ApiError";
import { Equipment } from "../model/Equipment";
import { Period, PeriodType } from "../model/Period";
import { EquipmentRepository } from "../repository/EquipmentRepository";

export default class EquipmentService {
    private equipmentRepository: EquipmentRepository
    constructor(equipmentRepository: EquipmentRepository) {
        this.equipmentRepository = equipmentRepository
    }

    async create(equipment: Equipment) {
        try {
            const device: Equipment = await this.equipmentRepository.create(equipment)
            return device
        } catch (e) {
            console.error("Error: ", e)
            throw new ApiError("InternalServerError", 500, "Failed to save equipment to the database.")
        }

    }

    async createMany(equipments: Equipment[]) {
        try {
            const devices: Equipment[] = await this.equipmentRepository.createMany(equipments)
            return devices
        } catch (e) {
            console.error("Error: ", e)
            throw new ApiError("InternalServerError", 500, "Failed to save equipment list to the database.")
        }
    }

    async findEquipmentsByPeriod(period: PeriodType) {
        try {
            const hours = this.convertPeriodToHours()[period]
            const dateISO = this.getDataIso(hours)
            const equipmentList = await this.equipmentRepository.findEquipamentsByPeriod(dateISO)
            return equipmentList
        } catch (e) {
            console.error("Error: ", e)
            throw new ApiError("InternalServerError", 500, "Failed to find equipment on the database.")
        }

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