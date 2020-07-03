//Methods in this file modifies the post page component state
export const addPost = actions => {
    //guest don't have permission to do any actions
    if (actions.props.match.params.user !== "guest") {
        const postList = actions.state.posts;

        const post = {
            username: actions.state.newUsername,
            title: actions.state.newtitle,
            icon: actions.state.icon
        };

        //check if current post is the first post in the list
        if (postList.length !== 0) {
            postList.unshift(post);
            actions.setState({
                posts: postList
            });
        }
        //if so, create a new list
        else {
            const newList = []
            newList.push(post);
            actions.setState({
                posts: newList
            });
        }
    } else {
        alert("IF YOU WANT TO CREATE A TOPIC PLEASE LOG IN");
    }


};

export const deletePost = (actions, post) => {

    //admin can delete any tags in this page
    if (actions.props.match.params.user === "admin") {
        const filteredPosts = actions.state.posts.filter(p => {
            return p !== post;
        });

        actions.setState({
            posts: filteredPosts
        });
    } else {
        //users only can delete their own posts
        if (post.username === actions.props.match.params.user) {
            const filteredPosts = actions.state.posts.filter(p => {
                return p !== post;
            });

            actions.setState({
                posts: filteredPosts
            });
        } else {
            alert("YOU DON'T HAVE PERMISSION TO DELETE THIS POST");
        }
    }

};