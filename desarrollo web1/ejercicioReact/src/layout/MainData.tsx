import { Outlet } from "react-router-dom";
import NavbarDefault from "./NavbarDefault";


export function MaindData(){
    return (
        <>
            <header>
                <NavbarDefault></NavbarDefault>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
        </>
    )
}