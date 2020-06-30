import React from "react";
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import "./style.css";


class Like extends React.Component{

	state = {
		isLike: ""
	}

	handleOnClick(){
        if(this.state.isLike === ""){
            this.setState({
                isLike: "like"
            })
            
        }
        else{
            this.setState({
                isLike: ""
            })
        }
    }
	

	render(){
		let checkLike;
        if(this.state.isLike === "like"){
            checkLike = (
                <IconButton 
                    color="secondary"
                    className="like-button" 
                    onClick={() => {this.handleOnClick()}}
                >
                    <FavoriteIcon/>
                </IconButton>

            )
        }
        else{
            checkLike = (
                <IconButton 
                    
                    className="like-button" 
                    onClick={() => {this.handleOnClick()}}
                >
                    <FavoriteIcon/>
                </IconButton>
            )
        }

		return (
    		<div>
    			{checkLike}	  												
			</div>
		)
  	
	}
}

export default Like;