import axios from "axios";
import { json } from "react-router-dom";
import AxiosService from "../../services/AxiosService";
export async function equipmentLoader({ params }: any) {

    try {
        const period = params.period ? params.period : "one_day"
        const url = 'http://localhost:8080/equipments'

        const config = {
            params: { period }
        }
       const resp = await AxiosService.httpGet(url, config)

        let equipments: string[] = []
        let avgList: number[] = []
        resp.data.forEach((element: any) => {
            equipments.push(element._id)
            avgList.push(parseFloat(element.media.toFixed(2)))
        });


        return { equipments, avgList }

    } catch (e) {
        let status = { status: undefined } as any;
        if (axios.isAxiosError(e)) {
            console.error("EquipmentLoader: ", e);
            status.status = e?.response?.status || 0
        }
        console.error(
            "EquipmentLoader: ",
            e
        );
        throw json(
            {
                message:
                    "Desculpe, não foi possível carregar a lista de valores. Por favor, verifique sua conexão e tente novamente",
            },
            status
        );
    }
}