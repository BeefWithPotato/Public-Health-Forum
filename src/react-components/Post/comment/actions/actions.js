
export const addComment = actions => {
  if(actions.props.match.params.user !== "guest"){
      const commentList = actions.state.comments;

      const comment = {
        username: actions.state.username,
        content: actions.state.content,
        icon: actions.state.icon
      };
      
      if(commentList.length !== 0){
          commentList.unshift(comment);
          actions.setState({
              comments: commentList
          });
      }
      else{
          const newList = []
          newList.push(comment);
          actions.setState({
              comments: newList
          });
      }
  }
  else{
    alert("IF YOU WANT TO CREATE A TOPIC PLEASE LOG IN");
  }


};

export const deleteComment = (actions, post) => {
 

  if(actions.props.match.params.user === "admin"){
      const filteredComments = actions.state.comments.filter(c => {
          return c !== post;
      });

      actions.setState({
          comments: filteredComments
      });
  }
  else{
        if(post.username === actions.props.match.params.user){
            const filteredComments = actions.state.comments.filter(c => {
                return c !== post;
            });

            actions.setState({
                comments: filteredComments
            });
        }
        else{
          alert("YOU DON'T HAVE PERMISSION TO DELETE THIS POST");
        }
    }
  
};