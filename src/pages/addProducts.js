import React, { useEffect } from "react";
import './addProducts.css';

const AddProducts = () => {
    

    const fetchData = () =>{
        fetch("https://testdrupal.ddev.site/product/add/default",{
            method:"POST"
        })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
        });
    };

    useEffect(()=>{
        fetchData();
    },[])

    return (
        <div className="pagetitle">
            <h2>Add Product</h2>
        </div>   
    );
};

export default AddProducts;