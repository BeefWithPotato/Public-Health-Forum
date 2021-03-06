import React from "react";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";

import "./style.css";

/* Component for the Welcome page */
class WelcomePage extends React.Component {

    render() {

        return (
            <div className="welcome_page">
                {/* sign up button */}
                <Link className="button_link" to="./Register">
                    <Button size="small" className="welcome_button">Want an account?</Button>
                </Link>

                {/* login button */}
                <Link className="button_link" to="./Login">
                    <Button size="small" className="welcome_button">User Login!</Button>
                </Link>

                {/* guest visit button */}
                <Link className="button_link" to={"./MainPage/guest"}>
                    <Button size="small" className="welcome_button">Continue as a guest!</Button>
                </Link>
            </div>
        );
    }
}

export default WelcomePage;