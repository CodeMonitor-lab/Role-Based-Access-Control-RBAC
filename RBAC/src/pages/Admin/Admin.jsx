import React, { useState } from "react";
import Styles from '../../Styles/Admin.module.css'
import {useNavigate } from "react-router-dom";

const AdminData = {
    email:"testing@gmail.com",
    password:"testing@123"
}

const Admin = () =>{
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const navigate = useNavigate();

    const HandleOnAdminLogin = (event) =>{
        event.preventDefault();
        if(email === AdminData.email && password  === AdminData.password){
              alert("Login Sucessfull");
              navigate('/Admin/Dashboard')
        }
        if(email !== AdminData.email){
            alert(('Email Not match'))
        }
    }

    return(
        <>
        <main className={Styles.AdminLogin_Container}>
            <section className={Styles.Login_Section}>
                <h1 className={Styles.heading} >Admin Login</h1>
                <form onSubmit={HandleOnAdminLogin} className={Styles.Login_form}>
                    <input value={email} onChange={((event =>setEmail(event.target.value)))} type="email" name="email" placeholder="Email"/>
                    <input value={password} onChange={((event)=>setPassword(event.target.value))} type="password" name="password" placeholder="Password"/>
                    <button className={Styles.LoginBtn} type="submit">Login</button>
                </form>
            </section>
        </main>
        </>
    )
}
export default Admin;