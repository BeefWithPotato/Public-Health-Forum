import React from "react";

import "./style.css";
import Top_Menu from "../Top_Menu";
class Home_Page extends React.Component{

	render(){
		return (
    		<Top_Menu
    			item1="Home"
    			item2="Subfield"
    			item3="Help"
    		/>
  		);
	}
}

export default Home_Page;