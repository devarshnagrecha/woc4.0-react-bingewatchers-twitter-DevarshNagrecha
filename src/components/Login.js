import React from 'react'

function Login() {
    return (
        <div className="login-container" style={{height: '420px', marginTop: '100px'}}>
            <h2 style={{textAlign: 'center'}}>Sign In</h2>
            <br />
            <form action="/">
                <input type="email" placeholder="Email" />
                <br />
                <input type="password" placeholder="Password" />
                <div style={{ padding: '20px' }}>
                    <a href="/forgot-password" style={{ fontSize: '12px', textAlign: 'center', color: 'white' }}> Forgot Your Password?</a>
                    <br />
                    <br />
                    <input type="submit" value="Sign In"/>
                    <label><input type="checkbox" name="checkbox" value="value" />Remember Me</label>
                </div>
            </form>

            <p style={{textAlign: 'center'}}>New to Netflix? <a href="/sign-up"> Register</a> now!</p>
        </div>
    )
}

export default Login
