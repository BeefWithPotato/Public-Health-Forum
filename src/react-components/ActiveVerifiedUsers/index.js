import React from "react";
import {Link} from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


import user1 from "./static/user1.png"
import user2 from "./static/user2.png"

import "./style.css";


class ActiveVerifiedUsers extends React.Component {

    state = {

        users: [
            {name: "User1", img: user1, field: "Surgeon"},
            {name: "User2", img: user2, field: "Physician"}

        ]
    }

    render() {
        return (
            <div className="active_users">
                <h3 className="hot_users_title">Recent Active Verified Users</h3>


                {this.state.users.map((user) => (

                    <Paper className="user_paper">

                        <Grid className="content" container spacing={2}>

                            <Grid item>
                                <img className="avatar" src={user.img} alt="user's avatar"/>
                            </Grid>

                            <Grid item xs={6} sm container>
                                <Link className="button_link" to="">
                                    <Grid container direction="column" spacing={1}>
                                        <Grid item className="info">
                                            <h3 className="username"> {user.name} </h3>
                                            <h6 className="description">Verified Doctor <br/> Field: <br/> {user.field}
                                            </h6>
                                        </Grid>
                                    </Grid>
                                </Link>
                            </Grid>

                        </Grid>

                    </Paper>

                ))}
            </div>
        );
    }
}

export default ActiveVerifiedUsers;