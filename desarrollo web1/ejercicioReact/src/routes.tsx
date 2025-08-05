import { createBrowserRouter } from "react-router-dom";
import ListProductView from "./pages/ListProductView";
import { MaindData } from "./layout/MainData";
import App from "./App";
import { CreateProducView } from "./pages/CreateProductos";


const router = createBrowserRouter([
    {
        element: <MaindData/>,
        children:[{
            path:'/',
            element: <App/> 
        },
            {
                path:'/productos',
                element: <ListProductView/>
            },
            {
                path:'/CreateProduct',
                element: <CreateProducView />
            }
        ]
    },
])

export default router;

