import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import "./cartDropDown.scss";
import CartItem from "../cart/cartItem";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  // Event handler function for Go to checkout button
  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button
        variant='contained'
        sx={{
          mx: 2,
          bgcolor: "#ff1d58",
          fontWeight: "bold",
          "&.MuiButtonBase-root:hover": {
            bgcolor: "transparent",
            color: "#ff1d58",
          },
        }}
        onClick={goToCheckoutHandler}
      >
        Go To Checkout
      </Button>
    </div>
  );
};

export default CartDropdown;
