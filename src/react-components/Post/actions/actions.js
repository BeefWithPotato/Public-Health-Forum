
export const addPost = actions => {
  
  const postList = actions.state.posts;
  const index = actions.state.index;
  const post = {
    username: actions.state.newUsername,
    content: actions.state.newContent,
    icon: actions.state.icon
  };

  // Adding at a particular position
  postList.unshift(post);
  actions.setState({
    posts: postList
  });
  
};

export const deletePost = (actions, post) => {
  //log(student)

  // filters out the student we don't want.
  const filteredPosts = actions.state.posts.filter(p => {
    return p !== post;
  });

  //log(filteredStudents)

  actions.setState({
    posts: filteredPosts
  });
};