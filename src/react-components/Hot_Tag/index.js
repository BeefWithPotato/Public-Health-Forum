import React from "react";
import { Link } from "react-router-dom";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

import COV19 from "./static/cov19.jpg"
import headache from "./static/headache.jpg"
import flu from "./static/cold.jpg"
import fever from "./static/fever.jpg"
import stomachache from "./static/stomachache.jpg"

import "./style.css";


class Hot_Tag extends React.Component{

	render(){

		return (
    		<div className="Hot_Tag">

    			<h3 className="hot_tags_title">Current Hot Tags</h3>

    			<GridList className="tags" cellHeight={100} cols={3}>

        			<GridListTile className="img" key={COV19} cols={2 || 1}>
            			<img src={COV19} alt="COV19" />
            			
            			{/* link to COV-19 tag posts */}
            			<Link to={"./"}>
            				  <GridListTileBar className="tag_title" title="COV-19"/>
            			</Link>
          			</GridListTile>

                <GridListTile className="img" cols={1 || 1}>
                  <img src={fever} alt="fever" />

                  {/* link to Fever tag posts */}
                  <Link to={"./Home_Page"}>
                      <GridListTileBar className="tag_title" title="Fever"/>
                  </Link>
                </GridListTile>

          			<GridListTile className="img" key={headache} cols={3 || 1}>
            			<img src={headache} alt="headache" />

            			{/* link to Headache tag posts */}
            			<Link to={"./Welcome_Page"}>
            				  <GridListTileBar className="tag_title" title="Headache" />
            			</Link>
          			</GridListTile>

                <GridListTile className="img" key={flu} cols={1 || 1}>
                  <img src={flu} alt="flu" />

                  {/* link to Flu tag posts */}
                  <Link to={"./Welcome_Page"}>
                      <GridListTileBar className="tag_title" title="Flu" />
                  </Link>
                </GridListTile>

                <GridListTile className="img" cols={2 || 1}>
                  <img src={stomachache} alt="stomachache" />
                  {/* link to Fever tag posts */}
                  <Link to={"./Welcome_Page"}>
                      <GridListTileBar className="tag_title" title="Stomachache" />
                  </Link>
                </GridListTile>

          			
      			</GridList>
    			
        												
			</div>
  		);
	}
}

export default Hot_Tag;