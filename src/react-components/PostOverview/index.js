import React from "react";
import Button from "@material-ui/core/Button";

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Like from './Like';
import { addTag, deleteTag} from "./actions/actions";

import "./style.css";
import header_img from "./static/header_img.jpg";
import cov19 from "./static/cov19.jpg"
import fever from "./static/fever.jpg"

class AllPost extends React.Component{
    
    state = {
        tagName:"",
        creator:"",
        img: "",
        homeurl: "",
        posturl: "",
        tags: [
            {tagName: "COV-19", creator: "User1", img: cov19},
            {tagName: "Fever", creator: "User2", img: fever},
        ]
    }

    componentDidMount() {
        console.log(this.props.match.params.user);
        
        const homeurl = "/homepage/" + this.props.match.params.user;
        const posturl = "/postoverview/" + this.props.match.params.user;

        this.setState({
            creator: this.props.match.params.user,
            homeurl: homeurl,
            posturl: posturl
        });
         
    }

    handleInputChange = event =>{
        
        this.setState({
            tagName: event.target.value
           
        });
    }
    
    handleImgChange = event =>{

        let reader = new FileReader();
        reader.onload = (event) => {
            this.setState({
                img: event.target.result
            });
        };
        reader.readAsDataURL(event.target.files[0]);
    }
    

    render(){

        return (
            <div className="postoverview">

                <ul>
                    {/* Home button */}
                    <li className="Home">
                        <a href={this.state.homeurl}>Home</a>
                    </li>

                    {/* Posts button */}
                    <li className="Posts">

                        <a href={this.state.posturl}>Posts</a>
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

                <img className="header_img" src={header_img} alt="header"/>


                <Grid className="Grid" container direction="column" spacing={3}>


                    <Grid item className="input-topic">
                        <TextField 
                            className="tag-input"
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
                            onClick={() => addTag(this)}
                        >
                            Create
                        </Button>

                    </Grid>


                    <Grid item className="tags-grid">
                        {/* Post Title */}
                        {this.state.tags.map((tag) => (
                            
                            /* Post Title */
                            <Paper className="postsubpaper">

                                    <Grid container direction="column" spacing={1}>
                                        
                                        {/* Link to topic detail */}
                                        <Link className="button_link" to={"/postpage/"+tag.tagName+"/"+this.props.match.params.user} >
                                            <Grid item>
                                                {/* img src */}
                                                <img className="sub_img" src={tag.img} alt="sub"/>
                                            </Grid>

                                            <Grid item>
                                                <h2 className="subtitle">
                                                    {tag.tagName}
                                                </h2>
                                            </Grid>

                                            {/* creator */}
                                            <Grid item>
                                                <h5 className="src">
                                                    Tag First Created by, <br/>
                                                    {tag.creator}
                                                </h5>
                                            </Grid>
                                        </Link>

                                        
                                        <Like/>

                                        <IconButton 
                                            className="tag-delete-button" 
                                            aria-label="delete"
                                            onClick={() => deleteTag(this, tag)}
                                        >
                                            <DeleteIcon />
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