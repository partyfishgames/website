import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { LinkContainer } from 'react-router-bootstrap';

import "./CollapseBar.css";

import FishIcon from "../images/fish.png";

const pages = ['About', 'News',  'Installation', 'Contribution', 'Screenshots', 'Documentation'];

const ResponsiveAppBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar style={{background: "#023E8A", color:"#222f3e"}} position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                <img src={FishIcon} alt="fishicon" style={{ width: "50px", height: "50px" }}></img>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex', lg: 'flex'} }}>
                        <LinkContainer to="/">
                                <Button
                                    sx={{ my: 2, color: "white", textTransform: 'none', display: 'block', fontSize: 20 }}
                                >
                                    PartyFish
                                </Button>
                        </LinkContainer>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'none', lg: 'flex'}}}>
                        {pages.map((page) => (
                            <LinkContainer to={'/' + page.toLowerCase()}>
                                <Button
                                    sx={{ my: 2, color: "white", textTransform: 'none', display: 'block' }}
                                >
                                    {page}
                                </Button>
                            </LinkContainer>
                        ))}
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'none', lg: 'flex'} }}>
                        <Link 
                            href="https://github.com/partyfishgames" 
                            underline="none"
                            color="inherit"
                            target="_blank"
                            rel="noreferrer"
                            style={{ display: "block", marginLeft: "auto", marginRight: 0 }}
                        >
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                            >
                                <i style={{color: "white"}} class="fab fa-github"></i>
                            </IconButton>
                        </Link>
                        <Link 
                            href="https://discord.com/invite/2WHbAQp8dp" 
                            underline="none"
                            target="_blank"
                            rel="noreferrer"
                            color="inherit"
                            style={{ display: "block", marginRight: 0 }}
                        >
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                color="inherit"
                            >
                                <i style={{color: "white"}} class="fab fa-discord"></i>
                            </IconButton>
                        </Link>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex', lg: 'none'} }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                            style={{ display: "block", marginLeft: "auto", marginRight: 0 }}
                        >
                            <MenuIcon style={{color: "white"}} />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'block' },
                            }}
                        >
                            {pages.map((page) => (
                                <LinkContainer to={'/' + page.toLowerCase()}>
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                </LinkContainer>
                            ))}
                            <MenuItem key="discord">
                                <a target="_blank" rel="noreferrer" href="https://discord.com/invite/2WHbAQp8dp">
                                    <Typography textAlign="center">Discord</Typography>
                                </a>
                            </MenuItem>
                            <MenuItem key="github">
                                <a target="_blank" rel="noreferrer" href="https://github.com/partyfishgames">
                                    <Typography textAlign="center">Github</Typography>
                                </a>
                            </MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default ResponsiveAppBar;