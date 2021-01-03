import React from "react";

function Register(){

    return(
        <div>
            <form className="formGroup">
                <label>Registration</label>
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
                        type="text" 
                        id="email"
                        name="email"
                        placeholder="email"
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

export default Register;