import type { ReactElement } from "react";
import SearchIcon from "@mui/icons-material/Search";
import type { BoxProps } from "@mui/material/Box";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import { alpha, styled } from "@mui/material/styles";
import { useIntl } from "react-intl";

const StyledSearch = styled(Box)(({ theme }) => ({
  color: theme.palette.text.secondary,
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;",
}));

const SearchIconWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
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

interface Props extends BoxProps {}

export default function Search({ ...boxProps }: Props): ReactElement {
  const intl = useIntl();
  return (
    <StyledSearch {...boxProps}>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder={intl.formatMessage({
          description: "SearchComponentInput - Search placeholder",
          defaultMessage: "Search…",
          id: "uSbNv6",
        })}
        inputProps={{ "aria-label": "search" }}
      />
    </StyledSearch>
  );
}
