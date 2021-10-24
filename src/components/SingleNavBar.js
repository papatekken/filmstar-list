import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {AppBar,Toolbar,Typography,Grid,Button} from '@material-ui/core';
class SingleNavBar extends Component {

    render() {
        return(
            <AppBar position="sticky">
              <Toolbar>
                <Grid container
                    spacing={0}
                    alignItems="center"
                    justify="left"
                >                        
                        <Grid item xs={6} >
                            <Typography variant="h6">
                                Film Stars Information Demo
                            </Typography>
                            <Typography variant="body1">
                                data source json:<a href="https://papatekken.github.io/json/filmStarData.json" >here</a>
                            </Typography>
                        </Grid>
             
                        <Grid item  xs={6}  align="right">
                            <Typography variant="h6">
                                <Link to={`/`}><Button variant="contained" color="secondary"> Back to List</Button></Link>
                            </Typography>
                        </Grid>    
                </Grid>    
              </Toolbar>
            </AppBar>        
     )
    }
    
}
export default SingleNavBar;