import React from "react";
import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid';

import "./style.css";
import PostList from "../PostList"
import header_img from "./static/header_img.jpg";
import Add from "../Add";
import { addComment } from "./actions/actions";
import img1 from "./static/user1.png"
import img2 from "./static/user2.png"
import img3 from "./static/user3.png"

class Comment extends React.Component{

    state = {
        homeurl:"",
        posturl:"",
        username: "",
        content: "",
        icon: img3,
        post:"",
        comments: ""
        
    }
    
    componentDidMount() {
        console.log(this.props.match.params);
        console.log(this.props.match.params.user);
        console.log(this.props.match.params.title);


        let cov19 = [
            {username: "user1", content: "I just finished!", icon: img1},
            {username: "user2", content: "The quarantine is so boring. I want freedom! ", icon: img2}
        ]

        let neighbour = [

            {username: "user1", content: "Really??? I just come back form here!", icon: img1},
            {username: "user2", content: "That's dangerous!", icon: img2}
        ]

        const post = this.props.match.params.title;
        if(post.indexOf("quarantine") !== -1){
            this.setState({
                comments: cov19  
            });
        }
        else if(post.indexOf("neighbour") !== -1){
            this.setState({
                comments: neighbour  
            });
            
        }

        const homeurl = "/homepage/" + this.props.match.params.user;
        const posturl = "/postpage/" + this.props.match.params.user;

        this.setState({
            homeurl: homeurl,
            posturl: posturl,   
        });
         
    }
    
    handleInputChange = (value) =>{
       
        console.log(value);
        console.log(this.props.match.params.user);
        this.setState({
            username: this.props.match.params.user,
            content: value
        });
    }
    

    render(){
        let checkList;
        if(this.state.comments === ""){
            checkList = (
                <h3 className="no-post-title">
                    Be the first to share your thoughts!
                </h3>
            )
        }
        else{
            checkList = (
                <Grid item className="post-list">    
                    <PostList 
                        type="comment"
                        posts={this.state.comments} 
                        postComponent={this} 
                        user={this.props.match.params.user}
                    />
                </Grid>
            )
        }


        return (
            <div className="comment-page">

                <ul>
                    {/* Home button */}
                    <li className="Home" key="top-menu">
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
                
                <h3 className="topic-title">Comments:</h3>

                <Grid item container className="post-grid" direction="column">

                    {checkList}

                    <Grid item className="post-inut">
                        <Add 
                            newtitle={this.state.content}
                            onChange={this.handleInputChange}
                            addPost={() => addComment(this)}
                        />
                    </Grid>

                </Grid>
            </div>
        );
    }
}

export default Comment;