import React, { Component } from 'react';
import {Header,Form, TableForm, Paggination} from './template'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      users:[]
     }
  }

  //handle button to send it the user input
  save = user => {
    console.log(this.state);
    const {fullname, tanggalLahir, tempatLahir, gender, hobby, alamat, agama, umur} = user
    let newUsers = this.state.users
    newUsers.push({
        fullname, tanggalLahir, tempatLahir, gender, hobby, alamat, agama, umur
    })
    if(
        //validation success
        //that is condition 'if' , if state fill in (good)
        user.fullname != "" && 
        user.tanggalLahir != "" &&
        user.tempatLahir != "" &&
        user.agama != ""
        ) {
        alert('Success Added: ' + user.fullname + ' , Thank you for fullfill this form!');
        console.log(this.state.users);
        this.setState({
            users: newUsers
        })
    } else {
        //validation not success
        //if the state still empty or user not full fill perfectly
        alert('Please fill all form data')
        console.log(this.state);
    }
}

  render() { 
    return ( 
      <>
      <Header/>
      <Form save={this.save}/>
      <TableForm users={this.state.users}/>
      <Paggination/>
    </>
     );
  }
}
 
export default App;
