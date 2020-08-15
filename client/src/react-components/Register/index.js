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

class Register extends React.Component {

    constructor(props) {
        super(props);
        this.props.history.push("/register");
        this.successCallback = this.successCallback.bind(this);
        this.failedCallback = this.failedCallback.bind(this);
        this.submit = this.submit.bind(this);
        this.change = this.change.bind(this);
        this.show = this.show.bind(this);
    }

    state = {
        username: '',
        password: '',
        repeat: '',
        show: false
    }

    successCallback = (data) => {
        this.props.update(data);
        this.props.history.push("/MainPage/"+data.current);
    }

    failedCallback = (error) => {
        alert("Register failed");
        console.error(error);
    }

    submit = (event) => {
        event.preventDefault();
        console.log("submit:" +
            "\nusername: " + this.state.username
            + "\npassword: " + this.state.password
            + "\nrepeat: " + this.state.repeat
        )
        const data = {
            username: this.state.username,
            password: this.state.password,
            repeat: this.state.repeat
        }
        if (data.repeat === data.password) {
            const req = new Request("/register", {
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
        } else alert("Repeated password should match");
    }

    change = (prop) => (event) => {
        this.setState({...this.state, [prop]: event.target.value});
    }

    show = () => {
        this.setState({...this.state, show: !this.state.show});
    };

    render() {
        return (
            <div className="register_page">
                <form onSubmit={this.submit} noValidate={false} autoComplete="off" className="form">
                    <p className="title">Register</p>
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
                    <FormGroup className="input">
                        <FormControl variant="outlined">
                            <InputLabel>Repeat Password *</InputLabel>
                            <OutlinedInput
                                required
                                placeholder="Repeat Password"
                                type={this.state.show ? 'text' : 'password'}
                                value={this.state.repeat}
                                onChange={this.change('repeat')}
                                endAdornment={
                                    <InputAdornment position='end'>
                                        <IconButton onClick={this.show} edge="end">
                                            {this.state.show ? <Visibility/> : <VisibilityOff/>}
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
}

export default Register;