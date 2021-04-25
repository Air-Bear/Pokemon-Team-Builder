import React, { useState } from "react";
import { Paper, Button, Popper, ClickAwayListener, MenuList, MenuItem } from "@material-ui/core";

function PopoverList(){
    const [toggle, setToggle] = useState(false);
    const anchorRef = React.useRef(null);

    const clickHandler = () => {
        setToggle(!toggle);
    };

    return(
        <div>
            <Button onClick={clickHandler} ref={anchorRef}>Options</Button>
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