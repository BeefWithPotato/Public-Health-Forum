//Methods in this file modifies the postoverview component state


export const addTag = actions => {
    //guest don't have permission to do any actions
    if (actions.props.match.params.user !== "guest") {
        const tagsList = actions.state.tags;
        
        const tag = {
            tagName: actions.state.tagName,
            creator: actions.state.creator,
            img: actions.state.img
        };

        //Check if the topic has been created
        let check = false;
        for(var i = 0; i < tagsList.length; i++) {
            if(tagsList[i].tagName === tag.tagName){
                check = true;
            }
        }

        //check if there's a picture
        if (tag.img !== "") {
            if(check !== true){
                tagsList.unshift(tag);
                actions.setState({
                    tags: tagsList
                });
            }
            else{
                alert("This TOPIC HAS BEEN CREATED BY OTHERS!");
            }
        } else {
            alert("PLEASE CHOOSE A PICTURE WITH YOUR TOPIC");
        }


    } else {
        alert("IF YOU WANT TO CREATE A POST PLEASE LOG IN!");
    }
};


export const deleteTag = (actions, tag) => {
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