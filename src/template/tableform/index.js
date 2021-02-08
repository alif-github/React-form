import React, { Component } from 'react';
import './style.css';

class TableForm extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <> 
                <table id="customers" cellspacing="0" border="1">
                    <tr>
                        <th colspan="2">Cari:</th>
                        <th colspan="7">
                            <input type="text" id="inputFind" onkeyup="findPerson()" placeholder="Search for names.."
                                title="Type in a name" />
                        </th>
                    </tr>
                    <tr>
                        <th className="tNumber">ID</th>
                        <th className="tText">Nama</th>
                        <th className="tText">Tempat Lahir</th>
                        <th className="tNumber">Umur</th>
                        <th className="tText">Gender</th>
                        <th className="tText">Hobby</th>
                        <th className="tText">Agama</th>
                        <th className="tText">Alamat</th>
                        <th className="tAction">Action</th>
                    </tr>
                    <tbody className="bodyFillTable" id="bodyTable"></tbody>
                </table>
            </>
         );
    }
}
 
export default TableForm;