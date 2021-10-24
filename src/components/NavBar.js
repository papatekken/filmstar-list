import React, { Component, createRef } from 'react';
import DropDown from './DropDown';
import {AppBar,Toolbar,Typography,Grid, TextField} from '@material-ui/core';
class NavBar extends Component {
    
      constructor(props) {
        super(props);
        this.textRef = createRef();
      }    
    updateFilter = () => {
        this.props.filterList("searchText", this.textRef.current.value);   
        
    }    
    render() {
        return(
            <AppBar position="sticky">
              <Toolbar>
                    <Grid container
                        spacing={0}
                        alignItems="center"
                        justify="left"
                    >                
                        <Grid item  xs={12} lg={3}>
                            <Typography variant="h6">
                                Film Stars Information Demo
                            </Typography>
                            <Typography variant="body1">
                                data source json:<a href="https://papatekken.github.io/json/filmStarData.json" >here</a>
                            </Typography>                            
                        </Grid>
                        <Grid item  xs={12} lg={2}>
                            <Typography variant="subtitle1">
                                With Beard: <DropDown id={"filterWithBeard"} handleCheckboxChange={this.props.filterList} updateAction={"allowWithBeard"}/>
                            </Typography>
                        </Grid>
                        <Grid item  xs={12} lg={2}>
                            <Typography variant="subtitle1">
                                Wear Glasses: <DropDown id={"filterWearGlasses"} handleCheckboxChange={this.props.filterList}  updateAction={"allowWearGlasses"}/>
                            </Typography>          
                        </Grid>
                        <Grid item  xs={12} lg={5}>
                            <Typography variant="subtitle1" display="inline">
                                Name: 
                            </Typography>
                            
                                <TextField id="filterShortName" label="" size="small"  onChange={this.updateFilter} inputRef={this.textRef} />
                            
                        </Grid>    
                    </Grid>    
              </Toolbar>
            </AppBar>        
     )
    }
    
}
export default NavBar;