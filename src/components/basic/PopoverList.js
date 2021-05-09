import React, { useState } from "react";
import { Paper, Button, Popper, ClickAwayListener, MenuList, MenuItem, makeStyles } from "@material-ui/core";
import { Add } from "@material-ui/icons";

const useStyles = makeStyles(() => ({
    root: {
        display: "flex"
    },
    button: {
        backgroundColor: "lightblue",
        height: "4rem",
        width: "4rem",
        borderRadius: "100%",
        marginTop: "40%"
    }
}));

function PopoverList(){
    const classes = useStyles();
    const [toggle, setToggle] = useState(false);
    const anchorRef = React.useRef(null);

    const clickHandler = () => {
        setToggle(!toggle);
    };

    

    return(
        <div className={classes.root}>
            <Button className={classes.button} onClick={clickHandler} ref={anchorRef}><Add /></Button>
            <Popper open={toggle} anchorEl={anchorRef.current}>
                <Paper>
                    <ClickAwayListener onClickAway={clickHandler}>
                        <MenuList autoFocus={toggle}>
                            <MenuItem onClick={clickHandler}>save</MenuItem>
                            <MenuItem onClick={clickHandler}>copy</MenuItem>
                            <MenuItem onClick={clickHandler}>clear</MenuItem>
                        </MenuList>
                    </ClickAwayListener>
                </Paper>
            </Popper>
        </div>
    );
}

export default PopoverList;