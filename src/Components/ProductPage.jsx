import { Box, Grid, GridItem, Button, Text } from "@chakra-ui/react";
import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getData } from "../Redux/action";

export function ProductPage() {
  const products = useSelector((store) => store.product.data);
  
  const {loading, err} = useSelector((store) => store.product);

  const dispatch = useDispatch();

  const [skip,setSkip]=useState(0);

  useEffect(() => {
    dispatch(getData(skip));
  }, [skip]);

  console.log(products);
  if (loading == true) {
    return <Box>Loading....</Box>;
  } else if (err == true) {
    return <Box>Something went wrong...</Box>;
  }

  return (
    <Box>
      <Grid
        p={10}
        templateColumns={{
          xl: "repeat(4,1fr)",
          md: "repeat(2,1fr)",
          sm: "repeat(1,1fr)",
        }}
        gap={6}
      >
        {products.map((e) => (
          <Link key ={e.ProductID} to={`product/${e.ProductID}`}>
            <Box>
              <GridItem             
                p={5}
                borderRadius={"15px"}
                border={"1px solid black"}>
                <Text fontWeight={"bold"}>ProductID: {e.ProductID}</Text>
                <Text fontWeight={"bold"}>ProductName: {e.ProductName}</Text>    
                <Text>UnitPrice: {e.UnitPrice}</Text>
                <Text>UnitsInStock: {e.UnitsInStock}</Text>
                <Text>UnitsOnOrder: {e.UnitsOnOrder}</Text>
                <Text>SupplierID: {e.SupplierID}</Text>
                <Text>CategoryID: {e.CategoryID}</Text>
                <Text>ReorderLevel: {e.ReorderLevel}</Text>            
              </GridItem>
            </Box>
          </Link>
        ))}
      </Grid>

{/* pagination */}
    <Box display="flex" w={["","","","20%"]} m={["auto","auto","auto","auto"]} >
    <Button color="red" disabled={skip===0} onClick={()=>setSkip(skip-10)}>Previous</Button>
      <Button ml="5%"  _hover={{bgColor:'black'}}  bgColor="black"  color="white">{(skip/10)+1}</Button>
      <Button ml="5%" mb="30px" color="red"  onClick={()=>setSkip(skip+10)}>Next</Button>
    </Box>

    </Box>

  );
}
