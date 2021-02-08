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
                    <a href="#" className="page" id="previous" onclick="prevPage();return false"></a>
                    <a href="#" className="page" id="nowPage"></a>
                    <a href="#" className="page" id="next" onclick="nextPage();return false"></a>
                    | page : <span id="page"></span>
                </div>
            </>
         );
    }
}
 
export default Paggination;