import React from "react";
import Grid from '@material-ui/core/Grid';

import "./style.css";
import TopMenu from "../TopMenu";
import header_img from "./static/header_img.jpg";
import Add from "./Add";
import PostList from "./PostList"
import { addPost } from "./actions/actions";
import img1 from "./static/user1.png"
import img2 from "./static/user2.png"
import img3 from "./static/user3.png"

class Post extends React.Component{

    state = {
        newUsername: "user3",
        newContent: "",
        icon: img3,
        posts: [
            {username: "user1", content: "I am Happy!", icon: img1},
            {username: "user2", content: "I am Sad!", icon: img2}
        ]
    }
    
    handleInputChange = (event) =>{
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value // [name] sets the object property name to the value of the `name` variable.
        });
    }
    

    render(){
        return (
            <div className="PostPage">
                <TopMenu />
                <img className="header_img" src={header_img} alt="header"/>
                
                <Add 
                    newContent={this.state.newContent}
                    onChange={this.handleInputChange}
                    addPost={() => addPost(this)}
                />

                <PostList posts={this.state.posts} postComponent={this} />
                
                
            </div>
        );
    }
}

export default Post;