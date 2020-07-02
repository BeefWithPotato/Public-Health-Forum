import React from "react";

import Button from "@material-ui/core/Button";

import "./style.css";

/* TopMenu part in every pages*/
class TopMenu extends React.Component {

    render() {

        const user = this.props.user;
        console.log(user);
        const homeurl = "/homepage/" + user;
        const posturl = "/postoverview/" + user;
        return (
            <div className="top_menu">
                <ul>
                    {/* Home button */}
                    <li className="Home">
                        <a href={homeurl}>Home</a>
                    </li>

                    {/* Posts button */}
                    <li className="Posts">

                        <a href={posturl}>Posts</a>
                    </li>

                    {/* Help button */}
                    <li className="Help">
                        <a href={"./Help"}>Help</a>
                    </li>

                    {/* Search Box */}
                    <li className="search">
                        <input className="search" type="text" placeholder="search"/>

                        {/* Search Button */}
                        <Button size="small" variant="outlined" href="#outlined-buttons"
                                color="primary" className="search_button">
                            Search
                        </Button>
                    </li>

                </ul>
            </div>
        );
    }
}

export default TopMenu;