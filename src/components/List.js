import React, { Component } from 'react';
import ListItemFilmStar from './ListItemFilmStar';
import NavBar from './NavBar';
import {Box, Grid, Typography} from '@material-ui/core';

class List  extends Component{
    state = {  
        allowWithBeard : 'both',
        allowWearGlasses : 'both',
        searchText : '',
    }    
  
    filterList= (statename, value)=>{
        if(statename==='allowWithBeard'){
             this.setState({allowWithBeard: value}) ;
        }
        if(statename==='allowWearGlasses')
                 this.setState({allowWearGlasses:value}); 
        if(statename==='searchText'){
                 this.setState({searchText:value});          
        }
    }

    showFilmStars = () => {
        const filmStars = this.props.filmStars;
        let rowCount = 1;
            
        if (filmStars.length === 0)
            return (<></>)       
        return (
            <>
                
                <Grid container
                    id = "filmStarContainer"
                    direction="column"
                    justify="center"
                    alignItems="stretch"
                >
                    <Box display={{ xs: 'none', lg: 'block' }} style={{ backgroundColor: "#000",color:"#FFF"}}>
                    <Grid container  
                        style={{ backgroundColor: "#000",color:"#FFF"}}
                        spacing={0}
                        alignItems="center"
                        justify="center"
                    >
                        <Grid item   lg={2} > 
                            <Typography variant="h6">
                                Short Name
                             </Typography>   
                        </Grid>   
                        <Grid item   lg={2} >
                            <Typography variant="h6">
                                Country
                            </Typography>       
                        </Grid>
                        <Grid item   lg={2} >
                            <Typography variant="h6">
                                With Beard
                            </Typography>       
                        </Grid>
                        <Grid item   lg={2} >
                            <Typography variant="h6">
                                Wear Glasses
                            </Typography>       
                        </Grid>
                        <Grid item   lg={2} display={{ xs: 'none', lg: 'block'}}>
                            <Typography variant="h6">
                                Image
                            </Typography>       
                        </Grid>    
                        <Grid item  lg={2}  >
                        </Grid>    

                    </Grid>                    
                    </Box>
                    <React.Fragment>
                        {Object.keys(filmStars).map(filmStar =>(
                            <ListItemFilmStar info={this.props.filmStars[filmStar]} allowWithBeard={this.state.allowWithBeard} allowWearGlasses={this.state.allowWearGlasses} searchText={this.state.searchText} rowCount={rowCount++} />
                        ) )}
                    </React.Fragment>
                </Grid>
            </>
        )
    }
 
    render() { 
        return ( 
                <div classname="filmStar_list">
                    <NavBar filterList={this.filterList}/>
                    {this.showFilmStars() }
                </div>
 
 
         );
    }
}

export default List;