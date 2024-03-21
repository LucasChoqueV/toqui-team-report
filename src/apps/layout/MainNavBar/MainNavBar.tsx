import {
    AppBar,
    Toolbar,
    Box,
    Typography,
    IconButton,
    Menu,
    Button,
    MenuItem,
    Container
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material"
import { IMenuItem } from "@/apps/layout/index";
import { styled } from "@mui/material";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const StyledAppBar = styled(AppBar)({
    background: "transparent",
    border: 0,
    boxShadow: "none"
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
    color: "var(--third-color)",
    fontSize: "15px",
    padding: "10px 20px",
    borderRadius: 0,
    "&:hover": {
        color: "var(--primary-color)",
        borderBottom: "1px solid var(--primary-color)",
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

interface ISubMenuStateInterface {
    id: number;
    isOpen: boolean;
}
interface MainNavBarProps {
    menuItems: IMenuItem[];
}

const MainNavBar = (props: MainNavBarProps) => {

    const navigate = useNavigate();
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    const [subMenuState, setSubMenuState] = useState(props.menuItems.map(x => ({ id: x.id, isOpen: false }) as ISubMenuStateInterface));

    const handleClick = (idArgs: number, event: React.MouseEvent<HTMLElement>) => {
        const update = subMenuState.map(x => {
            if (x.id == idArgs) {
                return {
                    ...x,
                    isOpen: true
                }
            } else {
                return x;
            }
        })
        setSubMenuState(update);
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (idArgs: number) => {
        setAnchorEl(null);
        const update = subMenuState.map(x => {
            if (x.id == idArgs) {
                return {
                    ...x,
                    isOpen: false
                }
            } else {
                return x;
            }
        })
        setSubMenuState(update);
    };

    return (
        <StyledAppBar position="static">
            <Container>
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: "Lexend-Bold",
                            letterSpacing: '.06rem',
                            color: 'var(--third-color)',
                            textDecoration: 'none',
                        }}
                        onClick={() => navigate("/")}
                    >
                        TeamReport
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="default"
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
                                                    color: isActive ? "#014C3E" : "inherit",
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
                            color: 'var(--third-color)',
                            fontFamily: "Lexend-Bold",
                            textDecoration: 'none',
                        }}
                        onClick={() => navigate("/")}
                    >
                        TeamReport
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}></Box>
                    <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
                        {props.menuItems.map((item: IMenuItem) => (
                            <div>
                                {
                                    !item.isMenu ?
                                        <StyledButton2
                                            key={item.id}
                                            onClick={() => navigate(item.href)}
                                        >
                                            <StyledNavLink
                                                to={item.href}
                                                style={({ isActive }) => {
                                                    return {
                                                        color: isActive ? "#014C3E" : "inherit",
                                                        fontWeight: isActive ? "bold" : "normal"
                                                    };
                                                }}>
                                                {item.title}
                                            </StyledNavLink>
                                        </StyledButton2>
                                        :
                                        <Box key={item.id} sx={{ flexGrow: 0 }}>
                                            <StyledButton2 key={item.id} onClick={(event) => handleClick(item.id, event)}>
                                                {item.title}
                                            </StyledButton2>
                                            <Menu
                                                sx={{ mt: '45px' }}
                                                id={`${item.id}`}
                                                key={item.id}
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
                                                open={subMenuState.find(x => x.id == item.id)?.isOpen || false}
                                                onClose={() => handleClose(item.id)}
                                                onClick={() => handleClose(item.id)}
                                            >
                                                {
                                                    item.subItems?.map((subItem: any) => (
                                                        <MenuItem onClick={() => navigate(subItem.href)}>
                                                            <StyledNavLink
                                                                to={subItem.href}
                                                                style={({ isActive }) => {
                                                                    return {
                                                                        color: isActive ? "#014C3E" : "inherit",
                                                                        fontWeight: isActive ? "bold" : "normal"
                                                                    };
                                                                }}>
                                                                {subItem.title}
                                                            </StyledNavLink>
                                                        </MenuItem>
                                                    ))
                                                }
                                            </Menu>
                                        </Box>
                                }
                            </div>
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
            </Container>
        </StyledAppBar >
    );
}

export default MainNavBar;
