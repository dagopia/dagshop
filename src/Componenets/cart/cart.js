import { Box } from "@mui/system";
import { useContext } from "react";
import "./cartStyle.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../context/cart.context";

const CartIcon = () => {
  const { isCartopen, setIsCartOpen, cartCount } = useContext(CartContext);
  const toggleIsCartopen = () => setIsCartOpen(!isCartopen);
  console.log(cartCount + "type of cart count " + typeof cartCount);
  return (
    <div className='cart-icon-container' onClick={toggleIsCartopen}>
      <ShoppingIcon className='shopping-icon' />

      <span
        className='item-count'
        style={{ color: "green", fontWeight: 600, fontSize: "12px" }}
      >
        {cartCount}
      </span>
    </div>
  );
};
export default CartIcon;
