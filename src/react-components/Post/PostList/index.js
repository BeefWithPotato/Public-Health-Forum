import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";

import PostItem from "../PostItem"

import "./style.css";


class PostList extends React.Component {
  render() {
    const { posts, postComponent } = this.props;

    return(
          <div className="post-list">
              <Table>
                  <TableBody>
                
                      {posts.map((post) => (
                          <PostItem post={post} postComponent={postComponent} />                                
                      ))}
                        
                    
                
                  </TableBody>
              </Table>
          </div>
    );
  }
}

export default PostList;