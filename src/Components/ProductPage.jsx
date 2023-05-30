import { Box, Grid, GridItem, Img, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getData } from "../Redux/action";

export function ProductPage() {
  const products = useSelector((store) => store.product.data);
  const {loading, err} = useSelector((store) => store.product);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, []);
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
                border={"1px solid black"}
              >
                {/* <Img src={e.__metadata.url} m={"auto"}></Img> */}
                <Text fontWeight={"bold"}>ProductID: {e.ProductID}</Text>
                <Text fontWeight={"bold"}>ProductName: {e.ProductName}</Text>    
                <Text>UnitPrice: {e.UnitPrice}</Text>
                <Text>UnitsInStock: {e.UnitsInStock}</Text>
              </GridItem>
            </Box>
          </Link>
        ))}
      </Grid>
    </Box>
  );
}
