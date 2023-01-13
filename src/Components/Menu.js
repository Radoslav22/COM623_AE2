import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import useAuth from "../services/firebase/useAuth";
import { AccountCircle, Home, Timer, CalendarToday, PlaylistAddCheck } from '@mui/icons-material';
import SolentLogo from "../assets/Solentlogo.png"
import { Link } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

const drawerWidth = 240;



const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function HeaderMenu() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [auth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);


    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const { user, signUserOut } = useAuth();
    if (!user.uid) { return "" }

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }} >
            <CssBaseline />
            <AppBar position="static" open={open} sx={{ alignContent: "center", background: 'white' }}>
                <Toolbar>
                    <IconButton
                        color="black"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon fontSize='large' />
                    </IconButton>
                    <Typography >
                        <h6> </h6>
                    </Typography>
                    <img src={SolentLogo} alt="Solent Logo" style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', height: '36px' }} ></img>
                    {auth && (
                        <div>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="black"
                            >
                                <AccountCircle fontSize='large' />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}>{user.displayName || user.email}  </MenuItem>
                                <MenuItem onClick={handleClose}><span onClick={signUserOut}>Logout</span></MenuItem>
                            </Menu>
                        </div>
                    )}
                </Toolbar>

            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        background: "#93A392"
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List >
                    <Link style={{ textDecoration: "none" }} to='/'>
                        <ListItemButton >

                            <ListItemIcon>
                                <Home fontSize='large' sx={{ color: 'white' }} />
                            </ListItemIcon >
                            <ListItemText sx={{ color: 'white' }}>Home</ListItemText>

                        </ListItemButton>
                    </Link>
                    <Link style={{ textDecoration: "none" }} to='/timer'>
                        <ListItemButton>
                            <ListItemIcon>
                                <Timer fontSize='large' sx={{ color: 'white' }} />
                            </ListItemIcon >
                            <ListItemText sx={{ color: 'white' }}>Timer</ListItemText>
                        </ListItemButton>
                    </Link>
                    <Link style={{ textDecoration: "none" }} to='/calendar'>
                        <ListItemButton>
                            <ListItemIcon>
                                <CalendarToday fontSize='large' sx={{ color: 'white' }} />
                            </ListItemIcon >
                            <ListItemText sx={{ color: 'white' }}>Calendar</ListItemText>
                        </ListItemButton>
                    </Link>
                    <Link style={{ textDecoration: "none" }} to='/todo'>
                        <ListItemButton>
                            <ListItemIcon >
                                <PlaylistAddCheck fontSize='large' sx={{ color: 'white' }} />
                            </ListItemIcon >
                            <ListItemText sx={{ color: 'white' }}>Check List</ListItemText>
                        </ListItemButton>
                    </Link>

                </List>
                <Divider />

            </Drawer>

        </Box >
    );
}