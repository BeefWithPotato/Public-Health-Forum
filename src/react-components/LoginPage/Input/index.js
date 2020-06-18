import React from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import "./style.css";

class Input extends React.Component{


	render(){
		return (
    		<div className="Input">
                <Grid className="main"  container direction="column" spacing={2}>
                    <Grid item >
                        <TextField 
                            className="box"
                            id="outlined-basic" 
                            label="Username" 
                            variant="outlined" 
                            color="primary"
                        />      
                    </Grid>

                    <Grid item>
                        <TextField
                            className="box"
                            id="outlined-basic" 
                            label="Password" 
                            variant="outlined" 
                            color="primary"
                        />        
                    </Grid>

                </Grid>

                <ul>
                    <li>
                        <Button
                            className="button"
                            variant="contained"
                            color="primary"
                                        
                        >
                            Login
                        </Button>  
                    </li> 
                    <li>        
                        <Link className="button_link" to={"./Register"}>
                            <Button
                                className="button"
                                variant="contained"
                                color="primary"
                            >
                                Register
                            </Button>  
                        </Link>
                    </li>   
                    <li>
                    {/* guest visit button */}
                        <Link className="button_link" to={"./HomePage"}>
                            <Button 
                                className="button"
                                variant="contained" 
                                color="primary"
                            >
                                Go to Homepage
                            </Button>
                        </Link>
                    </li>
                </ul>
			</div>
  		);
	}
}

export default Input;