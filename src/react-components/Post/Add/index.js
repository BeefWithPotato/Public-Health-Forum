import React from "react";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";


import "./style.css";

class AddPost extends React.Component{

	
    render(){

    	
    	const {newContent, onChange, addPost } = this.props;
        return (
            <div className="Add">
            	
                <form className="text-input">
                	<Grid direction="column" container spacing={2}>
                		<Grid item>
					        <textarea 
					            className="text-area" 
					            name="newContent"
					            rows="12" 
					            placeholder="Say something"
					            value ={newContent} 
					            onChange={onChange}
					        >
					        </textarea>
					    </Grid>

				        <Grid item>            
				            <Button 
					            className="post" 
					            variant="contained" 
					            color="primary" 					           
					            onClick={addPost}
					        >
					            Post
					        </Button>
					    </Grid>  
		            </Grid>  	
                </form>
            </div>
        );
    }
}

export default AddPost;