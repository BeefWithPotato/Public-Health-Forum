import React from "react";

import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import { deletePost } from "../actions/actions";
import "./style.css";

const log = console.log;

class PostItem extends React.Component {

  render() {
    const { post, postComponent} = this.props;

    return (

          <TableRow className="row" key={post.username}>
              <TableCell align="center" padding="default" scope="column">

                  <IconButton 
                      className="delete-button" 
                      aria-label="delete"
                      onClick={
                          deletePost.bind(this, postComponent, post)
                      }
                  >
                          <DeleteIcon />
                  </IconButton>

                  <img className="user-icon" src={post.icon} />

                  <h3 className="post-user">
                      @{post.username}
                  </h3>
                  
                  <p className="content">{post.content}!</p>
         

              </TableCell>

          </TableRow>
    );
  }
}

export default PostItem;