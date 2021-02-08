import React, { Component } from 'react';
import "./style.css";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
                <h3 className="header">Data Masyarakat Kp. Padepokan Bango</h3>
            </>
         );
    }
}
 
export default Header;