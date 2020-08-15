import React from 'react';
import clsx from 'clsx';
import {withStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import UserInfo from './UserInfo';
import LoginHistory from './LoginHistory';
import TopBar from '../TopBar';
import Verification from './Verification';
import { Button } from '@material-ui/core';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="/">
                HEALTH BASE
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = (theme) => ({
    root: {
        display: 'flex',
    },
    content: {
        flexGrow: 1,
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 235,
    },
    logoutButton: {
        margin: '20px',
        border: '20px',
        width: '100%',
        height: '40px',
    },
});

// A function to send a GET request to logout the current user
const logout = (user) => {
    const url = "/logout";

    fetch(url)
        .then(res => {
            console.log(res)
            user.setState('');
        })
        .catch(error => {
            console.log(error);
        });
};

// A function to send a POST request to get user data
const getUserInfo = (user) => {
    const url = "/dashboard/data/" + user;

    fetch(url)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            } else {
                alert("Could not get user info");
            }
        })
        .then(json => {
            console.log('json')
            console.log(json)
            return json.reverse()
        })
        .catch(error => {
            console.log(error);
        });
}

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.user = props.state.current;
        this.userData = getUserInfo(this.user);
        this.props.history.push("/Dashboard/"+this.user);
    }

    render() {
        const { classes } = this.props;
        const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
        return (
            <div className={classes.root}>
                <CssBaseline/>
                <main className={classes.content}>
                    <TopBar user={this.user}/>
                    <div className={classes.appBarSpacer}/>
                    <Container maxWidth="lg" className={classes.container}>
                        <Grid container spacing={3}>
                            {/* UserInfo */}
                            <Grid item xs={12}>
                                <Paper>
                                    <UserInfo user={this.user} data={this.userData}/>
                                </Paper>
                            </Grid>
                            <Grid item xs={12}>
                                <Paper className={fixedHeightPaper}>
                                    <Verification user={this.user}/>
                                </Paper>
                            </Grid>
                            {/* Recent Login history */}
                            <Grid item xs={12}>
                                <Paper className={classes.paper}>
                                    <LoginHistory user={this.user}/>
                                </Paper>
                            </Grid>
                            <Grid item xs={12}>
                                <Paper className={classes.paper}>
                                    <Button variant="contained" color="primary" className='logoutButton' onClick={() => logout(this.user)} href="/">
                                        Log out
                                    </Button>
                                </Paper>
                            </Grid>
                        </Grid>

                        <Box pt={4}>
                            <Copyright/>
                        </Box>
                    </Container>
                </main>
            </div>
        );
    }
}

export default withStyles(useStyles)(Dashboard);
