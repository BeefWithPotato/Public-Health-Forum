//Methods in this file modifies the postoverview component state

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
            //console.log(topicOverview.state.topics);
        })
        .catch(error => {
            console.log(error);
        });
}

export const addTopic = (topicOverview, app) => {

    //guests are not allowed to add a topic
    //if(app.state.role === "user" || app.state.role === "admin"){
        const url = "/topics";

        const topic = {
            title: topicOverview.state.topicTitle,
            id: topicOverview.state.topics.length + 1,
            img: topicOverview.state.topicImg
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
                    // If student was added successfully, tell the user.
                    //topicOverview.topics = [];
                    getTopics(topicOverview);
                    //alert("Successfully create a new topic!");
                } else {
                    // If server couldn't add the topic
                    alert("Error in creating the new topic!");
                }
            })
            .catch(error => {
                console.log(error);
            });
    //}
    //else{
    //    alert("Guest is not allowed to create a topic, please log in!");
    //}
}

export const deleteTopic = (topicOverview, topic, app) => {
//     //admin can delete any tags in this page
//     if(app.state.role === "admin"){

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
                    // If student was added successfully, tell the user.
                    //topicOverview.topics = [];
                    getTopics(topicOverview);
                    //alert("Successfully delete the topic!");
                } else {
                    // If server couldn't add the topic
                    alert("Error in deleting the topic!");
                }
            })
            .catch(error => {
                console.log(error);
            });


//     } 

//     else {
//         //users only can delete their own tags
//         if (tag.creator === actions.props.match.params.user) {
//             const filteredTags = actions.state.tags.filter(t => {
//                 return t !== tag;
//             });

//             actions.setState({
//                 tags: filteredTags
//             });
//         } else {
//             alert("YOU DON'T HAVE PERMISSION TO DELETE THIS TOPIC");
//         }
//     }
};