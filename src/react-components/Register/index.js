import React from "react";
import {
    Button,
    FormControl,
    FormGroup,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    TextField
} from "@material-ui/core";
import {Visibility, VisibilityOff} from "@material-ui/icons"

import "./style.css";

const Register = (props) => {

    const [values, setValues] = React.useState({
        username: '',
        password: '',
        repeat: '',
        show: false
    });

    const successCallback = (data) => {
        props.handleRegister(data);
        if (data.role === "user") {
            // TODO: Redirect to user's page
            props.history.push("/MainPage/user");
        } else {
            // TODO: Redirect to admin's page
            props.history.push("/MainPage/admin");
        }
    }

    const failedCallback = () => {
        alert("Register failed");
    }

    const submit = (event) => {
        event.preventDefault();
        console.log("username: " + values.username
            + "\npassword: " + values.password
            + "\nrepeat: " + values.repeat
        )
        /*
        * TODO
        */
        const data = {
            username: values.username,
            password: values.password,
            repeat: values.repeat
        }
        const result = props.tempRegister(data)
        if (result !== false) {
            successCallback(result);
        } else {
            failedCallback();
        }
    }

    const change = (prop) => (event) => {
        setValues({...values, [prop]: event.target.value});
    }

    const show = () => {
        setValues({...values, show: !values.show});
    };

    return (
        <div className="register_page">
            <form onSubmit={submit} noValidate={false} autoComplete="off" className="form">
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
                                        {values.show ? <Visibility/> : <VisibilityOff/>}
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
                            onChange={change('repeat')}
                            endAdornment={
                                <InputAdornment position='end'>
                                    <IconButton onClick={show} edge="end">
                                        {values.show ? <Visibility/> : <VisibilityOff/>}
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