import React from 'react';
import Link from '@material-ui/core/Link';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Detail from './Detail';
const useStyles = makeStyles((theme) => ({
    depositContext: {
        flex: 1,
    },
    gender:{
        margin: theme.spacing(1),
        minWidth: 300,
    },
    input:{
        margin: theme.spacing(1),
    },
    margin:{
        margin: theme.spacing(2),
    }
}));


let edit;
export default function UserInfo(props) {
    const [values, setValues] = React.useState({
        gender: "",
        email: "",
        phone: "",
        address: "",
        info: {
            gender: "Male",
            email: "user@user.com",
            phone: "123456789",
            address: "xxxxxx"
        }

    });
    const classes = useStyles();
    const {user} = props;

    const change = (prop) => (event) => {
        setValues({...values, [prop]: event.target.value });
    }
    
    function handleEdit(event) {
        edit = (
            <Grid container direction="column" spacing={2}>
                <Grid item className={classes.gender}>
                    <InputLabel className={classes.input}>Gender</InputLabel>
                    <Select
                      variant="outlined"
                      className={classes.gender}
                      onChange={change("gender")}

                    >
                      <MenuItem value={"Male"}>Male</MenuItem>
                      <MenuItem value={"Female"}>Female</MenuItem>
                    </Select>
                </Grid>
                <Grid item>
                    <TextField
                        className={classes.input}
                        label="email"
                        variant="outlined"
                        onChange={change("phone")}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        className={classes.input}
                        label="phone"
                        variant="outlined"
                        onChange={change("email")}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        className={classes.input}
                        label="address"
                        variant="outlined"
                        onChange={change("address")}
                    />
                </Grid>
            </Grid>
        )
    }


  
    function handleSave(event) {
        edit='';
        console.log(values.gender)
        if(values.gender === ''){
            setValues({ gender: values.info.gender });
        }
        if(values.phone === ''){
            setValues({phone: values.info.phone });
        }
        if(values.email === ''){
            setValues({email: values.info.email });
        }
        if(values.address === ''){
            setValues({address: values.info.address });
        }

        const newInfo = {
            gender: values.gender,
            email: values.email,
            phone: values.phone,
            address: values.address
        }
        setValues({info: newInfo });
        
    }

    

    return (
        <div>
            <React.Fragment>
                {/* user icon need added in Phase2 */}
                <Typography component="p" variant="h3" className={classes.margin}>
                    {user}
                </Typography>

                <Typography component="p" variant="h3" className={classes.margin}>
                    <Detail gender={values.info.gender} phone={values.info.phone} email={values.info.email} address={values.info.address}/>
                </Typography>
                

                {edit} 

                <Link color="primary" href="#" onClick={handleEdit} className={classes.margin}>
                    Edit
                </Link>

                <Link color="primary" href="#" onClick={handleSave} className={classes.margin}>
                    Save
                </Link>

                
            </React.Fragment>
        </div>
    );
}