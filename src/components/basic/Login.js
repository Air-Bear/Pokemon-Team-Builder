import React, {useState} from "react";
import { Dialog, DialogContent, TextField, Button } from "@material-ui/core";

function Login(){
    const [open, toggleOpen] = useState(false);
    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const toggle = event => {
        toggleOpen(!open)
    };

    const changeHandler = event => {
        setUser({
            ...user,
            [event.target.id]: event.target.value
        })
    };
    return(
        <div>
            <Button variant="outlined" onClick={toggle}>Login</Button>
            <Dialog open={open} onClose={toggle}>
                <DialogContent>
                    <form className="user-form">
                        <TextField id="email" label="email" value={user.email} onChange={changeHandler} />
                        <TextField id="password" label="password" type="password" value={user.password} onChange={changeHandler} />
                        <Button type="submit" onClick={toggle} >Submit</Button>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default Login;