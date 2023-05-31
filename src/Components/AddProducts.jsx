import {Box, Button, Text,Input} from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/AddProducts.css";

export const AddProducts = () => {
  const [formData,setFormData]=useState({});
  let navigate=useNavigate();

  const handleChange=(e)=>{
      let name=e.target.name;
      let val=e.target.value;
      setFormData({...formData,[name]:val})

  }

  const handleClick=(e)=>{
   e.preventDefault();
   console.log(formData,"formDAta");
   alert("Product Added succesfully");
   navigate("/"); 
  }
  
  
  return (
    <Box>  
       <Text fontSize="20px" marginTop={"20px"} marginBottom={"20px"}>Add Products</Text>
        <form className="form">    
          <Input onChange={handleChange} name="ProductID" type="string" placeholder="Enter url of the product" required />
          <Input onChange={handleChange} name="ProductName" type="string" placeholder="Enter product name"/>
          <Input onChange={handleChange} name="SupplierID" type="number" placeholder="Enter supplier Id"/>
          <Input onChange={handleChange} name="CategoryID" type="number" placeholder="Enter Category Id"/>
          <Input onChange={handleChange} name="QuantityPerUnit" type="string" placeholder="Enter Quantity per unit"/>
          <Input onChange={handleChange} name="UnitPrice" type="number" placeholder="Enter Unit Price"/>
          <Input onChange={handleChange} name="UnitsInStock" type="number" placeholder="Enter Units in stock"/>
          <Input onChange={handleChange} name="UnitsOnOrder" type="number" placeholder="Enter Units on Order"/>
          <Input onChange={handleChange} name="ReordLevel" type="number" placeholder="Enter Reorder Level"/>
          <Input onChange={handleChange} name="Discontinued" type="boolean" placeholder="Enter Discontinued"/>
          <Button onClick={handleClick}>ADD</Button>
        </form>
      
    </Box>
  );
};
