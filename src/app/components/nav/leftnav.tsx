import { Menu, Bell, Settings, LogOut, Building2 } from "lucide-react";

function LeftNav() {
    return(
        <div>
        <nav
            className={`fixed z-[200] h-full bg-slate-100 lg:bg-transparent
                lg:w-1/6 sm:w-1/3 md:w-1/4 
                lg:left-0 transition-all duration-300`}
        >
            <ul className="p-4 space-y-4 text-black text-lg">
                <div className="flex items-center space-x-2  rounded-md p-2 ">
                    <Building2 className="h-8 w-8 text-black" />
                    <span className="text-xl font-semibold text-black">BigManager</span>
                </div>
            </ul>
        </nav>
        </div>
    )
}

export default LeftNav;