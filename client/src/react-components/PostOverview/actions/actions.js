//get topics from database 
export const getTopics = (topicOverview) => {
    const url = "/topics";    

    // Since this is a GET request, simply call fetch on the URL
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
            topicOverview.setState({ topics: json.topics });
        })
        .catch(error => {
            console.log(error);
        });
}

//add a topic
export const addTopic = (topicOverview, app) => {

    //guests are not allowed to add a topic
    if(app.state.role === "user" || app.state.role === "admin"){
        const url = "/topics";

        if(topicOverview.state.topicImg === ""){
            alert("Every topic must with a theme picture!");
        }
        if(topicOverview.state.topicTitle === ""){
            alert("Every topic must contain a title!");
        }

        const topic = {
            title: topicOverview.state.topicTitle,
            img: topicOverview.state.topicImg,
            username: app.state.current
        };

        const request = new Request(url, {
            method: "post",
            body: JSON.stringify(topic),
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
                    getTopics(topicOverview);
                    console.log("Successfully create a new topic!");
                } 
                else if(res.status === 409){
                    alert("Error: Duplicate Topic.");
                }
                else {
                    // If server couldn't add the topic
                    alert("Error in creating the new topic!");
                }
            })
            .catch(error => {
                console.log(error);
            });
    }
    else{
        alert("Guest is not allowed to create a topic, please log in!");
    }
}

export const deleteTopic = (topicOverview, topic, app) => {

     //user can only delete their own topic
     if(app.state.role === "admin" || app.state.current === topic.creatorUsername){

        const url = "/topics";

        const request = new Request(url, {
            method: "delete",
            body: JSON.stringify(topic),
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
                    getTopics(topicOverview);
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
        alert("YOU DON'T HAVE PERMISSION TO DELETE THIS TOPIC");
    }
};


export const addLike = (topic, topicOverview, app) => {
    //if is a guest, then don't call server
    if(app.state.role === "user" || app.state.role === "admin"){
        const url = "/likes/topic";

        const request = new Request(url, {
            method: "post",
            body: JSON.stringify(topic),
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
                    getTopics(topicOverview);
                    return res.json();
                } else {
                    alert("Error in adding a like");
                }
            })
            .catch(error => {
                console.log(error);
            });
    }
}

export const canceleLike = (topic, topicOverview, app) => {

    if(app.state.role === "user" || app.state.role === "admin"){

        const url = "/likes/topic";

        const request = new Request(url, {
            method: "delete",
            body: JSON.stringify(topic),
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
                    getTopics(topicOverview);
                    console.log("success canceling a like");
                } else {
                    // If server couldn't add the like
                    alert("Error in canceling the like!");
                }
            })
            .catch(error => {
                console.log(error);
            });
    }
};