import React, { Component } from 'react';

class Select extends Component {
    state = {  }
    render() { 
        return ( 
            <select 
            value={this.props.value} 
            onChange={this.props.onChange} 
            className={this.props.className}
            id={this.props.id} 
            name={this.props.name}>
                {this.props.children}
            </select>
         );
    }
}
 
export default Select;