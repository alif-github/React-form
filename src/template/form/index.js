import React, { Component } from 'react';
import {Input, Label, Select} from '../../component';
import './style.css';

class Form extends Component {
    constructor(props) {
        super(props);
        //state init
        this.state = { 
            fullname: "",
            tanggalLahir: "",
            tempatLahir: "",
            gender: "",
            hobby: "",
            alamat: "",
            agama: "",
            umur: ""
         };
    }

    //handle, when user input. handle will callback and set State in this.state (using set).
    setValue = el => {
        const {umur, tanggalLahir} = this.state
        console.log([el.target.name]);
        console.log(el.target.value);
        console.log("a",el)
        this.setState({
            [el.target.name]: el.target.value
        })
        if (this.state.tanggalLahir != ""){
            console.log("BABANA", "masukkk")
            console.log(tanggalLahir)
            const umurx = new Date(tanggalLahir)
            const tahunIni= new Date()
            var age = tahunIni.getFullYear() - umurx.getFullYear();
            const umurs = age
            console.log("ini umur : ",umur)
            this.setState({
                umur: umurs
            })
        }
        console.log(this.state)
    }

    render() { 
        const {fullname, tanggalLahir, tempatLahir, gender, hobby, alamat, agama, umur} = this.state
        return (
                <div className="form">
                    <div className="field">
                        {/* Input Full user Name */}
                        <Label className="label" htmlFor="name">Nama :</Label>
                        <Input className="inputNama" type="text" name="fullname" onChange={this.setValue} id="nama" placeholder="Input Your Name..." />
                    </div>
                    <div className="infoBirth">
                        {/* Input Full tanggal lahir */}
                        <div className="field fieldBirth1">
                            <Label className="label" htmlFor="ttl">Tanggal Lahir :</Label>
                            <Input className="inputTtl" type="date" name="tanggalLahir" onChange={this.setValue} id="ttl" />
                        </div>
                        {/* Input Full tempat lahir */}
                        <div className="field fieldBirth2">
                            <Label className="label" htmlFor="tempatLahir">Tempat Lahir :</Label>
                            <Input className="inputTempat" type="text" name="tempatLahir" onChange={this.setValue} id="tempatLahir" placeholder="Cth.Jakarta" />
                        </div>
                    </div>
                    <div className="field">
                        <Label className="label" htmlFor="jenisKelamin">Jenis Kelamin : </Label>
                        <Input type="radio" id="male" className="jenisKelamin" name="gender" value="Male" onChange={this.setValue}/>
                        <Label className="jenisKelamin" htmlFor="male">Male</Label>
                        <Input type="radio" id="female" className="jenisKelamin" name="gender" value="Female" onChange={this.setValue}/>
                        <Label className="jenisKelamin" htmlFor="female">Female</Label>
                    </div>
                    <br></br>
                    <div className="field">
                        <Label className="label" htmlFor="hobby">Hobby : </Label>
                        <Input type="checkbox" id="hobby" className="hobby" name="hobby" value="Berenang" onChange={this.setValue}/>
                        <Label className="hobby" htmlFor="berenang"> Renang</Label>
                        <Input type="checkbox" id="hobby" className="hobby" name="hobby" value="Jogging" onChange={this.setValue}/>
                        <Label className="hobby" htmlFor="jogging"> Lari</Label>
                        <Input type="checkbox" id="hobby" className="hobby" name="hobby" value="Bersepeda" onChange={this.setValue}/>
                        <Label className="hobby" htmlFor="bersepeda"> Futsal</Label>
                    </div>
                    <br></br>
                    <div className="field">
                        <Label htmlFor="agama">Agama :</Label>
                        <Select name="agama" onChange={this.setValue} className="opsi-select form-select form-select-sm" aria-label=".form-select-sm example" id="agama" name="agama">
                            <option value="-">-</option>
                            <option value="Islam">Islam</option>
                            <option value="Kristen Protestan">Kristen Protestan</option>
                            <option value="Hindu">Hindu</option>
                            <option value="Budha">Budha</option>
                        </Select>
                    </div>
                    <div className="field">
                        <Label className="label" htmlFor="alamat">Alamat :</Label>
                        <Input className="inputAlamat" type="text" name="alamat" id="alamat" onChange={this.setValue} placeholder="Input Your Address" />
                    </div>
                    <button type="submit" onClick={() => this.props.save({fullname, tanggalLahir, tempatLahir, gender, hobby, alamat, agama, umur})} className="button" id="button" value="Submit" >Submit</button>
                </div>
         );
    }
}
 
export default Form;