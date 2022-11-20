import { useMemo, useState } from "react";
import BackArrow from "@mui/icons-material/ArrowBack";
import MenuIcon from "@mui/icons-material/MoreVert";
import AvatarIcon from "@mui/icons-material/Person";
import MuiAppBar from "@mui/material/AppBar";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Logo from "../../common/logo/Logo";
import Search from "../../common/search/Search";
import { IInjectedMenu } from "../menu/IInjectedMenu";

export interface AppHeaderOptions {
  subheader?: boolean;
  label?: string;
  onBack?(): void;
}

export interface AppHeaderProps {
  menu: IInjectedMenu;
}

type Props = AppHeaderOptions & AppHeaderProps;

const AppBar = styled(MuiAppBar)(({ theme }) => ({
  background: theme.palette.background.default,
  backdropFilter: "saturate(50%) blur(8px);",
  zIndex: theme.zIndex.drawer + 1,
}));

const AppHeader = ({ subheader, label, menu, onBack }: Props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const theme = useTheme();
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const MenuComponent = useMemo(() => {
    if (!menu) {
      return <></>;
    }

    const { menu: Menu, menuContent } = menu;

    return (
      <Menu key="app-header-menu" open={open} anchorEl={anchorEl} handleClose={handleClose}>
        {menuContent}
      </Menu>
    );
  }, [menu, open]);

  return (
    <AppBar position="fixed" elevation={1}>
      <Toolbar disableGutters>
        <Container maxWidth="lg" sx={{ display: "flex", alignItems: "center" }}>
          {!subheader && isSmUp && <Logo size="small" />}
          {subheader && (
            <IconButton onClick={onBack}>
              <BackArrow />
            </IconButton>
          )}
          <Divider sx={{ mx: 1 }} />
          <Typography component="h1" variant="h6" color="primary" noWrap sx={{ flexGrow: 1 }}>
            {label}
          </Typography>
          {isSmUp && <Search />}
          <Divider sx={{ mx: 2 }} />
          <IconButton>
            <Badge badgeContent={2} color="info">
              <AvatarIcon color="primary" />
            </Badge>
          </IconButton>
          <IconButton onClick={handleClick} color="primary">
            <MenuIcon />
          </IconButton>
          {MenuComponent}
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
