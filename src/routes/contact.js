import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import { Button, Link, Paper, Typography } from "@mui/material";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const Contact = () => {
  return (
    <Box sx={{ p: 2, m: 2 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          m: 2,
        }}
      >
        <Typography variant='h3' sx={{ color: "teal", fontWeight: "bold" }}>
          Contact Us
        </Typography>
      </Box>
      <Grid container spacing={0}>
        <Grid xs={6} md={6} ld={6}>
          <Paper
            sx={{
              bgcolor: "#FFFFF",
              minHeight: "450px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              variant='h4'
              sx={{
                color: "teal",
                fontWeight: "bold",

                fontWeight: "bold",
              }}
            >
              Talk to a mamber of our sales Team
            </Typography>
            <Typography>We'll help you to find the right product.</Typography>
            <Button
              variant='contained'
              sx={{
                bgcolor: "teal",
                my: 2,
                ":hover": "white",
                color: "White",
                fontWeight: "bold",
              }}
            >
              Contact Team
            </Button>
          </Paper>
        </Grid>

        <Grid xs={6} md={6} ld={6}>
          <Paper
            sx={{
              minHeight: "450px",

              backgroundImage: `url("https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80")`,
              backgroundPosition: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <Link to='/any-url'>
                <TelegramIcon />
              </Link>
              <Link to='/any-url'>
                <InstagramIcon />
              </Link>
              <Link to='/any-url'>
                <FacebookIcon />
              </Link>
              <Link to='/any-url'>
                <LinkedInIcon />
              </Link>
            </Box>
            <Box sx={{ p: 2, m: 2, color: "white", fontWeight: "bold" }}>
              <Typography>
                {" "}
                <TelegramIcon />
                Phone +251933907735
              </Typography>{" "}
              <Typography>
                {" "}
                <TelegramIcon />
                Phone +251933907735
              </Typography>{" "}
              <Typography>
                {" "}
                <TelegramIcon />
                Phone +251933907735
              </Typography>{" "}
              <Typography>
                {" "}
                <TelegramIcon />
                Phone +251933907735
              </Typography>{" "}
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
