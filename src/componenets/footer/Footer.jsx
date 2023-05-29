import React from 'react'
import { Box, Typography } from '@mui/material';


const Footer = () => {
    
    
    return (
        <Box>
            <Box sx={{
                height: { xl: "80px", lg: "80px", md: "80px", sm: "50px", xs: "50px" },
                background: "black",
                display: "flex",
                justifyContent: 'left',
                left: "0px",
                mt: "100px",
                ml:"-8px",
                mb: "-10px",
                mr: { xl: "-8px", lg: "-8px", md: "-8px", sm: "-14px", xs: "-24px" },
            }}
            >
                <Typography sx={{
                    color: "white",
                    ml: { xl: "100px", lg: "100px", md: "100px", sm: "60px", xs: "24px" },
                    mt: { xl: "27px", lg: "27px", md: "27px", sm: "18px", xs: "18px" },
                    fontSize: { xl: "18px", lg: "18px", md: "18px", sm: "10px", xs: "10px" },
                }}>
                    © 2023 C_Devops!, All Rights Reserved
                </Typography>
                <Typography sx={{
                    color: "white",
                    ml: { xl: "750px", lg: "750px", md: "350px", sm: "370px", xs: "104px" },
                    mt: { xl: "27px", lg: "27px", md: "27px", sm: "18px", xs: "18px" },
                    fontSize: { xl: "18px", lg: "18px", md: "18px", sm: "10px", xs: "10px" },
                }}>
                    Terms & Conditions | FAQ’s
                </Typography>
            </Box>
        </Box>
    )
}

export default Footer
