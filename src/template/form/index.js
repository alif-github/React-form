import React, { Component } from 'react';
import './style.css';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <>
                <div className="form">
                    <div className="field">
                        <label className="label" for="name">Nama :</label>
                        <input className="inputNama" type="text" id="nama" placeholder="Input Your Name..." />
                    </div>
                    <div className="infoBirth">
                        <div className="field fieldBirth1">
                            <label className="label" for="ttl">Tanggal Lahir :</label>
                            <input className="inputTtl" type="date" id="ttl" />
                        </div>
                        <div className="field fieldBirth2">
                            <label class="label" for="tempatLahir">Tempat Lahir :</label>
                            <input class="inputTempat" type="text" id="tempatLahir" placeholder="Cth.Jakarta" />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label" for="jenisKelamin">Jenis Kelamin : </label>
                        <input type="radio" id="male" className="jenisKelamin" name="gender" value="Male" />
                        <label className="jenisKelamin" for="male">Male</label>
                        <input type="radio" id="female" className="jenisKelamin" name="gender" value="Female" />
                        <label className="jenisKelamin" for="female">Female</label>
                    </div>
                    <br></br>
                    <div class="field">
                        <label className="label" for="hobby">Hobby : </label>
                        <input type="checkbox" id="hobby" className="hobby" value="Berenang" />
                        <label className="hobby" for="berenang"> Renang</label>
                        <input type="checkbox" id="hobby" className="hobby" value="Jogging" />
                        <label className="hobby" for="jogging"> Lari</label>
                        <input type="checkbox" id="hobby" className="hobby" value="Bersepeda" />
                        <label className="hobby" for="bersepeda"> Futsal</label>
                    </div>
                    <br></br>
                    <div className="field">
                        <label for="agama">Agama :</label>
                        <select className="opsi-select form-select form-select-sm" aria-label=".form-select-sm example" name="agama"
                            id="agama">
                            <option value="-">-</option>
                            <option value="Islam">Islam</option>
                            <option value="Kristen Protestan">Kristen Protestan</option>
                            <option value="Hindu">Hindu</option>
                            <option value="Budha">Budha</option>
                        </select>
                    </div>
                    <div className="field">
                        <label className="label" for="alamat">Alamat :</label>
                        <input className="inputAlamat" type="text" id="alamat" placeholder="Input Your Address" />
                    </div>
                    <button className="button" id="button" onclick="handleButton()">Submit</button>
                </div>
            </>
         );
    }
}
 
export default Form;