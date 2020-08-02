import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    card: {
        display: 'flex',
    },
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        width: 240,
    },
});

export default function FeaturedPost(props) {
    const classes = useStyles();
    const {post, user} = props;

    return (
        <Grid item xs={12} md={4}>
            <CardActionArea href={"/news/" + post.index + "/" + post.title + "/" + user}>
                <CardMedia
                    component="img"
                    className={classes.cardMedia}
                    image={post.image}
                    title={post.imageTitle}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {post.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        {post.date}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {post.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Grid>
    );
}

FeaturedPost.propTypes = {
    post: PropTypes.object,
};