import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

import "./style.css";

/* Component for the Welcome page */
class Welcome_Page extends React.Component{
	render(){
		return (

			<div className="welcome_page">

				{/* sign up button */}
				<Link className="button_link" to="" >
					<Button size="small" variant="outlined" href="#outlined-buttons" className="welcome_button">Want an account?</Button>
				</Link>

				{/* login button */}
				<Link className="button_link" to="./Login" >
					<Button size="small" variant="outlined" href="#outlined-buttons" className="welcome_button">User Login!</Button>
				</Link>

				{/* guest visit button */}
				<Link className="button_link" to={"./Home_Page"} >
					<Button size="small" variant="outlined" href="#outlined-buttons" className="welcome_button">Continue as a guest!</Button>
				</Link>
			</div>
		);
	}
}

export default Welcome_Page;