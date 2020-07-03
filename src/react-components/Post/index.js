import React from "react";
import Grid from '@material-ui/core/Grid';
import "./style.css";
import Add from "./Add";
import PostList from "./PostList"
import {addPost} from "./actions/actions";
import TopBar from "../TopBar";
//imgs are all hard-coded here
import img1 from "./static/user1.png"
import img2 from "./static/user2.png"
import img3 from "./static/user3.png"

class Post extends React.Component {

    state = {
        homeurl: "",
        posturl: "",
        newUsername: "",
        newtitle: "",
        icon: img3,
        posts: ""

    }


    componentDidMount() {
        console.log(this.props.match.params);
        console.log(this.props.match.params.user);
        console.log(this.props.match.params.topic);

        //the posts data is hard-coded, it requires server call in Phase2
        let cov19 = [
            {username: "user1", title: "I am in my 14-day quarantine.", icon: img1},
            {
                username: "user2",
                title: "My neighbour has found a new case of COV-19. Here is the address: XXX",
                icon: img2
            }
        ]

        let fever = [

            {username: "user1", title: "Fever is one of the symptoms of COV-19", icon: img1},
            {username: "user2", title: "Useful Medicine", icon: img2}
        ]

        //display corresponding posts by checking url parameter
        if ("COV-19" === this.props.match.params.topic) {
            this.setState({
                posts: cov19
            });
        } else if ("Fever" === this.props.match.params.topic) {
            this.setState({
                posts: fever
            });

        }

        const homeurl = "/homepage/" + this.props.match.params.user;
        const posturl = "/postoverview/" + this.props.match.params.user;

        this.setState({
            homeurl: homeurl,
            posturl: posturl,
        });

    }

    //handler for whenever we input in the input box
    handleInputChange = (value) => {

        console.log(value);
        console.log(this.props.match.params.user);
        this.setState({
            newUsername: this.props.match.params.user,
            newtitle: value
        });
    }


    render() {
        //check if the currrent topic contain posts
        let checkList;
        if (this.state.posts === "") {
            checkList = (
                <h3 className="no-post-title">
                    Please start the first post of current topic!
                </h3>
            )
        } else {
            checkList = (
                <Grid item className="post-list">
                    <PostList posts={this.state.posts} postComponent={this} user={this.props.match.params.user}/>
                </Grid>
            )
        }


        return (
            <div className="PostPage">

                <TopBar user={this.props.match.params.user}/>

                <h3 className="topic-title">Topic: {this.props.match.params.topic}</h3>

                <Grid item container className="post-grid" direction="column">

                    {checkList}


                    <Grid item className="post-inut">
                        {/* Here is the whole structure for adding a new post */}
                        <Add
                            newtitle={this.state.newtitle}
                            onChange={this.handleInputChange}
                            addPost={() => addPost(this)}
                        />
                    </Grid>

                </Grid>

            </div>
        );
    }
}

export default Post;