import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextTitle from './TextTitle';
import {Fab} from '@material-ui/core';

const useStyles = makeStyles({
    upload: {
        flex: 1,
        display: 'none',
    },
});

export default function Verification(props) {
    const classes = useStyles();
    // const {user} = props;
    return (
        <React.Fragment>
            <TextTitle>Verification</TextTitle>
            <Typography component="p" variant="h6">
                Verification Message
            </Typography>

            <Typography component="p" variant="h6" color="textSecondary">
                ------
            </Typography>

            <label htmlFor="upload-photo">
                <input
                    id="upload-photo"
                    name="upload-photo"
                    type="file"
                    className={classes.upload}
                />
                <Fab
                    style={{padding: 10}}
                    color="primary"
                    size="small"
                    component="span"
                    aria-label="add"
                    variant="extended"
                >
                    Upload document
                </Fab>
            </label>
        </React.Fragment>
    );
}