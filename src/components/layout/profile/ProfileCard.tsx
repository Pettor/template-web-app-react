import { ReactElement } from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card, { CardProps } from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Skeleton from "@mui/material/Skeleton";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

const StyledCard = styled(Card)(() => ({
  height: "100%",
  width: 275,
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
  onLogout?(): void;
}

export default function ProfileCard({ name, email, onLogout, ...cardProps }: Props): ReactElement {
  return (
    <StyledCard {...cardProps}>
      <CardContent>
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
      </CardContent>
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
