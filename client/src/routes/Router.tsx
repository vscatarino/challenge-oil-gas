import EquipmentChart from "../EquipmentChart";

const Router: RouteObject[] = [
    {
        path: "/",
        element: <EquipmentChart />
    },
    {
        path: "/chart",
        element: <EquipmentChart />
    }
]

export default Router