import React, { useState } from "react";
import {
    FaList,FaCartPlus,FaBars
} from "react-icons/fa";
import {AiFillDollarCircle} from "react-icons/ai";
import { NavLink } from "react-router-dom";
import "./VendorSidebar.css";

const VendorSidebar = ({children}) => {
    const[isOpen,setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            path:"/vendordashboard/productCatelog",
            name:"Product Catelog",
            icon:<FaList/>
        },
        {
            path:"/vendordashboard/orders",
            name:"Orders",
            icon:<FaCartPlus/>
        },
        {
            path:"/vendordashboard/invoices",
            name:"Invoices",
            icon:<AiFillDollarCircle/>
        },
    ]
    return (
        <div className="ven-container">
            <div style={{width: isOpen ? "200px" : "50px"}} className="ven-sidebar">
                <div className="ven-top_section">
                    <h1 style={{display: isOpen ? "block" : "none"}} className="ven-logo">SHREE</h1>
                    <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="ven-bars">
                        <FaBars onClick={toggle}/>
                    </div>
                </div>
                {
                    menuItem.map((item,index)=>(
                        <NavLink to={item.path} key={index} className="ven-link" activeclassname="action">
                            <div className="ven-icon">{item.icon}</div>
                            <div style={{display: isOpen ? "block" : "none"}} className="ven-link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            <main>{children}</main>
        </div>
    );
};

export default VendorSidebar;