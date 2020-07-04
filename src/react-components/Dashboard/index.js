import React from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import UserInfo from './UserInfo';
import Orders from './LoginHistory';
import TopBar from '../TopBar';
import Verification from './Verification';

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

const useStyles = makeStyles((theme) => ({
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
}));

const Dashboard = (props) => {

    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    const user = props.match.params.user;
    console.log("status: " + props.loggedIn);

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <main className={classes.content}>
                <TopBar user={user}/>
                <div className={classes.appBarSpacer}/>
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>
                        {/* UserInfo */}
                        <Grid item xs={12}>
                            <Paper>
                                <UserInfo user={user}/>
                            </Paper>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper className={fixedHeightPaper}>
                                <Verification user={user}/>
                            </Paper>
                        </Grid>
                        {/* Recent Login history */}
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                <Orders/>
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

export default Dashboard;