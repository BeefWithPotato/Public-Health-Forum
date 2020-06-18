import React from "react";
import { Link } from "react-router-dom";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

import COV19 from "./static/cov19.jpg";
import headache from "./static/headache.jpg";
import flu from "./static/cold.jpg";
import fever from "./static/fever.jpg";
import stomachache from "./static/stomachache.jpg";

import "./style.css";

/* hot tags part in homepage*/
class HotTag extends React.Component{

  state = {
      /* Hot tags will be choosen from statistic data in the database. 
         The corresponding picture, link, etc will be first set by admin,
         then it will be saved in the database.
      */
      tags: [

        { img: COV19, name: "COV19", cols: 2, link: "./"},
        { img: fever, name: "fever", cols: 1, link: "./"},
        { img: headache, name: "headache", cols: 3, link: "./"},
        { img: flu, name: "flu", cols: 1, link: "./"},
        { img: stomachache, name: "stomachache", cols: 2, link: "./"}
    ]
  }

	render(){

		return (
    		<div className="HotTag">

    			<h3 className="hot_tags_title">Current Hot Tags</h3>

    			<GridList className="tags" cellHeight={100} cols={3}>

              {this.state.tags.map((tag) => (

                  <GridListTile key={tag.name} cols={tag.cols}>
                      <img className="img" src={tag.img} alt={tag.name} />
                      
                      <Link to={tag.link}>
                        <GridListTileBar className="tag_title" title={tag.name} />
                      </Link>
                  </GridListTile>
              ))}
        			
      			</GridList>     												
			</div>
  	);
	}
}

export default HotTag;