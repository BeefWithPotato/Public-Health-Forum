import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import user01_img from './static/user01.jpg';
import user02_img from './static/user02.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: '36ch',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
}));

export default function ActiveUser() {
    const classes = useStyles();

    return (
        <List
            className={classes.root}
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div">
                    <Typography variant="h5" color="inherit">
                        Active Users
                    </Typography>
                </ListSubheader>
            }
        >

            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="John Smith" src={user01_img}/>
                </ListItemAvatar>
                <ListItemText
                    primary="user01"
                    secondary={
                        <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                className={classes.inline}
                                color="primary"
                            >
                                Doctor Verification
                            </Typography>
                            {" - User01's bio"}
                        </React.Fragment>
                    }
                />
            </ListItem>
            <Divider variant="fullWidth" component="li"/>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Kevin" src={user02_img}/>
                </ListItemAvatar>
                <ListItemText
                    primary="user02"
                    secondary={
                        <React.Fragment>
                            {/* <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                No verification
              </Typography> */}
                            {"If no verification, then nothing appear. I will come back..."}
                        </React.Fragment>
                    }
                />
            </ListItem>
        </List>
    );
}