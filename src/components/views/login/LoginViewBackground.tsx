import { styled } from "@mui/material/styles";

const LoginViewBackground = styled("img")(({ theme }) => ({
  position: "fixed",
  bottom: -50,
  left: 0,
  zIndex: 0,

  [theme.breakpoints.down("sm")]: {
    bottom: 0,
    width: "200%",
  },
}));

export default LoginViewBackground;
