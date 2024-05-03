import EquipmentChart from "../EquipmentChart";
import { RouteObject } from "react-router-dom"
import { equipmentLoader } from "./loaders/EquipmentsLoader";

const Router: RouteObject[] = [
    {
        path: "/",
        element: <div>Hello</div>
    },
    {
        path: "/chart/:period",
        element: <EquipmentChart />,
        loader: equipmentLoader

    }
]

export default Router