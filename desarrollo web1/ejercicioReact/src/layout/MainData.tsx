import { Outlet } from "react-router-dom";
import NavbarDefault from "./NavbarDefault";


export function MaindData(){
    return (
        <>
            <NavbarDefault></NavbarDefault>            
            <main>
                <Outlet></Outlet>
            </main>
        </>
    )
}