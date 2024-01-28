/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const NavItems = ({ className, activeLink, onClickLink }) => {
    return (
        <ul className={className} onClick={onClickLink}>
            <NavLink className={(link) => activeLink(link)} to="/">
                Home
            </NavLink>
            <NavLink className={(link) => activeLink(link)} to="/courses">
                Courses
            </NavLink>
            <NavLink className={(link) => activeLink(link)} to="/blogs">
                Blogs
            </NavLink>
            <NavLink className={(link) => activeLink(link)} to="/aboutus">
                About us
            </NavLink>
        </ul>
    );
};

export default NavItems;
