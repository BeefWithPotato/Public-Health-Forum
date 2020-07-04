import React from 'react';
import {
    Button,
    FormControl,
    FormGroup,
    InputLabel,
    makeStyles,
    MenuItem,
    Select,
    TextField,
    Typography
} from "@material-ui/core";
import Detail from './Detail';
import Grid from '@material-ui/core/Grid';
import userImg from './static/user.png'

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1)
    },
    depositContext: {
        flex: 1,
    },
    gender: {
        margin: theme.spacing(1),
        minWidth: 300,
    },
    input: {
        margin: theme.spacing(1),
    },
    margin: {
        margin: theme.spacing(2),
    },
    userimg: {
        width:150,
        height: 150,
    }
}));

const UserInfo = (props) => {

    const origin = {
        gender: "",
        email: "",
        phone: "",
        address: ""
    }

    const [on, setOn] = React.useState(false);

    const [values, setValues] = React.useState(origin);

    const [info, setInfo] = React.useState({
        gender: "Male",
        email: "user@user.com",
        phone: "123456789",
        address: "xxxxxx"
    });

    const classes = useStyles();
    const {user} = props;

    const change = (prop) => (event) => {
        setValues({...values, [prop]: event.target.value});
    }

    const handleEdit = () => {
        setOn(on => !on)
    }

    const handleSave = () => {
        for (let [key, value] of Object.entries(values)) {
            if (value !== "") {
                setInfo(prevState => ({
                    ...prevState,
                    [key]: value
                }));
            }
        }
        setOn(on => !on);
        setValues(origin);
    }

    const edit = (
        <div>
            <form onSubmit={handleSave} noValidate={false} autoComplete="off" className={classes.formControl}>
                <FormGroup className={classes.input}>
                    <FormControl variant="outlined">
                        <InputLabel>Gender</InputLabel>
                        <Select
                            value={values.gender}
                            onChange={change("gender")}
                            labelWidth={80}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={"Male"}>Male</MenuItem>
                            <MenuItem value={"Female"}>Female</MenuItem>
                        </Select>
                    </FormControl>

                </FormGroup>

                <FormGroup className={classes.input}>
                    <TextField
                        label="Email"
                        placeholder="Email"
                        variant="outlined"
                        type="text"
                        value={values.email}
                        onChange={change("email")}
                    />
                </FormGroup>

                <FormGroup className={classes.input}>
                    <TextField
                        label="Phone"
                        placeholder="Phone"
                        variant="outlined"
                        type="text"
                        value={values.phone}
                        onChange={change("phone")}
                    />
                </FormGroup>

                <FormGroup className={classes.input}>
                    <TextField
                        label="Address"
                        placeholder="Address"
                        variant="outlined"
                        type="text"
                        value={values.address}
                        onChange={change("address")}
                    />
                </FormGroup>
            </form>
        </div>
    );

    return (
        <React.Fragment>

            
            <Grid className="Grid" container spacing={1}>
                <Grid item>
                    <img alt="user-img" src={userImg} className={classes.userimg}/>
                </Grid>
                <Grid item>
                    <Typography component="div" variant="h3" className={classes.margin}>
                        {user}
                    </Typography>
                </Grid>
            </Grid>
            <Typography component="div" variant="h3" className={classes.margin}>
                <Detail gender={info.gender} phone={info.phone} email={info.email} address={info.address}/>
            </Typography>

            {on ? edit : ""}

            <Button color="primary" onClick={handleEdit} className={classes.margin}>
                Edit
            </Button>

            <Button color="primary" onClick={handleSave} className={classes.margin}>
                Save
            </Button>
        </React.Fragment>
    );
}

export default UserInfo;