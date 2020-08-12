import React from "react";
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';

import {addLike, canceleLike} from "../actions/actions";
import "./style.css";


class Like extends React.Component {

    state = {
        isLike: ""
    }

    //check if we click on the like button
    handleOnClick(commentComponent, comment, topic, postid, app) {
        if (this.state.isLike === "") {
            addLike(commentComponent, comment, topic, postid, app);
            this.setState({
                isLike: "like"
            })

        } else {
            canceleLike(commentComponent, comment, topic, postid, app);
            this.setState({
                isLike: ""
            })
        }
    }


    render() {
        const {commentComponent, comment, topic, postid, app} = this.props;

        let checkLike;
        if (this.state.isLike === "like") {
            checkLike = (
                //with color -- red
                <IconButton
                    color="secondary"
                    className="comment-like-button"
                    onClick={() => {
                        this.handleOnClick(commentComponent, comment, topic, postid, app)
                    }}
                >
                    <FavoriteIcon/>
                </IconButton>

            )
        } else {
            checkLike = (
                //with color -- grey
                <IconButton
                    className="comment-like-button"
                    onClick={() => {
                        this.handleOnClick(commentComponent, comment, topic, postid, app)
                    }}
                >
                    <FavoriteIcon/>
                </IconButton>
            )
        }

        return (
            <div className="comment-like">
                {checkLike}
                <p className="like-number">
                    {comment.likes}
                </p>
            </div>
        )

    }
}

export default Like;