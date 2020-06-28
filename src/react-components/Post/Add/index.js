import React from "react";

import Button from '@material-ui/core/Button';


//This is an free external rich text-editor called React-Quill.
//Source: 
//https://github.com/zenoamaro/react-quill
//https://github.com/kensnyder/quill-image-drop-module
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { ImageDrop } from 'quill-image-drop-module';
import "./style.css";

//register quill-image-drop-module in quill
Quill.register('modules/imageDrop', ImageDrop);

class AddPost extends React.Component{

	modules = {
	    toolbar: [
	      	[{ 'header': [1, 2, false] }],
	      	['bold', 'italic', 'underline','strike', 'blockquote'],
	      	[{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
	      	['clean']
	    ],
	    imageDrop: true,
  	};

  	formats = [
    	'header',
    	'bold', 'italic', 'underline', 'strike', 'blockquote',
    	'list', 'bullet', 'indent',
  	];



    render(){

    	
    	const {newtitle, onChange, addPost } = this.props;
        return (
            <div className="Add">
            	
                <form className="text-input">
                	
					<ReactQuill
						className="text-area" 
						theme="snow"
						value={newtitle}
						modules={this.modules}
	    				formats={this.formats}
						onChange={onChange}
					/>

				    <Button 
					    className="post-button" 
					    variant="contained" 
					    color="primary"			           
					    onClick={addPost}
					>
					    Post
					</Button> 
		             	
                </form>
            </div>
        );
    }
}

export default AddPost;