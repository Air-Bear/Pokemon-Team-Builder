import { withStyles } from "@material-ui/core/styles";

export const GlobalStyles = withStyles({
    "@global": {
        "body": {
            backgroundColor: "MidnightBlue",
        },
        "a": {
            color: "inherit",
            textDecoration: "none"
        },
        ".user-form": {
            display: "flex",
            flexDirection: "column"
        },
    }
    
})(() => null);