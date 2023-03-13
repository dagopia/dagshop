import * as React from "react";

import { Card, Button } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";

import { useContext } from "react";
import { ProductsContext } from "../context/catagories.context";
import { Box } from "@mui/system";
import { CartContext } from "../context/cart.context";
import { CardGiftcardTwoTone } from "@mui/icons-material";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);
  return (
    <Box sx={{ flex: { xs: "100%", md: "15%" }, m: 2 }}>
      <Card sx={{}}>
        <CardMedia component='img' height='194' width='200' image={imageUrl} />
        <CardContent>
          <Typography variant='body2' color='text.secondary'>
            {name}
          </Typography>
          <Typography>{price} $</Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Button
            variant='contained'
            onClick={addProductToCart}
            sx={{
              mx: 2,
              bgcolor: "#ff1d58",
              fontWeight: "bold",
              "&.MuiButtonBase-root:hover": {
                bgcolor: "transparent",
                color: "#ff1d58",
              },
            }}
          >
            Add to Cart
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default ProductCard;
