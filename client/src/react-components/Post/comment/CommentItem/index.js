import React from "react";

import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import {Link} from "react-router-dom";

import Parser from 'html-react-parser';
import {deleteComment} from "../actions/actions";
import Like from "../Like";
import "./style.css";

/* Component for the individual comment */
class CommentItem extends React.Component {

    render() {
        const {comment, commentComponent, app, topic, postid} = this.props;

        return (

            <TableRow className="row" key={comment.creatorUsername}>
                <TableCell padding="default" scope="column">

                    <IconButton
                        className="delete-button"
                        aria-label="delete"
                        onClick={() => deleteComment(commentComponent, comment, topic, postid, app)}
                    >
                        <DeleteIcon/>
                    </IconButton>

                    <img alt="user-icon" className="user-icon" src={commentComponent.state.icon}/>

                    <h3 className="comment-user">
                        @{comment.creatorUsername}
                    </h3>

                    <Like className="comment-like-button" 
                        commentComponent={commentComponent} 
                        comment={comment} 
                        topic={topic} 
                        postid={postid} 
                        app={app}
                    />

                    <h4 className="comment-info">{Parser(comment.content)}</h4>

                </TableCell>
            </TableRow>

        );
    }
}

export default CommentItem;