import React from "react";
import {Link} from "react-router-dom"
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
import {Visibility, VisibilityOff} from "@material-ui/icons";
import axios from "axios";

import "./style.css";

const Login = (props) => {

    const [values, setValues] = React.useState({
        username: '',
        password: '',
        show: false
    });

    const redirect = React.forwardRef((props, ref) => (
        <Link ref={ref} to="./register" {...props} />
    ));

    const successCallback = (data) => {
        props.update(data);
        console.log(data);
        if (data.role === "user") {
            // TODO: Redirect to user's page
            props.history.push(`/MainPage/:${data.current}`);
        } else {
            // TODO: Redirect to admin's page
            props.history.push("/MainPage/admin");
        }
    }

    const failedCallback = (error) => {
        alert("Login failed");
        console.error(error);
    }

    const submit = (event) => {
        event.preventDefault();
        console.log("submit:\nusername: " + values.username + "\npassword: " + values.password)
        /*
        * TODO
        */
        const data = {
            username: values.username,
            password: values.password
        };
        axios.post("/login", data).then(response => successCallback(response.data), error => failedCallback(error));
        // const result = props.tempAuth(data);
        // if (result !== false)
        //     successCallback(result);
        // else
        //     failedCallback();
    }

    const change = (prop) => (event) => {
        setValues({...values, [prop]: event.target.value});
    }

    const show = () => {
        setValues({...values, show: !values.show});
    };

    return (
        <div className="login_page">
            <form onSubmit={submit} noValidate={false} autoComplete="off" className="form">
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
                                        {values.show ? <Visibility/> : <VisibilityOff/>}
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