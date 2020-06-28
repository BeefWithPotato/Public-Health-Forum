export const addTag = actions => {
  if(actions.props.match.params.user !== "guest"){
      const tagsList = actions.state.tags;

      const tag = {
          tagName: actions.state.tagName,
          creator: actions.state.creator,
          img: actions.state.img
      };

      if(tag.img !== ""){
          tagsList.unshift(tag);
          actions.setState({
              tags: tagsList
          });
      }
      else{
          alert("PLEASE CHOOSE A PICTURE WITH YOUR TOPIC");
      }

      
  }
  else{
      alert("IF YOU WANT TO CREATE A POST PLEASE LOG IN!");
  }
};


export const deleteTag = (actions, tag) => {

    if(actions.props.match.params.user === "admin"){

        const filteredTags = actions.state.tags.filter(t => {
          return t !== tag;
        });

        actions.setState({
            tags: filteredTags
        });
    }
    else{
        if(tag.creator === actions.props.match.params.user){
            const filteredTags = actions.state.tags.filter(t => {
                return t !== tag;
            });

            actions.setState({
                tags: filteredTags
            });
        }
        else{
          alert("YOU DON'T HAVE PERMISSION TO DELETE THIS TOPIC");
        }
    }
};