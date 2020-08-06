//Methods in this file modifies the postoverview component state

export const getMainPage = (mainPage) => {
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
            mainPage.setState({ 
                mainFeaturedPost: json.mainFeaturedPost,
                featuredPosts: json.featuredPosts,
            });
        })
        .catch(error => {
            console.log(error);
        });
}