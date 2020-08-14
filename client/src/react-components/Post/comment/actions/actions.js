
export const getComments = (commentpage) => {
    const url = "/comments/" + commentpage.props.match.params.topic + "/" + commentpage.props.match.params.postid;    

    fetch(url)
        .then(res => {
            if (res.status === 200) {
                // return a promise that resolves with the JSON body
                return res.json();
            } else {
                alert("Could not get comments");
            }
        })
        .then(json => {
            // the resolved promise with the JSON body
            commentpage.setState({ comments: json.comments });
        })
        .catch(error => {
            console.log(error);
        });
}

export const addComment = (commentpage, app) => {

    //guests are not allowed to add a comment
    if(app.state.role === "user" || app.state.role === "admin"){
        if(commentpage.state.commentContent === ""){
            alert("Comment can not be empty!");
        }

        const url = "/comments";

        const post = {
            content: commentpage.state.commentContent,
            username: app.state.current,
            topic: commentpage.props.match.params.topic,
            postid: commentpage.props.match.params.postid
        };

        const request = new Request(url, {
            method: "post",
            body: JSON.stringify(post),
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json"
            }
        });

        // Send the request with fetch()
        fetch(request)
            .then(function (res) {
                // Handle response we get from the API.
                if (res.status === 200) {
                    getComments(commentpage);
                    console.log("Successfully add a new comment!");
                } else {
                    alert("Error in creating the new comment!");
                }
            })
            .catch(error => {
                console.log(error);
            });
    }
    else{
       alert("Guest is not allowed to add a comment, please log in!");
    }
}

export const deleteComment = (commentpage, comment, topic, postid, app) => {

    //admin can delete any tags in this page
    if(app.state.role === "admin" || app.state.current === comment.creatorUsername){

        const url = "/comments";

        const data = {
            id: comment.id,
            topic: topic,
            postid: postid
        }

        const request = new Request(url, {
            method: "delete",
            body: JSON.stringify(data),
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json"
            }
        });

        // Send the request with fetch()
        fetch(request)
            .then(function (res) {
                // Handle response we get from the API.
                if (res.status === 200) {
                    getComments(commentpage);
                    console.log("Successfully delete the post!");
                } else {
                    // If server couldn't add the topic
                    alert("Error in deleting the topic!");
                }
            })
            .catch(error => {
                console.log(error);
            });
    } 
    else {
        alert("YOU DON'T HAVE PERMISSION TO DELETE THIS COMMENT");
    } 
}

export const addLike = (commentpage, comment, topic, postid, app) => {
    //if is a guest, then don't call server
    if(app.state.role === "user" || app.state.role === "admin"){
        const url = "/likes/comment";

        const data = {
            id: comment.id,
            topic: topic,
            postid: postid
        }

        const request = new Request(url, {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json"
            }
        });

        // Send the request with fetch()
        fetch(request)
            .then(function (res) {
                // Handle response we get from the API.
                if (res.status === 200) {
                    getComments(commentpage);
                    console.log("success adding a like");
                } else {
                    alert("Error in adding a like");
                }
            })
            .catch(error => {
                console.log(error);
            });
    }
}

export const canceleLike = (commentPage, comment, topic, postid, app) => {
    //if is a guest, then don't call server
    if(app.state.role === "user" || app.state.role === "admin"){

        const url = "/likes/comment";

        const data = {
            id: comment.id,
            topic: topic,
            postid: postid
        }   

        const request = new Request(url, {
            method: "delete",
            body: JSON.stringify(data),
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json"
            }
        });

        // Send the request with fetch()
        fetch(request)
            .then(function (res) {
                // Handle response we get from the API.
                if (res.status === 200) {
                    getComments(commentPage);
                    console.log("success cancelling a like");
                } else {
                    // If server couldn't cancel the like
                    alert("Error in canceling the like!");
                }
            })
            .catch(error => {
                console.log(error);
            });
    }
};

