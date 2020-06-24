import React from "react";
import { Button, TextField, FormGroup, InputAdornment,
    InputLabel, OutlinedInput, IconButton, FormControl } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons"

import "./style.css";

const Register = (props) => {

    const [values, setValues] = React.useState({
        username: '',
        password: '',
        repeat: '',
        show: false
    });

    const tempRegister = (data) => {
        if (data.repeat === data.password)
            return "success"
        return ""
    }

    const successCallback = (data) => {
        props.handleLogin(data);
        if (data.username === "user") {
            // TODO: Redirect to user's page
            //props.history.push("/homepage/:user");
        } else {
            // TODO: Redirect to admin's page
            //props.history.push("/homepage/:admin");
        }
    }

    const failedCallback = () => {
        alert("Register failed");
    }

    const submit = (event) => {
        event.preventDefault();
        console.log("username: "+values.username
            +"\npassword: "+values.password
            +"\nrepeat: "+values.repeat
        )
        /*
        * TODO
        */
        const data = {
            username: values.username,
            password: values.password,
            repeat: values.repeat
        }
        if (tempRegister(data) !== "") {
            successCallback(data);
        } else {
            failedCallback();
        }
    }
    
    const change = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    }

    const show = () => {
        setValues({ ...values, show: !values.show });
    };

    return (
        <div className="register_page">
            <form onSubmit={submit} noValidate autoComplete="off" className="form">
                <p className="title">Register</p>
                <FormGroup className="input">
                    <TextField
                        required variant="outlined"
                        label="Username"
                        placeholder="Username"
                        onChange={change('username')}
                    />
                </FormGroup>
                <FormGroup className="input">
                    <FormControl variant="outlined">
                        <InputLabel>Password *</InputLabel>
                        <OutlinedInput
                            required
                            placeholder="Password"
                            type={values.show ? 'text' : 'password'}
                            value={values.password}
                            onChange={change('password')}
                            endAdornment={
                                <InputAdornment position='end'>
                                    <IconButton onClick={show} edge="end">
                                        {values.show ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            labelWidth={130}
                        />
                    </FormControl>
                </FormGroup>
                <FormGroup className="input">
                    <FormControl variant="outlined">
                        <InputLabel>Repeat Password *</InputLabel>
                        <OutlinedInput
                            required
                            placeholder="Repeat Password"
                            type={values.show ? 'text' : 'password'}
                            value={values.repeat}
                            onChange={change('password')}
                            endAdornment={
                                <InputAdornment position='end'>
                                    <IconButton onClick={show} edge="end">
                                        {values.show ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            labelWidth={215}
                        />
                    </FormControl>
                </FormGroup>
                <FormGroup className="submit">
                    <Button variant="contained" color="primary" type="submit">Register</Button>
                </FormGroup>
            </form>
        </div>
    );
}

export default Register;