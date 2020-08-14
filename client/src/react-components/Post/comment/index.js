import React from "react";
import Grid from '@material-ui/core/Grid';

import "./style.css";
import CommentList from "./CommentList"
import Add from "../Add";
import TopBar from "../../TopBar";

import {addComment, getComments} from "./actions/actions";
//imgs are all hard-coded here
import img1 from "./static/user1.png"

class Comment extends React.Component {

    constructor(props) {
        super(props);
        this.props.history.push("/comments/" + props.match.params.topic + "/" + props.match.params.postid);
    }

    state = {
        commentContent: "",
        icon: img1,
        comments: [{
                content: "fever",
                creatorUsername: "user1",
                likes: 1
            },
            {
                content: "COV19",
                creatorUsername: "user2",
                likes: 100
            }]
    }

    componentDidMount() {
        console.log(this.props.match.params);

        getComments(this);

    }

    //handler for whenever we input in the input box
    handleInputChange = (value) => {

        console.log(value);
        this.setState({
            commentContent: value
        });
    }


    render() {
        const { app } = this.props;

        //check if the currrent post contain any comments
        let checkList;
        if (this.state.comments.length === 0) {
            checkList = (
                <h3 className="no-comment-title">
                    Be the first to share your thoughts!
                </h3>
            )
        } else {
            checkList = (
                <Grid item className="comment-list">
                    <CommentList
                        commentComponent={this}
                        app={app}
                        topic={this.props.match.params.topic}
                        postid={this.props.match.params.postid}
                    />
                </Grid>
            )
        }


        return (
            <div className="CommentPage">

                <TopBar user={this.props.match.params.user}/>

                <h3 className="comment-title">Comments:</h3>

                <Grid item container className="post-grid" direction="column">

                    {checkList}

                    <Grid item className="comment-input">
                        {/* Here is the whole structure for adding a new comment */}
                        <Add
                            newtitle={this.state.commentContent}
                            onChange={this.handleInputChange}
                            add={() => addComment(this, app)}
                        />
                    </Grid>

                </Grid>
            </div>
        );
    }
}

export default Comment;