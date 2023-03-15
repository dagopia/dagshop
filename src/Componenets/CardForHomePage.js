import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

const CardForHomePage = () => {
  return (
    <Box>
      <Paper
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          backgroundColor: "teal",
          mt: 10,
          p: 2,
          width: "40%",
          borderRadius: "5px",
        }}
      >
        <Grid container spacing={1}>
          <Grid xs={12} md={6} lg={6}>
            <Box
              sx={{
                m: 4,
              }}
            >
              <Typography variant='h5'>
                Wellcome to Our Shopping Center
              </Typography>
              <Typography variant='subtitle2'>
                We have online Services for our customer with online payment
              </Typography>
            </Box>
          </Grid>
          <Grid xs={12} md={6} lg={6} sx={{ p: 1 }}>
            <img
              src='https://images.unsplash.com/photo-1605902711834-8b11c3e3ef2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGNhcnRvb25zJTIwZm9yJTIwc2hvcHBpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
              width='160px'
              height='150px'
            />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};
export default CardForHomePage;
