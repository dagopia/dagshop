import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import Dlogo from "../assets/letter-d.svg";
// import { ReactComponent as Dlogo } from "../assets/Dlogo.webp";
import { UserContext } from "../context/user.context";
import "../routes/nav.style.scss";
import { signOutUser } from "../utils/Firebase";
import CartIcon from "../Componenets/cart/cart";
import CartDropdown from "../Componenets/cart-dropdown/cartDropdown";
import { CartContext } from "../context/cart.context";
import { Grid } from "@mui/material";

const Nav = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartopen } = useContext(CartContext);
  return (
    <Fragment>
      <Grid container spacing={0} className='navigation'>
        <Grid xs={12} md={3} lg={3}>
          <Link className='logo-container' to='/'>
            <img src={Dlogo} className='logo' alt="Dagis'Mart" />
          </Link>
        </Grid>

        <Grid container spacing={0} className='nav-links-container'>
          <Grid xs={12} md={3} lg={3}>
            <Link className='nav-link' to='/shop'>
              SHOP
            </Link>
          </Grid>
          {currentUser ? (
            <span className='nav-link' onClick={signOutUser}>
              {" "}
              SIGN OUT{" "}
            </span>
          ) : (
            <Grid xs={12} md={3} lg={3}>
              <Link className='nav-link' to='/auth'>
                SIGN IN
              </Link>
            </Grid>
          )}
          <Grid xs={12} md={3} lg={3}>
            <Link className='nav-link'>
              <CartIcon />
            </Link>
          </Grid>
        </Grid>
        {isCartopen && <CartDropdown />}
      </Grid>
      <Outlet />
    </Fragment>
  );
};

export default Nav;
