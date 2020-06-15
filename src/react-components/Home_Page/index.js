import React from "react";

import "./style.css";
import Top_Menu from "../Top_Menu";
import header_img from "./static/homepage_header_img.jpg"
class Home_Page extends React.Component{

	render(){
		return (
    		<div className="homepage">
    			<Top_Menu/>
    			<img className="header_img" src={header_img}/>

    			<p>

    			</p>	









			</div>
  		);
	}
}

export default Home_Page;