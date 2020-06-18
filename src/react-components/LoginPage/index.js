import React from "react";
import { BrowserRouter as Router, Link} from "react-router-dom"
import { Button, TextField, FormGroup } from "@material-ui/core";

import "./style.css";

const register = React.forwardRef((props, ref) => (
    <Link ref={ref} to="./RegisterPage" {...props} />
))

export default function LoginPage() {

    function submit(event) {
        event.preventDefault();
        /*
        * TODO
        */
    }

    return (
        <div className="login_page">
            <form onSubmit={submit} noValidate autoComplete="off" className="form">
                <p className="title">Login</p>
                <FormGroup className="input">
                    <TextField required variant="outlined" label="Username" placeholder="Username" />
                </FormGroup>
                <FormGroup className="input">
                    <TextField required variant="outlined" label="Password" placeholder="Password" />
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