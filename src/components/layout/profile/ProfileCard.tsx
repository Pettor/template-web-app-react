import type { ReactElement } from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import type { CardProps } from "@mui/material/Card";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Skeleton from "@mui/material/Skeleton";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

interface StyledCardProps {
  isMobile?: boolean;
}

const StyledCard = styled(Card, {
  shouldForwardProp: (prop) => prop !== "isMobile",
})<StyledCardProps>(({ isMobile }) => ({
  height: "auto",
  width: isMobile ? "100dvw" : 275,
}));

const StyledCardContent = styled(CardContent, {
  shouldForwardProp: (prop) => prop !== "isMobile",
})<StyledCardProps>(({ isMobile }) => ({
  paddingTop: isMobile ? 0 : 16,
}));

const AvatarBox = styled(Box)(() => ({
  display: "flex",
  height: "100%",
  alignItems: "center",
}));

const MenuBox = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

interface Props extends CardProps {
  name?: string;
  email?: string;
  isMobile: boolean;
  onLogout?(): void;
}

export default function ProfileCard({ name, email, isMobile, onLogout, ...cardProps }: Props): ReactElement {
  return (
    <StyledCard isMobile={isMobile} {...cardProps} elevation={isMobile ? 0 : 1}>
      <StyledCardContent isMobile={isMobile}>
        <Typography variant="h6" gutterBottom>
          Personal
        </Typography>
        <Grid container spacing={2} sx={{ mb: 1 }}>
          <Grid item>
            <AvatarBox>
              <Avatar />
            </AvatarBox>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  {name ? name : <Skeleton animation={false} />}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {email ? email : <Skeleton animation={false} />}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Divider />
      </StyledCardContent>
      <MenuBox>
        <MenuItem onClick={onLogout}>
          <ListItemIcon>
            <LogoutIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Logout</ListItemText>
        </MenuItem>
      </MenuBox>
    </StyledCard>
  );
}
