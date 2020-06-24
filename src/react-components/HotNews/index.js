import React from "react";

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";
import Typography from '@material-ui/core/Typography';

import news from "./static/news.jpg";
import mask from "./static/mask.jpg";
import quebec from "./static/quebec.jpg";
import "./style.css";


/* hot news part in homepage*/
class HotNews extends React.Component{


    render(){
        return (
            <div className="HotNews">
                {/* Main News */}
                <Paper className="paper">
                    <Link className="button_link" to="" >
                        <Grid container direction="column" spacing={1}>
                            {/* img src */}
                            <Grid item>
                                <img className="news_img" src={news} alt="news"/>
                            </Grid>

                            {/* main news title */}
                            <Grid item>
                                <Typography variant="h6">
                                    "A single case could spark a
                                    new <br/> COVID-19 outbreak", Tam warns
                                </Typography>
                            </Grid>

                            {/* news src */}
                            <Grid item>
                                <Typography className="src" variant="subtitle2">
                                    From Rachel Aiello, <br/>
                                    Ottawa News Bureau Online Producer

                                </Typography>
                            </Grid>
                        </Grid>
                    </Link>
                </Paper>

                {/* Sub News */}
                <Paper className="subpaper">

                    {/* Link to sub news */}
                    <Link className="button_link" to="" >

                        <Grid container direction="column" spacing={1}>
                            {/* img src */}
                            <Grid item>
                                <img className="sub_img" src={mask} alt="sub"/>
                            </Grid>

                            {/* sub news title */}
                            <Grid item>
                                <h4 className="subtitle">
                                    Ontario will not make it mandatory to wear masks or face coverings
                                </h4>
                            </Grid>

                            {/* news src */}
                            <Grid item>
                                <h6 className="src">
                                    From Katherine DeClerq, <br/>
                                    Multi-Platform Writer, CTV News Toronto
                                </h6>
                            </Grid>


                        </Grid>
                    </Link>
                </Paper>

                {/* Sub News */}
                <Paper className="subpaper">

                    {/* Link to sub news */}
                    <Link className="button_link" to="" >

                        <Grid container direction="column" spacing={1}>
                            {/* img src */}
                            <Grid item>
                                <img className="sub_img" src={quebec} alt="sub"/>
                            </Grid>

                            {/* sub news title */}
                            <Grid item>
                                <h4 className="subtitle">
                                    Quebec reports fewer than 100 new COVID-19 cases for first time since March 22,
                                    but testing continues to plummet
                                </h4>
                            </Grid>

                            {/* news src */}
                            <Grid item>
                                <h6 className="src">
                                    From Basem Boshra, <br/>
                                    CTV News Montreal Supervising Digital Producer
                                </h6>
                            </Grid>

                        </Grid>
                    </Link>
                </Paper>

            </div>
        );
    }
}

export default HotNews;