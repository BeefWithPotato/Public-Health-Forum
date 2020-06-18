import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import Input from "./Input"
import "./style.css";

class Login_Page extends React.Component{


	render(){
		return (
    		<div className="login_page">

    		    <Input className="main"/>
    
			</div>
  		);
	}
}

export default Login_Page;