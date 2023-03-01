import React from 'react';
function Login(){
    return(
<div className="center">
    <h1>Login</h1>
    <form>
        <div className="txt_field">
            <input type="text"></input>
            <span></span>
            <label>Username</label>
        </div>
        <div className="txt_field">
            <input type="password"></input>
            <span></span>
            <label>Password</label>
        </div>
        <input type="submit" value="Login"></input>
       <div className="signup_link">
        Don't have an account?<a href="#">Signup</a>
       </div>
    </form>
</div>
    )
}
export default Login; 