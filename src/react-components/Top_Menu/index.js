import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "./style.css";

class Top_Menu extends React.Component{
	render(){

		return (
    		<div className="top_menu">
      			<ul>
              {/* Home button */}
        			<li className="Home">
        			    <a href="./Home_Page">Home</a>
        			</li>

              {/* Subfield button */}
        			<li className="Subfield">
          				<a href="">Subfield</a>
        			</li>

              {/* Help button */}
        			<li className="Help">
          				<a href="">Help</a>
        			</li>

              {/* Search Box */}
              <li className="search">
                  <input className="search" type="text" placeholder="search"/>

                  {/* Search Button */}
                  <Button size="small" variant="outlined" href="#outlined-buttons" color="primary" className="search_button">
                      Search
                  </Button>
              </li>

      			</ul>
    		</div>
  		);
	}
}

export default Top_Menu;