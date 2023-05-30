import { Box } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";


export const Navbar = () => {
  return (
    <Box style={{ display: "flex", justifyContent: "space-around", border:"1px solid black", height:"50px", alignItems:"center" }}>
      <Link to={"/"}>
        <Box>Products</Box>
      </Link>
      <Link to={"/addProduct"}>
        <Box>ADD Product</Box>
      </Link>
    </Box>
  );
};
