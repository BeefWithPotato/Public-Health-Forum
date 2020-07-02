import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TextTitle from './TextTitle';

// Generate Order Data
function createData(id, Date, Time, Address, Device) {
  return { id, Date, Time, Address, Device };
}

const rows = [
  createData(0, '2020-07-03', '12:38:56', 'Toronto, ON, Canada', 'PC'),
  createData(1, '2020-07-02', '13:38:56', 'Toronto, ON, Canada', 'PC'),
  createData(2, '2020-07-02', '12:38:56', 'Toronto, ON, Canada', 'PC'),
  createData(3, '2020-07-01', '14:38:56', 'Toronto, ON, Canada', 'PC'),
  createData(4, '2020-07-01', '12:38:56', 'Toronto, ON, Canada', 'PC'),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <TextTitle>Login History</TextTitle>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Device</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.Date}</TableCell>
              <TableCell>{row.Time}</TableCell>
              <TableCell>{row.Address}</TableCell>
              <TableCell>{row.Device}</TableCell>
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