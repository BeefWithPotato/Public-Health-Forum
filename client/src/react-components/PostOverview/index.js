import React from "react";
import Button from "@material-ui/core/Button";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Link} from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import Like from './Like';
import {addTopic, deleteTopic, getTopics} from "./actions/actions";
import TopBar from "../TopBar";
import "./style.css";
import fever from "./static/fever.jpg";
import cov19 from "./static/cov19.jpg";
class AllPost extends React.Component {

    constructor(props) {
        super(props);
        props.history.push("/postoverview");
    }

    state = {
        topicTitle: "",
        topicImg: "",
        topics: []
    }

    componentDidMount() {
        //let all topics from database desplayed on the page
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

        const { app } = this.props;

        return (
            <div className="postoverview">

                <TopBar user={app.state.current}/>

                <Grid className="Grid" container direction="column" spacing={3}>

                    <Grid item className="input-grid">
                        <TextField
                            className="topics-input"
                            id="outlined-basic"
                            label="Create a brand new Topic here"
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
                                component="span"
                            >
                                <AddPhotoAlternateIcon/>
                            </Button>
                        </label>

                        <Button
                            size="small"
                            className="create-button"
                            variant="contained"
                            color="primary"
                            component="span"
                            onClick={() => addTopic(this, app)}
                        >
                            Create
                        </Button>
               
                    </Grid>


                    <Grid item className="topics-grid">
                   
                        {this.state.topics.map((topic) => (

                            <Paper className="postsubpaper" key={topic.title}>

                                <Grid container direction="column" spacing={1}>

                                    {/* Link to topic detail */}
                                    <Link className="button_link" to={"/postpage/" + topic.title}>
                                    {console.log("/postpage/" + topic.title)}
                                        <Grid item>
                                            {/* img src */}
                                            <img className="sub_img" src={topic.img} alt="sub"/>
                                        </Grid>

                                        {/* topic Title */}
                                        <Grid item>
                                            <h2 className="subtitle">
                                                {topic.title}
                                            </h2>
                                        </Grid>

                                        {/* topic creator */}
                                        <Grid item>
                                            <h5 className="src">
                                                Topic First Created by, <br/>
                                                {topic.creatorUsername}
                                            </h5>
                                        </Grid>
                                    </Link>

                                    
                                    <Like topic={topic} topicOverview={this} app={app}/>

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