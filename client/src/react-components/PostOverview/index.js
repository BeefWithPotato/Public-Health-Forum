import React from "react";
import Button from "@material-ui/core/Button";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Link} from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Like from './Like';
import {addTopic, deleteTopic, getTopics} from "./actions/actions";
import TopBar from "../TopBar";
import "./style.css";
import cov19 from "./static/cov19.jpg"
import fever from "./static/fever.jpg"

class AllPost extends React.Component {

    constructor(props) {
        super(props);
        props.history.push("/postoverview");
    }

    // state = {
    //     topicTitle: "",
    //     creator: "",
    //     topicImg: "",
    //     homeurl: "",
    //     posturl: "",
    //     topics: [
    //         // now the tags data is hard-coded
    //         // here requires server call in the future
    //         {tagName: "COV-19", creator: "User1", img: cov19},
    //         {tagName: "Fever", creator: "User2", img: fever},
    //     ]
    // }

    state = {
        topicTitle: "",
        topicImg: "",
        topics: [],
    }

    componentDidMount() {
        //console.log(this.props.match.params.user);

        //const homeurl = "/homepage/" + this.props.match.params.user;
        //const posturl = "/postoverview/" + this.props.match.params.user;

        //this.setState({
            //creator: this.props.match.params.user,
            //homeurl: homeurl,
            //posturl: posturl
        //});
        getTopics(this);

    }

    //handler for whenever we input in the input box
    handleInputChange = event => {

        this.setState({
            topicTitle: event.target.value
        });
        console.log(this.state.topicTitle);
    }

    //handler for whenever a picture is uploaded
    handleImgChange = event => {

        let reader = new FileReader();
        reader.onload = (event) => {

            this.setState({
                topicImg: event.target.result
            });
        };
        reader.readAsDataURL(event.target.files[0]);
    }


    render() {

        const { history, app } = this.props;
        console.log(this.state.topics.length);

        return (
            <div className="postoverview">

                <TopBar user={this.props.match.params.user}/>

                <Grid className="Grid" container direction="column" spacing={3}>

                    <Grid item className="input-topic">
                        <TextField
                            className="topics-input"
                            id="outlined-basic"
                            label="Create a brand new Topic"
                            variant="outlined"
                            onChange={this.handleInputChange}
                        />


                        <input
                            accept="image/*"
                            className="upload-input"
                            id="upload"
                            multiple
                            type="file"
                            onChange={this.handleImgChange}
                        />
                        <label htmlFor="upload">
                            <Button
                                size="small"
                                className="upload-button"
                                variant="contained"
                                color="secondary"
                                component="span"
                            >
                                Upload
                            </Button>
                        </label>

                        <Button
                            size="small"
                            className="upload-button"
                            variant="contained"
                            color="primary"
                            component="span"
                            onClick={() => addTopic(this, app)}
                        >
                            Create
                        </Button>

                    </Grid>


                    <Grid item className="topics-grid">
                        {/* Post Title */}
                        {this.state.topics.map((topic) => (

                            /* Post Title */
                            <Paper className="postsubpaper" key={topic.title}>

                                <Grid container direction="column" spacing={1}>

                                    {/* Link to topic detail */}
                                    <Link className="button_link" to={"/postpage"}>
                                        <Grid item>
                                            {/* img src */}
                                            <img className="sub_img" src={topic.img} alt="sub"/>
                                        </Grid>

                                        <Grid item>
                                            <h2 className="subtitle">
                                                {topic.title}
                                            </h2>
                                        </Grid>

                                        {/* creator */}
                                        <Grid item>
                                            <h5 className="src">
                                                Topic First Created by, <br/>
                                                {topic.creatorUsername}
                                            </h5>
                                        </Grid>
                                    </Link>

                                    {/* The like component can't do any record in this phase, will be fix in Phase2 */}
                                    <Like/>

                                    <IconButton
                                        className="topic-delete-button"
                                        aria-label="delete"
                                        onClick={() => deleteTopic(this, topic, app)}
                                    >
                                        <DeleteIcon/>
                                    </IconButton>

                                </Grid>
                            </Paper>
                        ))}
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default AllPost;