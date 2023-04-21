import React, { useState } from "react";
import {
    FaList,FaCartPlus,FaBars,FaShoppingCart
} from "react-icons/fa";
import {AiFillDollarCircle} from "react-icons/ai";
import { GoTasklist } from "react-icons/go";
import { NavLink } from "react-router-dom";
import "./BuyerSidebar.css";

const BuyerSidebar = ({children}) => {
    const[isOpen,setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            path:"/buyersdashboard/productCatelog",
            name:"Product Catelog",
            icon:<FaList/>
        },
        {
            path:"/buyersdashboard/mycart",
            name:"MyCart",
            icon:<FaShoppingCart/>
        },
        {
            path:"/buyersdashboard/wishlist",
            name:"Wishlist",
            icon:<GoTasklist/>
        },
        {
            path:"/buyersdashboard/orders",
            name:"Orders",
            icon:<FaCartPlus/>
        },
        {
            path:"/buyersdashboard/invoices",
            name:"Invoices",
            icon:<AiFillDollarCircle/>
        },
    ]
    return (
        <div className="buy-container">
            <div style={{width: isOpen ? "200px" : "50px"}} className="buy-sidebar">
                <div className="buy-top_section">
                    <h1 style={{display: isOpen ? "block" : "none"}} className="buy-logo">SHREE</h1>
                    <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="buy-bars">
                        <FaBars onClick={toggle}/>
                    </div>
                </div>
                {
                    menuItem.map((item,index)=>(
                        <NavLink to={item.path} key={index} className="buy-link" activeclassname="buy-action">
                            <div className="buy-icon">{item.icon}</div>
                            <div style={{display: isOpen ? "block" : "none"}} className="buy-link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            <main>{children}</main>
        </div>
    );
};

export default BuyerSidebar;