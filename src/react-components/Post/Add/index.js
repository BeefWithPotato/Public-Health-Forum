import React from "react";

import Button from '@material-ui/core/Button';
//Here is a free external rich text-editor called React-Quill.
//Source:
//https://github.com/zenoamaro/react-quill
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import "./style.css";

class AddPost extends React.Component {

    //default setup for react-quill
    modules = {
        toolbar: [
            [{'header': [1, 2, false]}],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
            ['clean']
        ],
    };

    formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
    ];


    render() {


        const {newtitle, onChange, addPost} = this.props;
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