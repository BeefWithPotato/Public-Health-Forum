import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import PostItem from "../PostItem"

import "./style.css";

/* Component for the List of Posts */
class PostList extends React.Component {


    render() {
        const {type, posts, postComponent, user} = this.props;
        return (


            <div className="post-list">
                <Table>
                    <TableBody>

                        {posts.map((post) => (

                            <PostItem key={posts.indexOf(post)}
                                      type={type}
                                      post={post}
                                      postComponent={postComponent}
                                      user={user}/>

                        ))}

                    </TableBody>
                </Table>
            </div>


        );
    }
}

export default PostList;