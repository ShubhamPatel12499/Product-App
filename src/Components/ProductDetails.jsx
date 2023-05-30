import { Box, Button, Img, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ProductDetails = () => {
  const [data,setData] =  useState({})
  let temp = useParams();
  let ProductID  = temp.ProductID
  // console.log(products)
  async function getSingle(ProductID) {
    console.log(ProductID)
  let url = `https://services.odata.org/V2/Northwind/Northwind.svc/Products?$format=json/${ProductID}`
  try {
    let res = await axios.get(url);
      console.log(res.data.d.results)
      setData(res.data.d.results)
  } catch (error) {
    console.log(error);
  }
};
  useEffect(()=>{
    getSingle(ProductID)  
  },[])

  let cartData = JSON.parse(localStorage.getItem("Cart")) || [];
  const handleAdd=()=>{
    alert("Item added to list")
    cartData.push(data);
    // let catrItems = JSON.parse(localStorage.getItem("Cart")) || [];  
    localStorage.setItem("Cart",JSON.stringify(cartData));
  }

  return (
   <Box
      p={10} 
      justifyContent={"center"}
      w={{ xl: "70%", "2xl": "70%", md: "50%", sm: "30%" }}
      m={"auto"}
      mt={10}
      border={"1px solid black"}>

      <Text fontWeight={'bold'} mt={2}>{data.ProductName}</Text>
      {/* <Img m={"auto"} mt={5} src={data.image}></Img> */}
      <Text mt={2}>UnitPrice: {data.UnitPrice}</Text>
      <Text mt={2}>UnitsInStock: {data.UnitsInStock}</Text>
      <Button onClick={()=>handleAdd()} mt={2}>ADD</Button>
    </Box>
  );
};
