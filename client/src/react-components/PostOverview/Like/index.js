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
    handleOnClick(topic, topicOverview) {
        if (this.state.isLike === "") {
            addLike(topic, topicOverview);
            this.setState({
                isLike: "like"
            })

        } else {
            canceleLike(topic, topicOverview);
            this.setState({
                isLike: ""
            })
        }
    }


    render() {
        const { topic, topicOverview } = this.props;

        let checkLike;
        if (this.state.isLike === "like") {
            checkLike = (
                //with color -- red
                <IconButton
                    color="secondary"
                    className="like-button"
                    onClick={() => {
                        this.handleOnClick(topic, topicOverview)
                    }}
                >
                    <FavoriteIcon/>
                </IconButton>

            )
        } else {
            checkLike = (
                //without color -- grey
                <IconButton
                    className="like-button"
                    onClick={() => {
                        this.handleOnClick(topic, topicOverview)
                    }}
                >
                    <FavoriteIcon/>
                </IconButton>
            )
        }

        return (
            <div>
                {checkLike}
            </div>
        )

    }
}

export default Like;