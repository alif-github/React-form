import React, { Component } from 'react';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <input 
            className={this.props.className} 
            type={this.props.type} 
            name={this.props.name} 
            onChange={this.props.onChange} 
            id={this.props.id}
            value={this.props.value} 
            placeholder={this.props.placeholder}
            checked={this.props.checked} 
            /> 
         );
    }
}
 
export default Input;