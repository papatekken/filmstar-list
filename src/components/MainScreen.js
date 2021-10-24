import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { withRouter } from "react-router-dom";
import List from './List';
import FilmStar from './FilmStar';
import axios from 'axios';


class MainScreen extends Component {
    state = {  
        filmStars: [],
        
    }
 
    componentDidMount() {
        this.getFilmStars();
    }

    getFilmStars = () => {
        axios.get(`https://papatekken.github.io/json/filmStarData.json`)
             .then( res => {
                 this.setState({
                     filmStars: res.data
                 }) 
             })
    }    
    
    
    render() { 
        
        return (
        
            <BrowserRouter>        
                <Switch>
                    <Route exact path="/">
                        <List filmStars={this.state.filmStars}/>
                    </Route>

                    <Route  path="/:filmStarId" render={ (props) => {
                        let fID = props.location.pathname.split('/');
                        let displayFilmStar = this.state.filmStars.filter(function(item){ return item.id === fID[1]; });
                        return(
                            <FilmStar 
                               allFilmStars = {this.state.filmStars} displayFilmStar = {displayFilmStar}
                            />
                        )                        
                    }}>
                       
                    </Route>                    
                </Switch>
            </BrowserRouter>
        )
    }
}

export default withRouter(MainScreen);