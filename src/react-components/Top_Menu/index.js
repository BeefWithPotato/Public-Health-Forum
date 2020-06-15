import React from "react";

import "./style.css";

class Top_Menu extends React.Component{
	render(){

		const { item1, item2, item3 } = this.props;

		return (
    		<div className="top_menu">
      			<ul>
        			<li className="Home">
        				<a href="./Home_Page">{item1}</a>
        			</li>
        			<li className="Subfield">
          				<a href="">{item2}</a>
        			</li>
        			<li className="Help">
          				<a href="">{item3}</a>
        			</li>
      			</ul>
    		</div>
  		);
	}
}

export default Top_Menu;