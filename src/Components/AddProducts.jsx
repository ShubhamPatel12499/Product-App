import {Box, Button, Text,Input, FormLabel, FormControl} from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/AddProducts.css";
import { useDispatch } from "react-redux";
import { ADD_PRODUCT } from "../Redux/action";

export const AddProducts = () => {
  const [formData,setFormData]=useState({});
  const dispatch=useDispatch();
  let navigate=useNavigate();

  const handleChange=(e)=>{
      let name=e.target.name;
      let val=e.target.value;
      setFormData({...formData,[name]:val})

  }

  const handleClick=(e)=>{
   e.preventDefault();
  // console.log(formData,"formDAta");
   dispatch(ADD_PRODUCT(formData));
   alert("Product Added succesfully");
   navigate("/"); 
  }
  
  
  return (
    <Box>  
       <Text fontSize="20px" marginTop={"20px"} marginBottom={"20px"}>Add Products</Text>
        <FormControl w="40%" className="form" isRequired>    
          <FormLabel ml="7px" >Enter url of the product</FormLabel>
          <Input onChange={handleChange} name="ProductID" type="string" placeholder="Enter url of the product" />

          <FormLabel  mt="12px" ml="7px">Enter product name</FormLabel>
          <Input onChange={handleChange} name="ProductName" type="string" placeholder="Enter product name"/>

          <FormLabel  mt="12px" ml="7px">Enter supplier Id</FormLabel>
          <Input onChange={handleChange} name="SupplierID" type="number" placeholder="Enter supplier Id"/>

          <FormLabel  mt="12px" ml="7px">Enter Category Id</FormLabel>
          <Input onChange={handleChange} name="CategoryID" type="number" placeholder="Enter Category Id"/>

          <FormLabel  mt="12px" ml="7px">Enter Quantity per unit</FormLabel>
          <Input onChange={handleChange} name="QuantityPerUnit" type="string" placeholder="Enter Quantity per unit"/>

          <FormLabel  mt="12px" ml="7px">Enter Unit Price</FormLabel>
          <Input onChange={handleChange} name="UnitPrice" type="number" placeholder="Enter Unit Price"/>

          <FormLabel  mt="12px" ml="7px">Enter Units in stock</FormLabel>
          <Input onChange={handleChange} name="UnitsInStock" type="number" placeholder="Enter Units in stock"/>

          <FormLabel  mt="12px" ml="7px">Enter Units on Order</FormLabel>
          <Input onChange={handleChange} name="UnitsOnOrder" type="number" placeholder="Enter Units on Order"/>

          <FormLabel  mt="12px" ml="7px">Enter Reorder Level</FormLabel>
          <Input onChange={handleChange} name="ReordLevel" type="number" placeholder="Enter Reorder Level"/>

          <FormLabel  mt="12px" ml="7px">Enter Discontinued</FormLabel>
          <Input onChange={handleChange} name="Discontinued" type="boolean" placeholder="Enter Discontinued"/>

          <Button onClick={handleClick}>ADD</Button>
        </FormControl>
      
    </Box>
  );
};
