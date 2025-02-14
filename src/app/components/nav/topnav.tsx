import { Menu, Bell, Settings, LogOut } from "lucide-react";

function TopNav() {
    return(
        <div className="lg: w-6/12 ml-auto">
                <nav className="fixed top-0 px-4 lg:justify-end w-full lg:w-5/6 z-0 border-b-2 lg:border-b-0">
                    <div className=" mx-auto px-4 sm:px-6 lg:px-4">
                        <div className="flex justify-between lg:justify-end h-16 items-center">
                            <Menu className="h-6 w-6 text-black cursor-pointer hover:text-teal-200  lg:hidden" />

                            <div className="flex items-center space-x-4 mt-4">
                                <Bell className="h-6 w-6 text-black cursor-pointer hover:text-teal-200 " />
                                <Settings className="h-6 w-6 text-black cursor-pointer hover:text-teal-200 " />
                                <LogOut className="h-6 w-6 text-black cursor-pointer hover:text-teal-200 " />
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
    )
}

export default TopNav;