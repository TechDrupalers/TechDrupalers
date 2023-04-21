import React, { useState } from "react";
import {
    FaList,FaUser,FaCartPlus,FaBars
} from "react-icons/fa";
import { RiPlayListAddLine } from "react-icons/ri";
import { HiUsers } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import "./AdminSidebar.css";

const AdminSidebar = ({children}) => {
    const[isOpen,setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            path:"/admindashboard/productCatelog",
            name:"Product Catelog",
            icon:<FaList/>
        },
        {
            path:"/admindashboard/addproducts",
            name:"Add Product",
            icon:<RiPlayListAddLine/>
        },
        {
            path:"/admindashboard/addUser",
            name:"Add User",
            icon:<HiUsers/>
        },
        {
            path:"/admindashboard/buyer-customer",
            name:"Buyer/Customer",
            icon:<FaUser/>
        },
        {
            path:"/admindashboard/customerWishlist",
            name:"Customer Wishlist",
            icon:<FaCartPlus/>
        },
        {
            path:"/admindashboard/vendor",
            name:"Vendors",
            icon:<FaUser/>
        },
    ]
    return (
        <div className="ad-container">
            <div style={{width: isOpen ? "200px" : "50px"}} className="ad-sidebar">
                <div className="ad-top_section">
                    <h1 style={{display: isOpen ? "block" : "none"}} className="ad-logo">SHREE</h1>
                    <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="ad-bars">
                        <FaBars onClick={toggle}/>
                    </div>
                </div>
                {
                    menuItem.map((item,index)=>(
                        <NavLink to={item.path} key={index} className="ad-link" activeclassname="action">
                            <div className="ad-icon">{item.icon}</div>
                            <div style={{display: isOpen ? "block" : "none"}} className="ad-link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            <main>{children}</main>
        </div>
    );
};

export default AdminSidebar;