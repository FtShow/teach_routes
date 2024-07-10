import {createBrowserRouter, Link, Outlet} from "react-router-dom";
import App from "../App";
import {Error404} from "../components/pages/Error404";
import {Adidas} from "../components/pages/Adidas";
import {Prices} from "../components/pages/Prices";
import {Abibas} from "../components/pages/Abibas";
import {Puma} from "../components/pages/Puma";
import {Model} from "../components/pages/Model";
import {ProtectedPage} from "../components/pages/ProtectedPage";
import {ProtectedPageRoute} from "../components/pages/ProtectedPageRoute";

const PATH = {
    ADIDAS: '/adidas',
    PUMA: '/puma',
    ABIBAS: '/abibas',
    PRICES: '/prices',
    MODEL: '/:model/:id',
    PROTECTED_PAGE: '/ProtectedPage',
    ERROR: '*'

} as const

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <Error404/>,
        children: [
            {
                path: PATH.ADIDAS,
                element: <Adidas/>
            },
            {
                path: PATH.PUMA,
                element: <Puma/>
            },
            {
                path: PATH.ABIBAS,
                element: <Abibas/>
            },
            {
                path: PATH.PRICES,
                element: <Prices/>
            },
            {
                path: PATH.MODEL,
                element: <Model/>
            },
            {
                path: PATH.MODEL,
                element: <Model/>
            },
            {
                path: PATH.ERROR,
                element: <Error404/>
            },
            {
                path: PATH.PROTECTED_PAGE,
                element:
                    <ProtectedPageRoute>
                        <ProtectedPage/>
                    </ProtectedPageRoute>
            },
        ]
    },

]);
