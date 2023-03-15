import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import { Button, Link, Paper, Popover, Typography } from "@mui/material";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FavoriteIcon from "@mui/icons-material/Favorite";

import * as React from "react";
const Contact = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
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
        <Grid container spacing={0}>
          <Grid xs={12} md={12} ld={12}>
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
                variant='h3'
                sx={{ color: "#F65A83", fontWeight: "bold", m: 2 }}
              >
                Contact Us
              </Typography>
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
                aria-owns={open ? "mouse-over-popover" : undefined}
                aria-haspopup='true'
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
                sx={{
                  bgcolor: "#F65A83",
                  my: 2,

                  color: "White",
                  fontWeight: "bold",
                  "&.MuiButtonBase-root:hover": {
                    bgcolor: "transparent",
                    color: "#ff1d58",
                  },
                }}
              >
                Contact Team
              </Button>
              <Popover
                id='mouse-over-popover'
                sx={{
                  pointerEvents: "none",
                }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
              >
                <Typography
                  sx={{
                    p: 1,
                    m: 1,
                    color: "#F65A83",
                    fontWeight: "bold",
                  }}
                >
                  Hey Join Us for Everything!
                </Typography>
              </Popover>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  cursor: "pointer",
                  p: 6,
                }}
              >
                <Link to='/any-url'>
                  <TelegramIcon sx={{ m: 1, color: "black" }} />
                </Link>
                <Link to='/any-url'>
                  <InstagramIcon sx={{ m: 1, color: "#ff1d58" }} />
                </Link>
                <Link to='/any-url'>
                  <FacebookIcon sx={{ m: 1, color: "#185ADB" }} />
                </Link>
                <Link to='/any-url'>
                  <LinkedInIcon sx={{ m: 1, color: "#00337C" }} />
                </Link>
                <Link to='/any-url'>
                  <FavoriteIcon sx={{ m: 1, color: "red" }} />
                </Link>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Contact;
