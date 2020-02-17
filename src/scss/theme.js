import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        fontFamily: "inherit",
        // border: 0,
        // borderRadius: 500,
        // color: "white",
        // height: 50,
        // padding: "0 32px",
        // boxShadow: "-4px 3px 14px 0 rgba(0, 196, 199, 0.46)",
        // background: "#00c4c7",
        // fontSize: "15px",
        // fontFamily: "inherit",
        textTransform: "normal",
        // "&:hover": {
        //   backgroundColor: "#019ea1"
        //
        // }
      }
    }
  }
});
