import type { ReactElement } from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import { Grid, Typography, Avatar, Divider, MenuItem, Skeleton, ListItemIcon, ListItemText } from "@mui/material";
import { ProfileCardAvatarContainer } from "./ProfileCardAvatarContainer";
import type { ProfileCardProps } from "./ProfileCardClasses";
import { ProfileCardContainer } from "./ProfileCardContainer";
import { ProfileCardContent } from "./ProfileCardContent";
import { ProfileCardMenuContainer } from "./ProfileCardMenuContainer";

interface Props extends ProfileCardProps {
  name?: string;
  email?: string;
  onLogout?(): void;
}

export function ProfileCard({ name, email, isMobile, onLogout }: Props): ReactElement {
  return (
    <ProfileCardContainer isMobile={isMobile} elevation={isMobile ? 0 : 1}>
      <ProfileCardContent isMobile={isMobile}>
        <Typography variant="h6" gutterBottom>
          Personal
        </Typography>
        <Grid container spacing={2} sx={{ mb: 1 }}>
          <Grid item>
            <ProfileCardAvatarContainer>
              <Avatar />
            </ProfileCardAvatarContainer>
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
      </ProfileCardContent>
      <ProfileCardMenuContainer>
        <MenuItem onClick={onLogout}>
          <ListItemIcon>
            <LogoutIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Logout</ListItemText>
        </MenuItem>
      </ProfileCardMenuContainer>
    </ProfileCardContainer>
  );
}
