import React from "react";

import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import { Link } from "react-router-dom";

import Parser from 'html-react-parser';
import { deletePost } from "../actions/actions";
import { deleteComment } from "../comment/actions/actions";
import "./style.css";

class PostItem extends React.Component {

  render() {
    const { type, post, postComponent, user} = this.props;

    let checkType;
    if(type === "comment"){
        checkType = (
            
            <h4 className="post-info">{Parser(post.content)}</h4>
            
        )
    }
    else{
        checkType = (
            <Link to={"/comment/" + post.title + "/" + user} >
                <h4 className="post-info">{Parser(post.title)}</h4>
            </Link>
        )
    }

    let checkDelete;
    if(type === "comment"){
        checkDelete = (
            
            <IconButton 
                className="delete-button" 
                aria-label="delete"
                onClick={
                    deleteComment.bind(this, postComponent, post)
                }
            >
                <DeleteIcon />
            </IconButton>
            
        )
    }
    else{
        checkDelete = (
            <IconButton 
                className="delete-button" 
                aria-label="delete"
                onClick={
                    deletePost.bind(this, postComponent, post)
                }
            >
                <DeleteIcon />
            </IconButton>
        )
    }

    return (
        
          <TableRow className="row" key={post.username}>
              <TableCell padding="default" scope="column">

                  {checkDelete}

                  <img className="user-icon" src={post.icon} />

                  <h3 className="post-user">
                      @{post.username}
                  </h3>

                  {checkType}

              </TableCell>
          </TableRow>
       
    );
  }
}

export default PostItem;