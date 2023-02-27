import React from "react";

function Login(){
 return(
    <div className="App">
        <form>
            <div className="box">
                <h1>Log In</h1>
                <input  type="email" name="email" className="email" defaultValue="Email"/>
                <input  type ="password" name="password" className="email" defaultValue="Password"/>
                <div className="btn"> Log In</div>
            </div>        
        </form>
    </div>
 );
}

export default Login;