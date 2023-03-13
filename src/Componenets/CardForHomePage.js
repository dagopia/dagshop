import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";

const CardForHomePage = () => {
  return (
    <Box
      sx={{
        border: "4px solid red",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignSelf: "center",
        alignItems: "center",
        backgroundColor: "teal",
        color: "white",
        maxWidth: "70%",
      }}
    >
      <Box variant='outlined'>
        <Box
          sx={{
            m: 2,
            p: 3,
            color: "White",
            disply: "flex",
            alignItem: "right",
          }}
        >
          <Typography variant='h5'>Wellcome to Our Shopping Center</Typography>
          <Typography variant='subtitle2'>
            We have online Services for our customer with online payment
            Wellcome to Our Shopping Center
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "left" }}>
          <img
            src='https://images.unsplash.com/photo-1605902711834-8b11c3e3ef2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGNhcnRvb25zJTIwZm9yJTIwc2hvcHBpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
            width='200px'
            height='150px'
          />
        </Box>
      </Box>
    </Box>
  );
};
export default CardForHomePage;
