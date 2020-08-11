import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import PostItem from "../PostItem"

import "./style.css";

/* Component for the List of Posts */
class PostList extends React.Component {

    render() {
        const {postComponent, app, topic} = this.props;
        return (


            <div className="post-list">
                <Table>
                    <TableBody>

                        {postComponent.state.posts.map((post) => (

                            <PostItem key={postComponent.state.posts.indexOf(post)}
                                post={post}
                                postComponent={postComponent}
                                app={app}
                                topic={topic}
                            />

                        ))}

                    </TableBody>
                </Table>
            </div>


        );
    }
}

export default PostList;