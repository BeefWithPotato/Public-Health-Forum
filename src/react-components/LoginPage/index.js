import React from "react";
import { BrowserRouter as Router, Link} from "react-router-dom"
import { Button, TextField, FormGroup, InputAdornment, InputLabel, OutlinedInput, IconButton, FormControl } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons"

import "./style.css";

export default function LoginPage() {

    const [values, setValues] = React.useState({
        username: '',
        password: '',
        show: false
    });

    const register = React.forwardRef((props, ref) => (
        <Link ref={ref} to="./RegisterPage" {...props} />
    ))

    const submit = (event) => {
        event.preventDefault();
        console.log(values.username+"\n"+values.password)
        /*
        * TODO
        */
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
                    <Router>
                        <Button variant="contained" color="secondary" component={register}>register</Button>
                    </Router>
                </FormGroup>
            </form>
        </div>
    );
}