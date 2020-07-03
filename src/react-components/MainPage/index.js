import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Footer from './Footer';
import TopBar from '../TopBar';
import mask from "./static/mask.jpg";
import tam from "./static/Tam.jpg";
import quebec from "./static/quebec.jpg";
import ActiveUser from './ActiveUser';
import Topic from './Topic';


const useStyles = makeStyles((theme) => ({
    mainGrid: {
        marginTop: theme.spacing(3),
    },
}));

const mainFeaturedPost = {
    title: 'A single case could spark a new COVID-19 outbreak, Tam warns',
    description:
        "OTTAWA -- All it could take for Canada’s current COVID-19 progress to be thrown off course is a single new case that prompts an outbreak, Chief Public Health Officer Dr. Theresa Tam warned on Tuesday.",
    image: tam,
    imgText: 'Tam',
    index: "1",
};

const featuredPosts = [
    {
        title: 'Ontario will not make it mandatory to wear masks or face coverings',
        date: 'June 16',
        description:
            'As more businesses prepare to reopen their doors on Friday, the Ontario government says it will not make it mandatory to wear masks or face coverings—although they remain recommended by health officials.',
        image: mask,
        imageText: 'Mask',
        index: "2",
    },
    {
        title: 'Quebec reports fewer than 100 new COVID-19 cases for first time since March 22, but testing continues to plummet',
        date: 'June 16',
        description:
            'There are now 5,269 people who have died of COVID-19 in Quebec, health authorities announced Tuesday, as confirmed cases in the province reached 54,146.',
        image: quebec,
        imageText: 'Quebec',
        index: "3",
    },
];

const posts = [];


export default function MainPage(props){
    
    const classes = useStyles();
    

    return (
        <React.Fragment>
            <CssBaseline/>
            <TopBar user={props.match.params.user}/>
            <Container maxWidth="lg">
              <main>
                  <MainFeaturedPost post={mainFeaturedPost} user={props.match.params.user}/>
                  <Grid container spacing={6}>
                    <Topic user={props.match.params.user}/>
                  </Grid>

                  <Grid container spacing={4} className={classes.mainGrid}>
                      <Main title="Other News" posts={posts}/>
                  </Grid>
                  <Grid container spacing={4} className={classes.mainGrid}>
                      {featuredPosts.map((post) => (
                          <FeaturedPost key={post.title} post={post} user={props.match.params.user}/>
                      ))}
                      <ActiveUser/>
                  </Grid>
                  
              </main>
            </Container>
            <Footer title="Footer" description="Something here to give the footer a purpose!"/>
        </React.Fragment>
    );
};