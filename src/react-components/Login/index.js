import React from "react";
import { Link } from "react-router-dom"
import { Button, TextField, FormGroup, InputAdornment, InputLabel,
    OutlinedInput, IconButton, FormControl } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons"

import "./style.css";

const Login = (props) => {

    const [values, setValues] = React.useState({
        username: '',
        password: '',
        show: false
    });

    const redirect = React.forwardRef((props, ref) => (
        <Link ref={ref} to="./Register" {...props} />
    ));

    const tempAuth = (data) => {
        if (data.username === "user" && data.password === "user")
            return "user"
        else if (data.username === "admin" && data.password === "admin")
            return "admin"
        return ""
    }

    const successCallback = (data) => {
        props.handleLogin(data);
        if (data.username === "user") {
            // TODO: Redirect to user's page
            props.history.push("/homepage/user");
        } else {
            // TODO: Redirect to admin's page
            props.history.push("/homepage/admin");
        }
    }

    const failedCallback = () => {
        alert("Login failed");
    }

    const submit = (event) => {
        event.preventDefault();
        console.log("username: "+values.username+"\npassword: "+values.password)
        /*
        * TODO
        */
        const data = {username: values.username, password: values.password}
        if (tempAuth(data) !== "")
            successCallback(data);
        else
            failedCallback();
    }
    
    const change = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    }

    const show = () => {
        setValues({ ...values, show: !values.show });
    };

    return (
        <div className="login_page">
            <form onSubmit={submit} noValidate autoComplete="off" className="form">
                <p className="title">Login</p>
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
                <FormGroup className="forget">
                    <Button color="primary" size="small">Forget password?</Button>
                </FormGroup>
                <FormGroup className="submit">
                    <Button variant="contained" color="primary" type="submit">Login</Button>
                </FormGroup>
                <FormGroup className="submit">
                    <Button variant="contained" color="secondary" type="button" component={redirect}>register</Button>
                </FormGroup>
            </form>
        </div>
    );
}

export default Login;