import React from 'react';
import {fade, makeStyles} from '@material-ui/core/styles';
import {Button} from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    userBlock: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
}));

export default function TopBar(props) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = (props) => {
        setAnchorEl(null);
    };

    const {user} = props;
    const menuId = 'primary-search-account-menu';
    let renderMenu;
    if (user !== 'guest') {
        renderMenu = (
            <Menu
                anchorEl={anchorEl}
                anchorOrigin={{vertical: 'top', horizontal: 'right'}}
                id={menuId}
                keepMounted
                transformOrigin={{vertical: 'top', horizontal: 'right'}}
                open={isMenuOpen}
                onClose={handleMenuClose}
            >
                <MenuItem onClick={handleMenuClose}>
                    <Button href={"/MainPage/" + user} color="inherit">
                        Main Page
                    </Button>
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                    <Button href={"/Dashboard/" + user} color="inherit">
                        Dashboard
                    </Button>
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                    <Button href={"/PostOverview/" + user} color="inherit">
                        Topics
                    </Button>
                </MenuItem>
            </Menu>
        );
    } else {
        renderMenu = (
            <Menu
                anchorEl={anchorEl}
                anchorOrigin={{vertical: 'top', horizontal: 'right'}}
                id={menuId}
                keepMounted
                transformOrigin={{vertical: 'top', horizontal: 'right'}}
                open={isMenuOpen}
                onClose={handleMenuClose}
            >
                <MenuItem onClick={handleMenuClose}>
                    <Button href={"/MainPage/" + user} color="inherit">
                        Main Page
                    </Button>
                </MenuItem>
                <MenuItem onClick={handleMenuClose} href="/admin/Dashboard">
                    <Button href={"/Login"} color="inherit">
                        Dashboard
                    </Button>
                </MenuItem>
            </Menu>
        );
    }


    let checkUser;
    if (user === "guest") {
        checkUser = (
            <React.Fragment>
                <IconButton
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    color="inherit"
                    href="/Login"
                >
                    Guest
                </IconButton>

                <IconButton
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    color="inherit"
                    href="/Login"
                >
                    <AccountCircle/>
                </IconButton>
            </React.Fragment>
        )
    } else {
        checkUser = (
            <React.Fragment>
                <IconButton
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    color="inherit"
                    href={"/Dashboard/" + user}
                >
                    {user}
                </IconButton>

                <IconButton
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    color="inherit"
                    href={"/Dashboard/" + user}
                >
                    <AccountCircle/>
                </IconButton>
            </React.Fragment>
        )
    }

    return (
        <div className={classes.grow}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        onClick={handleProfileMenuOpen}
                        aria-label="open drawer"
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Button href={"/MainPage/" + user} color="inherit">
                        Health Base
                    </Button>
                    <Typography className={classes.title} variant="h6" noWrap>
                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon/>
                        </div>
                        <InputBase
                            placeholder="Search???"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{'aria-label': 'search'}}
                        />
                    </div>
                    <div className={classes.grow}/>
                    <div className={classes.userBlock}>
                        {checkUser}
                    </div>
                </Toolbar>
            </AppBar>
            {renderMenu}
        </div>
    );
}