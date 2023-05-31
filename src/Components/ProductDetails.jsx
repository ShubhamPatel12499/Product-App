import { Box, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ProductDetails = () => {
  const [data,setData] =  useState({});
  
  let temp = useParams();
  
  let ProductID  = temp.id;
  // console.log(products)
  async function getSingle(ProductID) {

  let url = `https://services.odata.org/V2/Northwind/Northwind.svc/Products(${ProductID})?$format=json`;

  console.log(url,"url")
  try {
    let res = await axios.get(url);
      setData(res.data.d);
     
  } catch (error) {
    console.log(error);
  }
};
  useEffect(()=>{
    getSingle(ProductID)  
  },[])

  return (
   <Box
      p={10} 
      justifyContent={"center"}
      w={{ xl: "70%", "2xl": "70%", md: "50%", sm: "30%" }}
      m={"auto"}
      mt={10}
      border={"1px solid black"}>

      <Text fontWeight={'bold'} mt={2}>ProductName: {data.ProductName}</Text> 
      <Text mt={2}>UnitPrice: {data.UnitPrice}</Text>
      <Text mt={2}>UnitsInStock: {data.UnitsInStock}</Text> 
      <Text>UnitsOnOrder: {data.UnitsOnOrder}</Text>
      <Text>SupplierID: {data.SupplierID}</Text>
      <Text>CategoryID: {data.CategoryID}</Text>
      <Text>ReorderLevel: {data.ReorderLevel}</Text>  
    </Box>
  );
};
