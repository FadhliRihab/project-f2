import * as React from 'react';
import "../App.css"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function ButtonAppBar() {
  return (
    <div className="box">
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static" style={{ background: "#79871c" }}>
        <Toolbar>
            <IconButton>
                <img className='logo' src="letter-D-PNG-Stock-Photo.png" alt="404" width="30px"></img>
            </IconButton>
        
            <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <a href='#'>Home</a>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <a href='#'>Pages</a>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <a href='#'>Contact us</a>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <i className="fa-solid fa-cart-shopping"></i>
          </Typography>
          
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  );
}