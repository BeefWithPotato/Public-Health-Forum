// A function to send a POST request to get user data
export const getUserInfo = (user, data) => {
    const url = "/dashboard/data/" + user;

    fetch(url)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            } else {
                alert("Could not get user info");
            }
        })
        .then(json => {
            console.log('json')
            console.log(json)
            console.log('data')
            console.log(data)
            data.setState({
                gender: json.gender,
                email: json.email,
                phone: json.phone,
                address: json.address,
            });
            console.log('after')
            console.log(data)
        })
        .catch(error => {
            console.log(error);
        });
}

// A function to send a POST request to get user data
// export const updateUserInfo = (user, data) => {
//     const url = "/dashboard/data/" + user;

//     // Create our request constructor with all the parameters we need
//     const request = new Request("/users/login", {
//         method: "post",
//         body: JSON.stringify(loginComp.state),
//         headers: {
//             Accept: "application/json, text/plain, */*",
//             "Content-Type": "application/json"
//         }
//     });

//     // Send the request with fetch()
//     fetch(request)
//         .then(res => {
//             if (res.status === 200) {
//                 return res.json();
//             }
//         })
//         .then(json => {
//             if (json.currentUser !== undefined) {
//                 data.setState(json);
//             }
//         })
//         .catch(error => {
//             console.log(error);
//         });
// }