import {createBrowserRouter} from "react-router-dom";
import App from "./App.tsx";
import {BusTable} from "./components/BusTable.tsx";
import {BusDetail} from "./components/BusDetail.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <BusTable />
            },
            {
                path: "bus/:id",
                element: <BusDetail />
            }
        ]
    }
]);
