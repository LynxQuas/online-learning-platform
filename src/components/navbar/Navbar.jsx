import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

import MobileMenu from "./MobileMenu";
import NavItems from "./NavItems";

const Navbar = () => {
    const [isOpenDrawer, setIsOpenDrawer] = useState(false);

    const openDrawer = () => {
        setIsOpenDrawer((prev) => !prev);
    };

    const activeLink = ({ isActive }) => (isActive ? "text-white" : "");

    return (
        <nav className="flex items-center justify-between py-6 px-10 text-xl text-stone-100 bg-red-700">
            <div className="flex items-center gap-4">
                <GiHamburgerMenu
                    className="md:hidden w-6 h-6"
                    onClick={openDrawer}
                />
                <Link to="/">LOGO</Link>
            </div>

            <NavItems
                className="hidden md:flex gap-7 text-lg text-stone-300 font-semibold"
                activeLink={activeLink}
            />

            <div>
                <Link to="/login">Login</Link>
            </div>

            <MobileMenu
                isOpenDrawer={isOpenDrawer}
                activeLink={activeLink}
                openDrawer={openDrawer}
            />
        </nav>
    );
};

export default Navbar;
