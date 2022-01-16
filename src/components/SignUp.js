import Navbar from './Navbar'
import React from 'react'

function SignUp() {
    return (
        <div className="login-container" style={{height: '660px' , marginTop: '100px', marginBottom: '100px'}}>
            <h2 style={{ textAlign: 'center' }}>Sign Up</h2>
            <br />
            <form action="/">
                <input type="text" placeholder="First Name" />
                <br />
                <input type="text" placeholder="Last Name" />
                <br />
                <input type="email" placeholder="Email" />
                <br />
                <input type="password" placeholder="Password" />
                <br />
                <input type="password" placeholder="Confirm password" />
                <br />
                <input type="number" placeholder="Mobile number" />
                <div style={{ padding: '20px' }}>
                    <br />
                    <br />
                    <input type="submit" value="Register" />
                </div>
            </form>

            <p style={{ textAlign: 'center' }}>Already rigistered? <a href="/sign-in"> Sign in</a> now!</p>
        </div>
    )
}

export default SignUp

