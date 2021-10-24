import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Grid, Typography, ThemeProvider, createMuiTheme} from '@material-ui/core';

class CountryFilmStar extends Component {
    

    showFilmStars = () => {
        const filmStars = this.props.filmStars;
        if(filmStars ==null)
            return  (<></>)  
        if (filmStars.length === 0)
            return (<></>)  
                
        const countryTheme = createMuiTheme({
             typography: {
               
               subtitle1: {
                fontWeight: 600,
                display: "inline"
               },
               subtitle2: {
                display: "inline"
               },
             },

             
        })         
        
        return (
                <ThemeProvider theme={countryTheme}>
                <Grid container
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                        <Grid container
                            spacing={0}
                            alignItems="center"
                            justify="center"
                        >            
                        <Grid item   xs={12} lg={8 } style={{border: '2px solid #C0C0C0'}}>
                            <Typography variant="subtitle1">Film stars in same country:</Typography>
                            <Grid container
                                spacing={0}
                                alignItems="center"
                                justify="center"
                            >               
                            <React.Fragment>
                                {Object.keys(filmStars).map(filmStar =>(
                                <Grid item   xs={3} >
                                    <Link to={"/"+this.props.filmStars[filmStar].id}>
                                    <Typography variant="subtitle2">
                                        {this.props.filmStars[filmStar].shortName}
                                    </Typography>    
                                    </Link>   
                                </Grid>
                                ) )}
                            </React.Fragment>
                            </Grid>
                        </Grid>
                        </Grid>
                </Grid>
                 </ThemeProvider>
        )
    }
 
    render() { 
        return ( 
                <div classname="filmStar_list">
                    {this.showFilmStars() }
                </div>
         );
    }
}
export default CountryFilmStar;