import './register.css';
import chicken from '../Food_img/pizzabackground.png'
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { useState } from 'react';
import { toast } from 'react-toastify';


export default function Register({ setHome }) {
    const [password, setPassword] = useState(false)

    function showpassword() {
        setPassword(!password)
    }
    const [login, setLogin] = useState(false)

    function showbox() {
        setLogin(!login)
    }

    const [RgisterEmail, setRegisterEmail] = useState('')
    const [RegisterPassword, setRegisterPassword] = useState('')

    const [LoginEmail, setLoginEmail] = useState('')
    const [LoginPassword, setLoginPassword] = useState('')

    function check() {
        if (RgisterEmail.length > 3 && RegisterPassword.length > 3) {
            if (LoginEmail.length > 3 && LoginPassword.length > 3) {
                if (RgisterEmail == LoginEmail && RegisterPassword == LoginPassword) {
                    setHome(1)
                }
            }
        }
        else {
            toast.error('Invalid username and password')
        }
    }

    return (
        <>
            <div className="register-overall">
                {login == false ? <form >
                    <h1>Register</h1>
                    <label>Name</label>
                    <input type="text" placeholder='Enter Your Name...' required />
                    <label>Email Address</label>
                    <input type="email" placeholder='Enter Your Email...' onChange={(e) => setRegisterEmail(e.target.value)} required />
                    <label>Password</label>
                    <div className="password-box">
                        <input type={password == false ? "password" : "text"} placeholder='Enter Your Password...' onChange={(e) => setRegisterPassword(e.target.value)} required />
                        <h2 className='pasword-eye' onClick={showpassword}>{password == false ? <FaEyeSlash /> : <IoEyeSharp />}</h2>
                    </div>
                    <p>Already have account? <span className='login-link' onClick={showbox}>Login</span></p>
                    <button type="submit" className='register-btn from-btn' onClick={showbox}>Register</button>
                </form> :
                    <form >
                        <h1>Login</h1>
                        <label>Email Address</label>
                        <input type="email" placeholder='Enter Your Email...' onChange={(e) => setLoginEmail(e.target.value)} required />
                        <label>Password</label>
                        <div className="password-box">
                            <input type={password == false ? "password" : "text"} placeholder='Enter Your Password...' onChange={(e) => setLoginPassword(e.target.value)} required />
                            <h2 className='pasword-eye' onClick={showpassword}>{password == false ? <FaEyeSlash /> : <IoEyeSharp />}</h2>
                        </div>
                        <p>Don't have account? <span className='login-link' onClick={showbox}>Register</span></p>
                        <button type="submit" className='register-btn from-btn' onClick={() => check()}>Login</button>
                    </form>}
                <img src={chicken} />
            </div>
        </>
    )
}