import type { ReactElement } from "react";
import SearchIcon from "@mui/icons-material/Search";
import type { BoxProps } from "@mui/material/Box";
import { useIntl } from "react-intl";
import SearchContainer from "./SearchContainer";
import SearchIconContainer from "./SearchIconContainer";
import SearchInputBase from "./SearchInputBase";

interface Props extends BoxProps {}

export default function Search({ ...boxProps }: Props): ReactElement {
  const intl = useIntl();
  return (
    <SearchContainer {...boxProps}>
      <SearchIconContainer>
        <SearchIcon />
      </SearchIconContainer>
      <SearchInputBase
        placeholder={intl.formatMessage({
          description: "SearchComponentInput - Search placeholder",
          defaultMessage: "Search…",
          id: "uSbNv6",
        })}
        inputProps={{ "aria-label": "search" }}
      />
    </SearchContainer>
  );
}
