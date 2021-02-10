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
            hobby: [],
            alamat: "",
            agama: "",
            umur: "",
            update: false
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
            let umurx = new Date(tanggalLahir)
            let tahunIni= new Date()
            let year = 0
            if (umurx.getMonth() < tahunIni.getMonth()) {
                console.log('masuk perhitungan bulan')
                year = 1
            }
            else if ((umurx.getMonth() === tahunIni.getMonth()) && umurx.getDate() < tahunIni.getDate()) {
                console.log('masuk perhitungan hari dan bulan')
                year = 1;
            } 
            var age = tahunIni.getFullYear() - umurx.getFullYear() - year;

            this.setState({
                umur: age
            })
        }
        console.log(this.state)
    }

    setHobby = el => {
        
        let index = -1
        if (el.target.checked === true) {
            let tempHobby = this.state.hobby
            console.log("ini hobby test", tempHobby)
            index = tempHobby.indexOf(el.target.value)
            console.log("ini array hobby",tempHobby)
            if (index < 0) {
                this.state.hobby.push(el.target.value)
            }
            let indexing = tempHobby.indexOf(el.target.value)
            console.log("ini index nya yang baru masuk", indexing)
        } else {
            let tempHobby2 = this.state.hobby
            index = tempHobby2.indexOf(el.target.value)
            if (index >= 0) {
                tempHobby2.splice(index, 1)
            }
        }
        console.log("testing : ",this.state)
    }

    render() {
        console.log(this.props.edit)

        const prop = this.props.edit

        if ("fullname" in this.props.edit) {
            this.setState({
                fullname: prop.fullname,
                tanggalLahir: prop.tanggalLahir,
                tempatLahir: prop.tempatLahir,
                gender: prop.gender,
                hobby: prop.hobby,
                alamat: prop.alamat,
                agama: prop.agama,
                umur: prop.umur
            })
            this.props.reset()
        }

        const {fullname, tanggalLahir, tempatLahir, gender, hobby, alamat, agama, umur} = this.state
        return (
                <div className="form">
                    <div className="field">
                        {/* Input Full user Name */}
                        <Label className="label" htmlFor="name">Nama :</Label>
                        <Input className="inputNama" value={this.state.fullname} type="text" name="fullname" onChange={this.setValue} id="nama" placeholder="Input Your Name..." />
                    </div>
                    <div className="infoBirth">
                        {/* Input Full tanggal lahir */}
                        <div className="field fieldBirth1">
                            <Label className="label" htmlFor="ttl">Tanggal Lahir :</Label>
                            <Input className="inputTtl" value={this.props.edit.tanggalLahir} type="date" name="tanggalLahir" onChange={this.setValue} id="ttl" />
                        </div>
                        {/* Input Full tempat lahir */}
                        <div className="field fieldBirth2">
                            <Label className="label" htmlFor="tempatLahir">Tempat Lahir :</Label>
                            <Input className="inputTempat" value={this.props.edit.tempatLahir} type="text" name="tempatLahir" onChange={this.setValue} id="tempatLahir" placeholder="Cth.Jakarta" />
                        </div>
                    </div>
                    <div className="field">
                        <Label className="label" htmlFor="jenisKelamin">Jenis Kelamin : </Label>
                        <Input type="radio" id="male" className="jenisKelamin" name="gender" value="Male" onChange={this.setValue} checked={gender==="Male"?"check"}/>
                        <Label className="jenisKelamin" htmlFor="male">Male</Label>
                        <Input type="radio" id="female" className="jenisKelamin" name="gender" value="Female" onChange={this.setValue}/>
                        <Label className="jenisKelamin" htmlFor="female">Female</Label>
                    </div>
                    <br></br>
                    <div className="field">
                        <Label className="label" htmlFor="hobby">Hobby : </Label>
                        <Input type="checkbox" id="hobby" className="hobby" name="hobby" value="Berenang" onChange={this.setHobby}/>
                        <Label className="hobby" htmlFor="berenang"> Renang</Label>
                        <Input type="checkbox" id="hobby" className="hobby" name="hobby" value="Jogging" onChange={this.setHobby}/>
                        <Label className="hobby" htmlFor="jogging"> Lari</Label>
                        <Input type="checkbox" id="hobby" className="hobby" name="hobby" value="Bersepeda" onChange={this.setHobby}/>
                        <Label className="hobby" htmlFor="bersepeda">Bike</Label>
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