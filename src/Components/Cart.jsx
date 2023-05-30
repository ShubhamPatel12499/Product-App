import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  Img,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

export const Cart = () => {
  let data = JSON.parse(localStorage.getItem("Cart"));
  console.log(data);
  const [total, setTotal] = useState(0);

  function getPrice() {
    let temp = 0;
    for (let i = 0; i < data.length; i++) {
      temp = temp + data[i].price;
    }
    setTotal(temp + 50);
    console.log(total);
  }

  const incQty = () => {
    let cartData = JSON.parse(localStorage.getItem("Cart")) || [];
    cartData.push(data);
    localStorage.setItem("Cart", JSON.stringify(cartData));
  };

  const decQty = () => {
    // let cartData = JSON.parse(localStorage.getItem("Cart")) || [];
    //   cartData.push(data);
    //   localStorage.setItem("Cart",JSON.stringify(cartData));
  };

  const addOrder =(i)=>{
    let details = i+1;
    alert("Order placed")
    let orderData = JSON.parse(localStorage.getItem("Order")) || [];
      orderData.push(details);
      localStorage.setItem("Order",JSON.stringify(orderData));
  }

  useEffect(() => {
    if (!data) {
      return <Heading textAlign={"center"}>Cart is Empty</Heading>;
    } else {
      getPrice();
    }
  }, []);
  return (
    <Box
      justifyContent={"center"}
      width={"80%"}
      border={"1px solid black"}
      m={"auto"}
    >
      <Heading>Total amount is - {total}</Heading>
      <Text>Amount is including 50Rs. Delivery Charge</Text>
      <Grid
        p={10}
        templateColumns={{
          xl: "repeat(3,1fr)",
          md: "repeat(2,1fr)",
          sm: "repeat(1,1fr)",
        }}
        gap={6}
      >
        {!data ? (
          <Heading>Cart is Empty</Heading>
        ) : (
          data.map((e, i) => (
            <Box key={i}>
              <GridItem p={5} borderRadius={"15px"} border={"1px solid black"}>
                <Text fontWeight={"bold"}>{e.brand}</Text>
                <Text>{e.title}</Text>
                <Img src={e.image} m={"auto"}></Img>
                <Text>For {e.category}</Text>
                <Text>RS.{e.price}</Text>
                <Box
                  display={"flex"}
                  m={"auto"}
                  textAlign={"center"}
                  justifyContent={"center"}
                >
                  <Button onClick={() => decQty()}>-</Button>
                  <Text>Quantity</Text>
                  <Button onClick={() => incQty()}>+</Button>
                </Box>
                <Button onClick={()=>addOrder(i)}>Place Order</Button>
              </GridItem>
            </Box>
          ))
        )}
      </Grid>
    </Box>
  );
};
