import { SignInForm } from "../Componenets/signInForm";
import { SignUpForm } from "../Componenets/SignUp.Form";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import "./nav.style.scss";
const Authentication = () => {
  return (
    <>
      <div>
        <Grid container spacing={1}>
          <Grid xs={12} md={12}>
            <SignInForm />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Authentication;
