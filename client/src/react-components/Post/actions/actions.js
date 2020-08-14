
export const getPosts = (postpage) => {
    const url = "/posts/" + postpage.props.match.params.topic;    

    fetch(url)
        .then(res => {
            if (res.status === 200) {
                // return a promise that resolves with the JSON body
                return res.json();
            } else {
                alert("Could not get topics");
            }
        })
        .then(json => {
            // the resolved promise with the JSON body
            postpage.setState({ posts: json.posts });
        })
        .catch(error => {
            console.log(error);
        });
}

export const addPost = (postpage, app) => {

    //guests are not allowed to add a topic
    if(app.state.role === "user" || app.state.role === "admin"){
        if(postpage.state.postContent === ""){
            alert("Post content can not be empty!");
        }

        const url = "/posts";

        const post = {
            content: postpage.state.postContent,
            username: app.state.current,
            topic: postpage.props.match.params.topic
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
                    getPosts(postpage);
                    console.log("Successfully create a new post!");
                } else {
                    // If server couldn't add the post
                    alert("Error in creating the new post!");
                }
            })
            .catch(error => {
                console.log(error);
            });
    }
    else{
       alert("Guest is not allowed to create a post, please log in!");
    }
}

export const deletePost = (postpage, post, topic, app) => {

    //user can only delete their own post
    if(app.state.role === "admin" || app.state.current === post.creatorUsername){

        const url = "/posts";

        const data = {
            id: post.id,
            topic: topic
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
                    getPosts(postpage);
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
        alert("YOU DON'T HAVE PERMISSION TO DELETE THIS post");
    } 
}

export const addLike = (postpage, post, topic, app) => {
    //if is a guest, then don't call server
    if(app.state.role === "user" || app.state.role === "admin"){
        const url = "/likes/post";

        const data = {
            id: post.id,
            topic: topic
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
                    getPosts(postpage);
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

export const canceleLike = (postpage, post, topic, app) => {

    //if is a guest, then don't call server
    if(app.state.role === "user" || app.state.role === "admin"){

        const url = "/likes/post";

        const data = {
            id: post.id,
            topic: topic
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
                    getPosts(postpage);
                    console.log("success cancelling a like");
                } else {
                    alert("Error in canceling the like!");
                }
            })
            .catch(error => {
                console.log(error);
            });
    }
};