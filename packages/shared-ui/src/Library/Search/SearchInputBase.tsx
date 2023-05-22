import type { StyledComponent } from "@emotion/styled";
import type { InputBaseProps } from "@mui/material";
import { InputBase } from "@mui/material";
import { styled } from "@mui/material/styles";

export const SearchInputBase: StyledComponent<InputBaseProps> = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
