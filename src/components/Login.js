import React from "react";

function Login(){

    return(
        <div>
            <form className="formGroup">
                <label>Login</label>
                <div>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="username"
                    />  
                </div>
                <div>
                    <input 
                        type="password"
                        id="password"
                        name="password"
                        placeholder="password"

                    />
                </div>
                <button type="submit" id="submitBtn">Submit</button>
            </form>
        </div>
    );
}

export default Login;