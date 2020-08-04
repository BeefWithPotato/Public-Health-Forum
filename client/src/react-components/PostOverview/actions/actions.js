//Methods in this file modifies the postoverview component state

export const addTopic = (topicOverview, app) => {

    //guests are not allowed to add a topic
    if(app.state.current !== null){
        const url = "/topics";

        const topic = topicOverview.state;

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
                    alert("Successfully creating a new topic!");
                } else {
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

export const deleteTopic = (actions, tag) => {
    //admin can delete any tags in this page
    if (actions.props.match.params.user === "admin") {

        const filteredTags = actions.state.tags.filter(t => {
            return t !== tag;
        });

        actions.setState({
            tags: filteredTags
        });
    } else {
        //users only can delete their own tags
        if (tag.creator === actions.props.match.params.user) {
            const filteredTags = actions.state.tags.filter(t => {
                return t !== tag;
            });

            actions.setState({
                tags: filteredTags
            });
        } else {
            alert("YOU DON'T HAVE PERMISSION TO DELETE THIS TOPIC");
        }
    }
};