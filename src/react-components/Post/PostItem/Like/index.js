import React from "react";
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import "./style.css";


class Like extends React.Component {

    state = {
        isLike: ""
    }

    //check if we click on the like button
    handleOnClick() {
        if (this.state.isLike === "") {
            this.setState({
                isLike: "like"
            })

        } else {
            this.setState({
                isLike: ""
            })
        }
    }


    render() {
        let checkLike;
        if (this.state.isLike === "like") {
            checkLike = (
                //with color -- red
                <IconButton
                    color="secondary"
                    className="post-like-button"
                    onClick={() => {
                        this.handleOnClick()
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
                        this.handleOnClick()
                    }}
                >
                    <FavoriteIcon/>
                </IconButton>
            )
        }

        return (
            <div className="post-like">
                {checkLike}
            </div>
        )

    }
}

export default Like;