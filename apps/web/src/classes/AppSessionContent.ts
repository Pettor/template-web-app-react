export interface AppSessionContent {
  name: string;
  email: string;
  onAbout: () => void;
  onLogout: () => void;
}
