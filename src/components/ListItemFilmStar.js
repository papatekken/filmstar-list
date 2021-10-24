import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Button, Grid, Box, Typography, ThemeProvider, createMuiTheme} from '@material-ui/core';
class ListItemFilmStar extends Component {
    

    

    render() {
         const listTheme = createMuiTheme({
             typography: {
               
               subtitle2: {
                fontWeight: 600,
                display: "inline"
               },

             }
        })            
        const {id,shortName, image,country,features} = this.props.info;
        if(this.props.allowWithBeard!=="both" && this.props.allowWithBeard!== JSON.stringify(features.withBeard)) return(<></>);
        if(this.props.allowWearGlasses!=="both" && this.props.allowWearGlasses!== JSON.stringify(features.wearGlasses)) return(<></>);
        if(this.props.searchText.length>0 && shortName.toUpperCase().indexOf(this.props.searchText.toUpperCase())<0)return(<></>);
        let gridrow="";
        if(this.props.rowCount%2 === 0)
            gridrow="#FFF";
        else
            gridrow = "#DCDCDC";
        
       const imagestyles = {
            border: '5px solid #000', 
       };        
        
        return ( 
            <ThemeProvider theme={listTheme}>
            <Grid container
                style={{ backgroundColor: gridrow }}
                spacing={0}
                alignItems="center"
                justify="center"
            >
                <Grid item  xs={12} lg={2}>
                    <Box component="span" display={{ xs: 'inline', lg: 'none' }} >
                        <Typography variant="subtitle2">
                            Short Name: 
                         </Typography>                       
                    </Box>
                    <Typography  variant="body1">
                        {shortName}
                    </Typography>                           
                </Grid>   
                <Grid item  xs={12} lg={2}>
                    <Box component="span" display={{ xs: 'inline', lg: 'none' }} >
                        <Typography variant="subtitle2">
                            Country: 
                         </Typography>                       
                    </Box>                
                    <Typography  variant="body1">
                    {country}
                    </Typography>   
                </Grid>
                <Grid item  xs={12} lg={2}>
                    <Box component="span" display={{ xs: 'inline', lg: 'none' }} >
                        <Typography variant="subtitle2">
                            With Beard: 
                         </Typography>                       
                    </Box>                
                    <Typography  variant="body1">
                    {JSON.stringify(features.withBeard)}
                    </Typography>   
                </Grid>
                <Grid item  xs={12} lg={2}>
                    <Box component="span" display={{ xs: 'inline', lg: 'none' }} >
                        <Typography variant="subtitle2">
                            Wear Glasses: 
                         </Typography>                       
                    </Box>                
                    <Typography  variant="body1">
                    {JSON.stringify(features.wearGlasses)}
                    </Typography>   
                </Grid>
                <Grid item  xs={12} lg={2}>
                    <Box component="span" display={{ xs: 'inline', lg: 'none' }} >
                        <Typography variant="subtitle2">
                            Image: 
                         </Typography>                       
                    </Box>                
                    <img src={process.env.PUBLIC_URL + '/img/'+image} style={imagestyles} width="150" height="150" alt="FilmStar" />
                </Grid>    
                <Grid item  xs={12} lg={2}>
                <Link to={`/${id}`}>
                <Button variant="contained" color="primary">
                    <Typography  variant="body1">
                        Detail
                    </Typography>       
                </Button>
                  </Link>                
                </Grid>    

            </Grid>
            </ThemeProvider>
         );
    }
}
export default ListItemFilmStar;