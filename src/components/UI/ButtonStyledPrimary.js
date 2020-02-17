import React from "react"
// import { styled } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
// import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import theme from "../../scss/theme";

// const PrimaryButton = styled(Button)({
//   border: 0,
//   borderRadius: 500,
//   color: "white",
//   height: 50,
//   padding: "0 32px",
//   boxShadow: "-4px 3px 14px 0 rgba(0, 196, 199, 0.46)",
//   background: "#00c4c7",
//   fontSize: "15px",
//   "&:hover": {
//     backgroundColor: "#019ea1"
//   }
// })

const ButtonStyledPrimary = (props) => (
  <MuiThemeProvider theme={theme}>
    <Button variant="contained" disableElevation className={'test'} color={'primary'} onClick={props.onClick}>{props.children}</Button>
  </MuiThemeProvider>
  // <PrimaryButton onClick={props.onClick} size="large"></PrimaryButton>
)

export default ButtonStyledPrimary
