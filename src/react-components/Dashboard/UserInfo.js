import React from 'react';
import Link from '@material-ui/core/Link';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

function preventDefault(event) {
    event.preventDefault();
}

const useStyles = makeStyles({
    depositContext: {
        flex: 1,
    },
});

export default function UserInfo(props) {
    const classes = useStyles();
    const {user} = props;
    
    return (
        <React.Fragment>
            {/* user icon need add */}
            <Typography component="p" variant="h4">
                {user}
            </Typography>
            <Typography color="textSecondary" className={classes.depositContext}>
                User bio balabala
            </Typography>
            <div>
                <Link color="primary" href="#" onClick={preventDefault}>
                    Edit
                </Link>
            </div>
        </React.Fragment>
    );
}