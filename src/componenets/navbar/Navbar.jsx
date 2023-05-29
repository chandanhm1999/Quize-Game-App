import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import logo from "../../assets/img/logo.jpg"
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

const Navbar = () => {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 600);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Box
      sx={{
        
        height: { xl: "80px", lg: "80px", md: "80px", sm: "60px", xs: "60px" },
        background: "black",
        mt:"-8px",
        ml:"-8px",
        mr: { xl: "-8px", lg: "-8px", md: "-8px", sm: "-24px", xs: "-24px" },
        
      }}
    >
      <Grid
        item
        xs={8}
        sx={{
          color: "white",
          position: "absolute",
          ml: { xl: "1248px", lg: "1248px", md: "885px", sm: "600px", xs: "26px" },
          top: { xl: "30px", lg: "30px", md: "30px", sm: "12px", xs: "12px" },
        }}
      >
        {isMobileView ? (
          <Box
            sx={{
              display: "flex",
              position: "absolute",
              left: { sm: "360px", xs: "330px" },
              top: { sm: "10px", xs: "3px" },
            }}
          >
            <HomeOutlinedIcon />
          </Box>
        ) : (
          <LoginOutlinedIcon />
        )}
      </Grid>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          width: { xl: "175px", lg: "175px", md: "75px", sm: "44px", xs: "44px" },
          height: { xl: "80px", lg: "80px", md: "43px", sm: "25px", xs: "25px" },
          left: { xl: "40px", lg: "40px", md: "40px", sm: "26px", xs: "26px" },
          top: { xl: "0px", lg: "0px", md: "18px", sm: "12px", xs: "12px" },
        }}
      >
        <img src={logo} alt='' />
      </Box>
      <Button variant="text"
        sx={{
          position: "absolute",
          left: { xl: "1279px", lg: "1279px", md: "920px", sm: "628px", xs: "26px" },
          top: { xl: "18px", lg: "18px", md: "18px", sm: "2px", xs: "12px" },
          color: "white",
          fontSize: "20px",
          display: "flex",
        }}
      >
        {isMobileView ? "" : "Log Out"}
      </Button>
    </Box>
  );
};

export default Navbar;
