import React from "react";

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import "./style.css";
import Top_Menu from "../Top_Menu";
import header_img from "./static/homepage_header_img.jpg"
import Hot_Tag from "../Hot_Tag"
import Hot_News from "../Hot_News"

class Home_Page extends React.Component{


	render(){
		return (
    		<div className="homepage">
    			<Top_Menu />
    			<img className="header_img" src={header_img} />
    			<Hot_Tag />
    			<Hot_News />
			</div>
  		);
	}
}

export default Home_Page;