import React, { Component } from 'react';
import {Header,Form, TableForm, Paggination} from './template'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      users:[
        {
          fullname: "Alif",
          tanggalLahir: "2020-11-12",
          tempatLahir: "Jakarta",
          gender: "Male",
          hobby: [
            "berenang"
          ],
          alamat: "Bekasi",
          agama: "Islam",
          umur: "21",
        }
      ],
      editPeople:{},
      toggleChange: 0,
      index: ""
     }
  }

  //handle button to send it the user input
  save = user => {
    console.log(this.state);
    const {fullname, tanggalLahir, tempatLahir, gender, hobby, alamat, agama, umur} = user
    let newUsers = this.state.users

    if (this.state.toggleChange === 0) {
      console.log("ini submit")
      if(
        //validation success
        //that is condition 'if' , if state fill in (good)
        user.fullname !== "" && 
        user.tanggalLahir !== "" &&
        user.tempatLahir !== "" &&
        user.agama !== ""
        ) {
          alert('Success Added: ' + user.fullname + ' , Thank you for fullfill this form!');
          newUsers.push({
            fullname, tanggalLahir, tempatLahir, gender, hobby, alamat, agama, umur
        })
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
     else {
      console.log("ini edit")
       let idx = this.state.index
       newUsers[idx].fullname = fullname;
       newUsers[idx].tanggalLahir = tanggalLahir;
       newUsers[idx].tempatLahir = tempatLahir;
       newUsers[idx].gender = gender;
       newUsers[idx].hobby = hobby;
       newUsers[idx].alamat = alamat;
       newUsers[idx].agama = agama;
       newUsers[idx].umur = umur;
       this.setState({
         user: newUsers,
         toggleChange: 0
       })
    }
  }
  
      
  delete = (index) => {
    let newPeople = this.state.users
    newPeople.splice(index,1)
    this.setState({
      users: newPeople
    })
  }

  update = (index) => {
    let newPeople = this.state.users[index]
    console.log("masuk",index)
    this.setState({
      editPeople: newPeople,
      toggleChange: 1,
      index: index
    })
    console.log("cek", this.state.editPeople)
  }

  reset = () => {
    this.setState({
      editPeople: {}
    })
  }

  render() { 
    return (
      <>
      <Header/>
      <Form save={this.save} edit={this.state.editPeople} reset={this.reset}/>
      <TableForm needindex={this.delete} update={this.update} users={this.state.users}/>
      <Paggination/>
    </>
     );
  }
}
 
export default App;
