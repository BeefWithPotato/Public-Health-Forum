import React from "react";

import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import {Link} from "react-router-dom";

import Parser from 'html-react-parser';
import {deletePost} from "../actions/actions";
//import {deleteComment} from "../comment/actions/actions";
import img1 from "../static/user1.png"
import Like from "./Like";
import "./style.css";

/* Component for the individual post */
class PostItem extends React.Component {

    render() {
        const {post, postComponent, app, topic} = this.props;

        return (

            <TableRow className="row" key={post.creatorUsername}>
                <TableCell padding="default" scope="column">

                    <IconButton
                        className="delete-button"
                        aria-label="delete"
                        onClick={() => deletePost(postComponent, post, topic, app)}
                    >
                        <DeleteIcon/>
                    </IconButton>

                    <img alt="user-icon" className="user-icon" src={img1}/>

                    <h4 className="post-user">
                        @{post.creatorUsername}
                    </h4>

                    <Like className="post-like-button" 
                        postComponent={postComponent} 
                        post={post} 
                        topic={topic} 
                        app={app}
                    />

                    <Link to={"/comments/" + topic + "/" + post.id}>
                        <p className="post-info">{Parser(post.content)}</p>
                    </Link>

                </TableCell>
            </TableRow>

        );
    }
}

export default PostItem;