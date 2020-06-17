import React from "react";
import "./style.css";
import Top_Menu from "../Top_Menu";
import header_img from "./static/homepage_header_img.jpg";
import Hot_Tag from "../Hot_Tag";
import Hot_News from "../Hot_News";
import Active_Verified_Users from "../Active_Verified_Users";

class Home_Page extends React.Component{


	render(){
		return (
    		<div className="homepage">
    			<Top_Menu />

    			<img className="header_img" src={header_img} />

                <h3 className="cov19-update">
                    Coronavirus in Canada <br/>
                    Total cases: 99,427 | Active: 29,812 | Recovered: 61,402 | Deceased: 8,213
                </h3>

                <Hot_Tag />

                <Hot_News />

                <Active_Verified_Users />
    			
    			
			</div>
  		);
	}
}

export default Home_Page;