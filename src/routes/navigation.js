import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import Dlogo from "../assets/letter-d.svg";
import LocalMallIcon from "@mui/icons-material/LocalMall";

import { UserContext } from "../context/user.context";
import "../routes/nav.style.scss";
import { signOutUser } from "../utils/Firebase";
import CartIcon from "../Componenets/cart/cart";
import CartDropdown from "../Componenets/cart-dropdown/cartDropdown";
import { CartContext } from "../context/cart.context";

const Nav = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartopen } = useContext(CartContext);
  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <LocalMallIcon
            className='logo'
            sx={{ width: "50px", height: "40px" }}
          />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          {currentUser ? (
            <span className='nav-link' onClick={signOutUser}>
              {" "}
              SIGN OUT{" "}
            </span>
          ) : (
            <Link className='nav-link' to='/auth'>
              SIGN IN
            </Link>
          )}

          <Link className='nav-link' to='/contact'>
            Contact
          </Link>
          <Link className='nav-link'>
            <CartIcon sx={{}} />
          </Link>
        </div>
        {isCartopen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Nav;
