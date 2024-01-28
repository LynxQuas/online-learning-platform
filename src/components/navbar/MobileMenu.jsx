/* eslint-disable react/prop-types */
import { Drawer } from "@mui/material";
import { IoMdClose } from "react-icons/io";
import NavItems from "./NavItems";

const MobileMenu = ({ isOpenDrawer, activeLink, openDrawer }) => {
    return (
        <Drawer anchor="left" open={isOpenDrawer} onClose={openDrawer}>
            <div
                className="flex bg-red-700 text-white justify-end p-2"
                onClick={openDrawer}
            >
                <IoMdClose className="h-10 w-10" />
            </div>
            <NavItems
                className="flex bg-red-700 px-20 py-10 h-full flex-col gap-5 text-lg text-stone-300 font-semibold"
                activeLink={activeLink}
                onClickLink={openDrawer}
            />
        </Drawer>
    );
};

export default MobileMenu;
