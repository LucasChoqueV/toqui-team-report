import {
    AppBar,
    Toolbar,
    Box,
    Typography,
    IconButton,
    Menu,
    Button,
    MenuItem
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material"
import { IMenuItem } from "@/apps/layout/index";
import { styled } from "@mui/material";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const StyledAppBar = styled(AppBar)({
    background: "transparent",
    border: 0,
    boxShadow: "none",
    padding: "0 1em"
});

const StyledMenu = styled(Menu)({
    '& .MuiPaper-root': {
        margin: "-10px 0px 0px 20px"
    }
});

const StyledButton = styled(Button)({
    color: "#000",
    borderRadius: 0,
    width: "110px",
    height: "100%"
});

const StyledButton2 = styled(Button)({
    color: "#fff",
    padding: "10px 10px",
    borderRadius: 0,
    "&:hover": {
        color: "var(--fifth-color)",
        borderBottom: "1px solid var(--fifth-color)",
        transition: "all .4s"
    }
});

const StyledNavLink = styled(NavLink)({
    textDecoration: "none",
    color: "inherit",
    "&:hover": {
        color: "inherit"
    }
});

interface MainNavBarProps {
    menuItems: IMenuItem[];
}

const MainNavBar = (props: MainNavBarProps) => {

    const navigate = useNavigate();
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <StyledAppBar position="static">
            <Toolbar disableGutters>
                <Typography
                    variant="h6"
                    noWrap
                    sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontWeight: 700,
                        letterSpacing: '.1rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                    onClick={() => navigate("/")}
                >
                    Team-Report
                </Typography>
                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                    >
                        <MenuIcon />
                    </IconButton>
                    <StyledMenu
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
                            display: { xs: 'block', md: 'none' },
                        }}
                    >
                        {props.menuItems.map((item: IMenuItem) => (
                            <MenuItem key={item.id} onClick={() => {
                                setAnchorElNav(null);
                                navigate(item.href)
                            }}>
                                <StyledButton
                                    key={item.id}
                                    onClick={() => navigate(item.href)}
                                >
                                    <StyledNavLink
                                        to={item.href}
                                        style={({ isActive }) => {
                                            return {
                                                color: isActive ? "#31b6b1" : "inherit",
                                                fontWeight: isActive ? "bold" : "normal"
                                            };
                                        }}>
                                        {item.title}
                                    </StyledNavLink>
                                </StyledButton>
                            </MenuItem>
                        ))}
                    </StyledMenu>
                </Box>
                <Typography
                    variant="h5"
                    noWrap
                    sx={{
                        mr: 2,
                        display: { xs: 'flex', md: 'none' },
                        flexGrow: 1,
                        fontWeight: 700,
                        letterSpacing: '.1rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                    onClick={() => navigate("/")}
                >
                    Team-Report
                </Typography>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    {props.menuItems.map((item: IMenuItem) => (
                        <StyledButton2
                            key={item.id}
                            onClick={() => navigate(item.href)}
                        >
                            <StyledNavLink
                                to={item.href}
                                style={({ isActive }) => {
                                    return {
                                        color: isActive ? "#31b6b1" : "inherit",
                                        fontWeight: isActive ? "bold" : "normal"
                                    };
                                }}>
                                {item.title}
                            </StyledNavLink>
                        </StyledButton2>
                    ))}
                </Box>
                {/* {authCtx.isUserLoggedIn && <Login />}
                {!authCtx.isUserLoggedIn && <Button
                    onClick={() => navigate("/login")}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                >
                    <Login /> Login
                </Button>} */}
            </Toolbar>
        </StyledAppBar >
    );
}

export default MainNavBar;
