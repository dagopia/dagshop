import logo from "./logo.svg";
import "./App.css";
import "./Componenets/catagories.scss";
import CatagoryItem from "./Componenets/CatagoryItem";
import Home from "./routes/home";
import { Routes, Route, Outlet } from "react-router-dom";
import Nav from "./routes/navigation";
import Authentication from "./routes/Authentication";
import Shop from "./routes/Shop";
import { SignUpForm } from "./Componenets/SignUp.Form";
import Checkout from "./routes/CheckOut/checkout";
import Contact from "./routes/contact";
import { Box } from "@mui/system";
import { SignInForm } from "./Componenets/signInForm";
const App = () => {
  return (
    <Box sx={{}}>
      <Routes>
        <Route path='/' element={<Nav />}>
          <Route index element={<Home />} />
          <Route path='shop/*' element={<Shop />} />
          <Route path='auth' element={<Authentication />} />
          <Route path='signup' element={<SignUpForm />} />
          <Route path='signin' element={<SignInForm />} />

          <Route path='checkout' element={<Checkout />} />
          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>
    </Box>
  );
};

export default App;
