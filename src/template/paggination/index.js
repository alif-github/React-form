import React, { Component } from 'react';
import './style.css';

class Paggination extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <> 
                <div className="pagination">
                    <a href="#" className="page" id="previous"></a>
                    <a href="#" className="page" id="nowPage"></a>
                    <a href="#" className="page" id="next"></a>
                    | page : <span id="page"></span>
                </div>
            </>
         );
    }
}
 
export default Paggination;