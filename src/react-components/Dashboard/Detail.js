import React from "react";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


class Detail extends React.Component{

	render(){
    const {gender, phone, email, address} = this.props;
		return (
        <span>
        		<Typography color="textSecondary" variant="h6">
                <Grid container spacing={10}>
                    <Grid item>
                        Gender: {gender}
                    </Grid>                      
                    <Grid item>
                        Phone: {phone}
                    </Grid>
                </Grid>
            </Typography>
            <Typography color="textSecondary" variant="h6">
                <Grid container spacing={10}>
                    <Grid item>
                        Email: {email}
                    </Grid>                      
                    <Grid item>
                        Address: {address}
                    </Grid>
                </Grid>
            </Typography>
        </span>
  	);
	}
}

export default Detail;