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

import "./style.css";

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.props.history.push("/login");
        this.successCallback = this.successCallback.bind(this);
        this.failedCallback = this.failedCallback.bind(this);
        this.submit = this.submit.bind(this);
        this.change = this.change.bind(this);
        this.show = this.show.bind(this);
    }

    state = {
        username: '',
        password: '',
        show: false
    }

    redirect = React.forwardRef((props, ref) => (
        <Link ref={ref} to="./register" {...props} />
    ));

    successCallback = (data) => {
        this.props.update(data);
        this.props.history.push("/MainPage/"+data.current);
    }

    failedCallback = (error) => {
        alert("Login failed");
        console.error(error);
    }

    submit = (event) => {
        event.preventDefault();
        console.log("submit:\nusername: " + this.state.username + "\npassword: " + this.state.password)
        const data = {
            username: this.state.username,
            password: this.state.password
        };
        const req = new Request("/login", {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json"
            }
        });
        fetch(req).then(response => {
            if (response.status === 200) return response.json();
        }).then(json => {
            this.successCallback(json);
        }).catch(error => {
            this.failedCallback(error);
        });
    }

    change = (prop) => (event) => {
        this.setState({...this.state, [prop]: event.target.value});
    }

    show = () => {
        this.setState({...this.state, show: !this.state.show});
    };

    render() {
        return (
            <div className="login_page">
                <form onSubmit={this.submit} noValidate={false} autoComplete="off" className="form">
                    <p className="title">Login</p>
                    <FormGroup className="input">
                        <TextField
                            required variant="outlined"
                            label="Username"
                            placeholder="Username"
                            onChange={this.change('username')}
                        />
                    </FormGroup>
                    <FormGroup className="input">
                        <FormControl variant="outlined">
                            <InputLabel>Password *</InputLabel>
                            <OutlinedInput
                                required
                                placeholder="Password"
                                type={this.state.show ? 'text' : 'password'}
                                value={this.state.password}
                                onChange={this.change('password')}
                                endAdornment={
                                    <InputAdornment position='end'>
                                        <IconButton onClick={this.show} edge="end">
                                            {this.state.show ? <Visibility/> : <VisibilityOff/>}
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
                        <Button variant="contained" color="secondary" type="button" component={this.redirect}>register</Button>
                    </FormGroup>
                </form>
            </div>
        );
    }
}

export default Login;