import React from "react";
import Button from "@material-ui/core/Button";
import "./style.css";

import header_img from "./static/homepage_header_img.jpg";
import HotTag from "../HotTag";
import HotNews from "../HotNews";
import ActiveVerifiedUsers from "../ActiveVerifiedUsers";


class HomePage extends React.Component{

    user:""
    state = {
        homeurl: "",
        posturl: ""
    }

    
    componentDidMount() {
        console.log(this.props.match.params);
        
        console.log(this.props.user.username);
        const homeurl = "/homepage/" + this.props.match.params.user;
        const posturl = "/postoverview/" + this.props.match.params.user;
        this.setState({
            user: this.props.match.params.user,
            homeurl: homeurl,
            posturl: posturl,   
        });
        
    }


    render(){
        console.log(this.props.match.params.user)
        return (
            <div className="homepage">
                
                <ul>
                    {/* Home button */}
                    <li className="Home">
                        
                        <a href={this.state.homeurl}>Home</a>
                    </li>

                    {/* Posts button */}
                    <li className="Posts">

                        <a href={this.state.posturl}>Posts</a>
                    </li>

                    {/* Help button */}
                    <li className="Help">
                        <a href={"./Help"}>Help</a>
                    </li>

                    {/* Search Box */}
                    <li className="search">
                        <input className="search" type="text" placeholder="search"/>

                        {/* Search Button */}
                        <Button size="small" variant="outlined" href="#outlined-buttons"
                                color="primary" className="search_button">
                            Search
                        </Button>
                    </li>

                </ul>

                <img className="header_img" src={header_img} alt="header"/>

                <h3 className="cov19-update">
                    Corona Virus in Canada <br/>
                    Total cases: 99,427 | Active: 29,812 | Recovered: 61,402 | Deceased: 8,213
                </h3>

                <HotTag />

                <HotNews user={this.props.match.params.user}/>

                <ActiveVerifiedUsers />
                
            </div>
        );
    }
}

export default HomePage;