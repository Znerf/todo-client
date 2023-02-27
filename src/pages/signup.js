import React from "react";

function Signup(){
 return(
    <div className="App">
        <form>
            <div className="box">
                <h1>Sign Up</h1>
                <input  type="email" name="email" className="email" defaultValue="Email"/>
                <input  type ="password" name="password" className="email" defaultValue="Password"/>

                <div className="btn"> Sign Up</div>
                
            </div>


        
        </form>
    </div>
 );
}

export default Signup;