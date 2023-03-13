import * as React from "react";
import { Box, styled } from "@mui/system";
import { useContext } from "react";
import "./cartStyle.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../context/cart.context";
import { Badge, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const StyledBadge = styled(Badge)(() => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `1px solid white`,
    padding: "0 4px",
  },
}));

const CartIcon = () => {
  const { isCartopen, setIsCartOpen, cartCount } = useContext(CartContext);
  const toggleIsCartopen = () => setIsCartOpen(!isCartopen);
  console.log(cartCount + "type of cart count " + typeof cartCount);
  return (
    <IconButton aria-label='cart' onClick={toggleIsCartopen}>
      <StyledBadge badgeContent={cartCount} sx={{ color: "#E90064" }}>
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
};
export default CartIcon;
