import React from 'react';
import {
    Avatar,
    Button,
    FormControl,
    FormGroup,
    Grid,
    InputLabel,
    makeStyles,
    MenuItem,
    Select,
    TextField,
    Typography
} from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import Detail from './Detail';
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
    avatar: {
        width: 100,
        height: 100,
    },
    edit: {
        width: 500
    },
    upload: {
        display: "none"
    }
}));

const UserInfo = (props) => {

    const origin = {
        gender: "",
        email: "",
        phone: "",
        address: "",
        
    }

    const [on, setOn] = React.useState(false);

    const [values, setValues] = React.useState(origin);

    const [info, setInfo] = React.useState({
        gender: "Male",
        email: "user@user.com",
        phone: "4169783435",
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
        setOn(false);
        setValues(origin);
    }

    const edit = (
        <div className={classes.edit}>
            <form noValidate={false} autoComplete="off" className={classes.formControl}>
                <FormGroup className={classes.input}>
                    <input
                        className={classes.upload}
                        accept="image/*"
                        multiple
                        type="file"
                        id="avatar"
                    />
                    <label htmlFor="avatar">
                        <Button
                            variant="contained"
                            color="primary"
                            component="span"
                            startIcon={<CloudUploadIcon />}
                        >
                            Upload Avatar
                        </Button>
                    </label>
                </FormGroup>
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
                    <Avatar alt="user-img" src={userImg} className={classes.avatar}/>
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