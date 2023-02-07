import { ReactElement, ReactNode, useMemo } from "react";
import BackArrow from "@mui/icons-material/ArrowBack";
import MuiAppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { joinChildren } from "../../../libs/react/JoinChildren";
import Logo from "../../library/logo/Logo";
import AppHeaderIconComponent from "./AppHeaderIconComponent";

interface AppHeaderComponentOptions {
  flexItem?: boolean;
  fill?: boolean;
}

export interface AppHeaderComponent {
  name: string;
  icon: ReactNode;
  MenuNode?: ReactElement | ReactElement[];
  Node?: ReactElement | ReactElement[];
  responsive: boolean;
  onIconClick?(anchorEl: HTMLElement): void;
}

export interface AppHeaderOptions {
  subheader?: boolean;
  label?: string;
  onBack?(): void;
}

export interface AppHeaderComponents {
  headerComponents?: AppHeaderComponent[];
  headerComponentOptions?: AppHeaderComponentOptions;
}

const AppBar = styled(MuiAppBar)(({ theme }) => ({
  background: `${theme.palette.background.default}b0`,
  zIndex: theme.zIndex.drawer + 1,
  backdropFilter: "saturate(50%) blur(8px)",
}));

const CustomComponentsContainer = styled(Stack, {
  shouldForwardProp: (prop) => prop !== "flexItem",
})<AppHeaderComponentOptions>(({ flexItem }) => ({
  flex: flexItem ? 1 : "none",
}));

interface Props extends AppHeaderComponents, AppHeaderOptions {
  isMobile?: boolean;
}

export default function AppHeader({
  isMobile,
  subheader,
  label,
  headerComponents,
  headerComponentOptions,
  onBack,
}: Props): ReactElement {
  const { flexItem, fill } = headerComponentOptions || { flexItem: false, fill: false };

  const HeaderComponents = useMemo(() => {
    if (!headerComponents) {
      return <></>;
    }

    return headerComponents.map((component) => {
      const { name, Node, icon, MenuNode, responsive } = component;

      if ((isMobile && responsive) || !Node) {
        return <AppHeaderIconComponent key={name} MenuNode={MenuNode} icon={icon} />;
      }

      return joinChildren(Node, <Divider light orientation="vertical" flexItem />);
    });
  }, [headerComponents, isMobile, flexItem]);

  return (
    <AppBar position="fixed" elevation={1}>
      <Toolbar disableGutters>
        <Container maxWidth="lg" sx={{ display: "flex", alignItems: "center" }}>
          {!subheader && <Logo size="small" />}
          {subheader && (
            <IconButton onClick={onBack}>
              <BackArrow />
            </IconButton>
          )}
          <Divider sx={{ mx: 1, display: isMobile ? "none" : "flex" }} />
          {!fill && (
            <Typography component="h1" variant="h6" color="primary" noWrap sx={{ flexGrow: 1 }}>
              {label}
            </Typography>
          )}
          <CustomComponentsContainer flexItem={flexItem} spacing={2} direction="row" alignItems="center">
            {HeaderComponents}
          </CustomComponentsContainer>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
