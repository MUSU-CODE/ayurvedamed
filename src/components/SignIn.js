import React from 'react'
import userIcon from '../assets/images/usericon.png';
import './sign.css';
export default function SignIn() {
    return (
        <div className="wrapper fadeInDown">
            <div id="formContent">

                <div className="fadeIn first">
                    <img src={userIcon} id="icon" alt="User Icon" />
                </div>

                <form>
                    <input type="text" id="email" className="fadeIn second" name="email" placeholder="Email" />
                    <input type="password" id="password" className="fadeIn third" name="login" placeholder="Password" />
                    <input type="submit" className="fadeIn fourth" value="Sign In" />
                </form>

                <div id="formFooter">
                    <a className="underlineHover" href="#">Forgot Password?</a>
                </div>

            </div>
        </div>
    )
}
