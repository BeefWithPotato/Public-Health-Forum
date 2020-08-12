import React from "react";
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';

import {addLike, canceleLike} from "../../actions/actions";
import "./style.css";


class Like extends React.Component {

    state = {
        isLike: ""
    }

    //check if we click on the like button
    handleOnClick(postComponent, post, topic, app) {
        if (this.state.isLike === "") {
            addLike(postComponent, post, topic, app);
            this.setState({
                isLike: "like"
            })

        } else {
            canceleLike(postComponent, post, topic, app);
            this.setState({
                isLike: ""
            })
        }
    }

    render() {
        const {postComponent, post, topic, app} = this.props;

        let checkLike;
        if (this.state.isLike === "like") {
            checkLike = (
                //with color -- red
                <IconButton
                    color="secondary"
                    className="post-like-button"
                    onClick={() => {
                        this.handleOnClick(postComponent, post, topic, app)
                    }}
                >
                    <FavoriteIcon/>
                </IconButton>

            )
        } else {
            checkLike = (
                //with color -- grey
                <IconButton
                    className="post-like-button"
                    onClick={() => {
                        this.handleOnClick(postComponent, post, topic, app)
                    }}
                >
                    <FavoriteIcon/>
                </IconButton>
            )
        }

        return (
            <div className="post-like">
                {checkLike}
                <p className="post-like-number">
                    {post.likes}
                </p>
            </div>
        )

    }
}

export default Like;