import React from "react";
import Grid from '@material-ui/core/Grid';
import "./style.css";
import Add from "./Add";
import PostList from "./PostList"
import {addPost, getPosts} from "./actions/actions";
import TopBar from "../TopBar";
//imgs are all hard-coded here

import img3 from "./static/user3.png"

class Post extends React.Component {

    constructor(props) {
        super(props);
        this.props.history.push("/postpage/" + props.match.params.topic);
        console.log(this.props.match.params.topic);
    }

    state = {
        postContent: "",
        icon: img3,
        posts: [{content: "123", creatorUsername: "user1", likes: 1}]
    }

    componentDidMount() {
        console.log(this.props.match.params.topic);
        getPosts(this);
    }

    //handler for whenever we input in the input box
    handleInputChange = (value) => {

        console.log(value);
        this.setState({
            postContent: value
        });
    }


    render() {
        const { app } = this.props;

        //check if the currrent topic contain posts
        let checkList;
        if (this.state.posts.length === 0) {
            checkList = (
                <h3 className="no-post-title">
                    Please start the first post of current topic!
                </h3>
            )
        } else {
            checkList = (
                <Grid item className="post-list">
                    <PostList postComponent={this} app={app} topic={this.props.match.params.topic}/>
                </Grid>
            )
        }


        return (
            <div className="PostPage">

                <TopBar user={app.state.current}/>

                <h3 className="topic-title">Topic: {this.props.match.params.topic}</h3>

                <Grid item container className="post-grid" direction="column">

                    {checkList}

                    <Grid item className="post-inut">
                        {/* Here is the whole structure for adding a new post */}
                        <Add
                            newtitle={this.state.postContent}
                            onChange={this.handleInputChange}
                            add={() => addPost(this, app)}
                        />
                    </Grid>

                </Grid>

            </div>
        );
    }
}

export default Post;