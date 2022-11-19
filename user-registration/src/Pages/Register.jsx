import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [cnfPassword, setCnfPassword] = useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        var words=email.split('@');
        words=words.map((item)=>{return item.split(".")});
        var emailWords=[].concat(...words)
        console.log(emailWords);

        if(phone.length===10 && password.length>=8 && cnfPassword>=8 && password===cnfPassword && emailWords.length>=3 && password!==words.map((ele)=>{return ele})){
        axios.post('http://localhost:8080/user', {
        'id':Math.floor(Math.random()*1000000),    
        'name':name,
        'email':email,
        'phone':phone,
        'password':password
          })
          .then(function (response) {
            setName("");
            setEmail("");
            setPhone("");
            setPassword("");
            setCnfPassword("");
            alert("User Registered");
            console.log(response);
          })
        
        }else if(phone.length!==10){
            alert("input valid phone number")
        }else if(password.length < 8 || cnfPassword < 8){
            alert('passwords should be atleast of eight characters');
        }
        else if(emailWords.length<3 || emailWords[emailWords.length-1]==="com" || emailWords[emailWords.length-1]==="in" || emailWords[emailWords.length-1]==="net" || emailWords[emailWords.length-1]==="ai"){
            alert(" input vaild email")
        }else if(password!==cnfPassword){
            alert("passwords dont match please re enter the passwords");
        }
    }
  return (
    <div className='form-container'>
        <form className='inputForm' onSubmit={handleSubmit}>
            <input type="text" placeholder='Enter Name' value={name} onChange={(e)=>setName(e.target.value)}/>
            <input type="email" placeholder='Enter Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input type="text" placeholder='Enter Phone Number' value={phone} onChange={(e)=>setPhone(e.target.value)}/>
            <input type="password" placeholder='Enter Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <input type="password" placeholder='Confirm Password'  value={cnfPassword} onChange={(e)=>setCnfPassword(e.target.value)}/>
            <input type="submit" value="Add User" />
        </form>   
    </div>
  )
}

export default Register