import React from 'react';
function Signup(){
    return(
<div className="center">
    <h1>Signup</h1>
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
        <input type="submit" value="Signup"></input>
       <div className="signup_link">
        Already have an account?<a href="#">Login</a>
       </div>
    </form>
</div>
    )
}
export default Signup;