import React from "react";
import "./style.css";
import TopMenu from "../TopMenu";
import header_img from "./static/homepage_header_img.jpg";
import HotTag from "../HotTag";
import HotNews from "../HotNews";
import ActiveVerifiedUsers from "../ActiveVerifiedUsers";

class HomePage extends React.Component{

    render(){
        return (
            <div className="homepage">
                <TopMenu />

                <img className="header_img" src={header_img} alt="header"/>

                <h3 className="cov19-update">
                    Corona Virus in Canada <br/>
                    Total cases: 99,427 | Active: 29,812 | Recovered: 61,402 | Deceased: 8,213
                </h3>

                <HotTag />

                <HotNews />

                <ActiveVerifiedUsers />

            </div>
        );
    }
}

export default HomePage;