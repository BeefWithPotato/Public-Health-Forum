
export const addPost = actions => {
  if(actions.props.match.params.user !== "guest"){
      const postList = actions.state.posts;

      const post = {
        username: actions.state.newUsername,
        title: actions.state.newtitle,
        icon: actions.state.icon
      };
      
      if(postList.length !== 0){
          postList.unshift(post);
          actions.setState({
              posts: postList
          });
      }
      else{
          const newList = []
          newList.push(post);
          actions.setState({
              posts: newList
          });
      }
  }
  else{
    alert("IF YOU WANT TO CREATE A TOPIC PLEASE LOG IN");
  }


};

export const deletePost = (actions, post) => {
 

  if(actions.props.match.params.user === "admin"){
      const filteredPosts = actions.state.posts.filter(p => {
          return p !== post;
      });

      actions.setState({
          posts: filteredPosts
      });
  }
  else{
        if(post.username === actions.props.match.params.user){
            const filteredPosts = actions.state.posts.filter(p => {
                return p !== post;
            });

            actions.setState({
                posts: filteredPosts
            });
        }
        else{
          alert("YOU DON'T HAVE PERMISSION TO DELETE THIS POST");
        }
    }
  
};