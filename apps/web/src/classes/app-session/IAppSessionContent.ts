export interface IAppSessionContent {
  name: string;
  email: string;
  onAbout: () => void;
  onLogout: () => void;
}
