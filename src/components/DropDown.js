import React, { Component } from 'react';

class DropDown extends Component {
    
    updateFilter = () => {
    this.props.handleCheckboxChange(this.props.updateAction, this.dropdown.value);   
    }
    render() {
        
        return(
        
        <select id={this.props.id} onChange={this.updateFilter}  ref={(ref) => this.dropdown = ref} >
           <option value="both">Both</option>
           <option value="true">Yes</option>
           <option value="false">No</option>
        </select> 
     )
    }
    
}
export default DropDown;