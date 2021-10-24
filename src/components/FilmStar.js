import React, { Component } from 'react';
import CountryFilmStar from './CountryFilmStar';
import SingleNavBar from './SingleNavBar';
import ChartBar from './ChartBar';
import {Grid, Typography, ThemeProvider, createMuiTheme} from '@material-ui/core';


class FilmStar  extends Component{
    
    formatData(inData){
		let outDataSet = [];
		let outData = [];        
        let i;
        for (i = 0; i < inData.length; i++) {
            outData=[];
            outData['year']= inData[i][0];
            outData['publications']= inData[i][1];
            outDataSet.push(outData);
        }

        return outDataSet;
    }

    
    showFilmStar = () => {

        const filmStars = this.props.allFilmStars;
        const displayFilmStar = this.props.displayFilmStar;
        
        const countryfilmStars = filmStars.filter(function(item){
            return item.country === displayFilmStar[0].country && item.id!== displayFilmStar[0].id;
        }); 
        
        const detailTheme = createMuiTheme({
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
        return(
         
            displayFilmStar.map(filmStar =>( 
                <>
                <ThemeProvider theme={detailTheme}>
                <Grid container
                    id = "filmStarContainer"
                    direction="column"
                    justify="center"
                    alignItems="stretch"
                >                
                    <Grid container 
                        spacing={0}
                        alignItems="center"
                        justify="center"
                        
                    >                
                        <Grid item xs={12} lg={4}   >
                            <Grid container 
                                spacing={0}
                                alignItems="center"
                                justify="center"
                                
                            >                                
                        
                                <Grid item   xs={12}  >
                                <Typography variant="subtitle2">
                                ID :
                                </Typography>
                                <Typography variant="subtitle1">
                                {filmStar.id}
                                </Typography>
                                </Grid>
                                <Grid item   xs={12}  >
                                <Typography variant="subtitle2">
                                Short Name :
                                </Typography>
                                <Typography variant="subtitle1">
                                {filmStar.shortName}
                                </Typography>
                                </Grid>                                
                                <Grid item   xs={12}  >
                                <Typography variant="subtitle2">
                                Full Name :
                                </Typography>
                                <Typography variant="subtitle1">
                                {filmStar.fullName}
                                </Typography>
                                </Grid>                                
                                <Grid item   xs={12}  >
                                <Typography variant="subtitle2">
                                Gender :
                                </Typography>
                                <Typography variant="subtitle1">
                                {filmStar.gender}
                                </Typography>
                                </Grid>  
                                <Grid item   xs={12}  >
                                <Typography variant="subtitle2">
                                Country :
                                </Typography>
                                <Typography variant="subtitle1">
                                {filmStar.country}
                                </Typography>
                                </Grid>      
                                <Grid item  xs={6}>
                                <Typography variant="subtitle2">
                                With Beard?
                                </Typography>
                                <Typography variant="subtitle1">
                                {JSON.stringify(filmStar.features.withBeard)}
                                </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                  <Typography variant="subtitle2">
                                Total Awards:
                                </Typography>
                                <Typography variant="subtitle1">
                                {filmStar.numAward}
                                </Typography>
                                </Grid>  
                                <Grid item  xs={6}>
                                <Typography variant="subtitle2">
                                With Glasses?
                                </Typography>
                                <Typography variant="subtitle1">
                                {JSON.stringify(filmStar.features.wearGlasses)}
                                </Typography>                              

                                </Grid>
                                <Grid item xs={6}>
                                <Typography variant="subtitle2">
                                Total netWorth:
                                </Typography>
                                <Typography variant="subtitle1">
                                {filmStar.netWorth}
                                </Typography>
                                </Grid>                                    
                            </Grid>    
                        </Grid>
                        <Grid item   xs={12} lg={4}  >
                            <Grid container 
                                spacing={0}
                                alignItems="center"
                                justify="center"
                                
                            >                                
                        
                                <Grid item   xs={12}  >                        
                                    <img src={process.env.PUBLIC_URL + '/img/' +filmStar.image} width="150" height="150" alt="FilmStar"/>
                                </Grid>                                  
                            </Grid>                                      
                        </Grid>
                        <Grid item   xs={6} lg={8} >
                            <ChartBar inData={this.formatData(filmStar.totalFilms)}/>
                        </Grid>                                            
                        
                        <Grid item   xs={12} lg={8 } style={{border: '2px solid #C0C0C0'}}>
                            <Typography variant="subtitle1">
                            <div>
                            Description:
                            </div>
                            </Typography>
                            <Typography variant="body1">
                            {filmStar.description}
                            </Typography>
                        </Grid>    
       
                    </Grid>
                </Grid>
                </ThemeProvider>
                <CountryFilmStar filmStars={countryfilmStars}/>
                </>    
            ))             
            
        
        
        )
    }
    render() { 
     

        return (
            

            <div classname="filmStar_list">
                <SingleNavBar />
                {this.showFilmStar() }
                
            </div>            
         
        )
    }
}

export default FilmStar;