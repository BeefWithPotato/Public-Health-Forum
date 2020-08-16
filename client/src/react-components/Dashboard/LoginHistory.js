import React from 'react';
import Link from '@material-ui/core/Link';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TextTitle from './TextTitle';

// Generate Login Data
function createData(id, Date, Time) {
    return {id, Date, Time};
}

const rows = [
    createData(0, '2020-07-03', '12:38:56'),
    createData(1, '2020-07-02', '13:38:56'),
    createData(2, '2020-07-02', '12:38:56'),
    createData(3, '2020-07-01', '14:38:56'),
    createData(4, '2020-07-01', '12:38:56'),
];

// const rows = this.props.user;

function preventDefault(event) {
    event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
    seeMore: {
        marginTop: theme.spacing(3),
    },
    title: {
        margin: theme.spacing(2),
    },
}));

export default function LoginHistory(props, data) {
    const classes = useStyles();
    return (
        <React.Fragment>
            <TextTitle className={classes.title}>Login History</TextTitle>
            <Table size="medium">
                <TableHead>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell>Time</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.Date}</TableCell>
                            <TableCell>{row.Time}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <div className={classes.seeMore}>
                <Link color="primary" href="#" onClick={preventDefault}>
                    See more history
                </Link>
            </div>
        </React.Fragment>
    );
}
