import React, { Component } from 'react';

class Label extends Component {
    state = {  }
    render() { 
        return ( 
            <label 
            className={this.props.className} 
            htmlFor={this.props.htmlFor}
            >
                {this.props.children}
                </label>
         );
    }
}
 
export default Label;