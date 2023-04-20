import React, { useState } from "react";
import {
    FaList,FaUser,FaCartPlus,FaBars
} from "react-icons/fa";
import { RiPlayListAddLine } from "react-icons/ri";
import { HiUsers } from "react-icons/hi";
import { NavLink } from "react-router-dom";

const Sidebar = ({children}) => {
    const[isOpen,setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            path:"/productCatelog",
            name:"Product Catelog",
            icon:<FaList/>
        },
        {
            path:"/addproducts",
            name:"Add Product",
            icon:<RiPlayListAddLine/>
        },
        {
            path:"/addUser",
            name:"Add User",
            icon:<HiUsers/>
        },
        {
            path:"/buyer-customer",
            name:"Buyer/Customer",
            icon:<FaUser/>
        },
        {
            path:"/customerWishlist",
            name:"Customer Wishlist",
            icon:<FaCartPlus/>
        },
        {
            path:"/vendor",
            name:"Vendors",
            icon:<FaUser/>
        },
    ]
    return (
        <div className="container">
            <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
                <div className="top_section">
                    <h1 style={{display: isOpen ? "block" : "none"}} className="logo">SHREE</h1>
                    <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                        <FaBars onClick={toggle}/>
                    </div>
                </div>
                {
                    menuItem.map((item,index)=>(
                        <NavLink to={item.path} key={index} className="link" activeclassname="action">
                            <div className="icon">{item.icon}</div>
                            <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            <main>{children}</main>
        </div>
    );
};

export default Sidebar;