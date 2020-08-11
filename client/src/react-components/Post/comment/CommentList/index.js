import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import CommentItem from "../CommentItem"

/* Component for the List of Posts */
class CommentList extends React.Component {

    render() {
        const {commentComponent, app, topic, postid} = this.props;
        return (


            <div className="comment-list">
                <Table>
                    <TableBody>

                        {commentComponent.state.comments.map((comment) => (

                            <CommentItem key={commentComponent.state.comments.indexOf(comment)}
                                comment={comment}
                                commentComponent={commentComponent}
                                app={app}
                                topic={topic}
                                postid={postid}
                            />

                        ))}

                    </TableBody>
                </Table>
            </div>


        );
    }
}

export default CommentList;