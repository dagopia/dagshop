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
          <Grid
            xs={12}
            md={5}
            sx={{
              height: "100%",
            }}
            className='bg-img'
          >
            <SignInForm />
          </Grid>
          <Grid xs={12} md={6} sx={{}}>
            <SignUpForm />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Authentication;
