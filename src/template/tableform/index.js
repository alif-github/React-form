import React, { Component } from 'react';
import './style.css';

class TableForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            users:[]
         }
    }
    render() { 
        return (
            <table id="customers" cellSpacing="0" border="1">
                <tr>
                    <th colSpan="2">Cari:</th>
                    <th colSpan="7">
                        <input type="text" id="inputFind" onKeyUp="findPerson()" placeholder="Search for names.."
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
                <tbody className="bodyFillTable" id="bodyTable">
                    {
                        this.props.users.map((user, idx) => {
                            console.log(user)
                            return (
                                <tr key={idx}>
                                    <td>{idx + 1}</td>
                                    <td>{user.fullname}</td>
                                    <td>{user.tempatLahir}, {user.tanggalLahir}</td>
                                    <td>{user.umur}</td>
                                    <td>{user.gender}</td>
                                    <td>{user.hobby}</td>
                                    <td>{user.agama}</td>
                                    <td>{user.alamat}</td>
                                    <td>
                                        <button class="buttonedit" type="button" onclick="editClicked(${people[j].id})">
                                            Edit
                                        </button>
                                        <button class="buttondelete" type="button" onclick="deleteClicked(${people[j].id})">
                                            delete
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
         );
    }
}
 
export default TableForm;