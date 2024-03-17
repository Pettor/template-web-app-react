import type { IAppSessionContent } from "../app-session/IAppSessionContent";
import type { IAppSocialLinks } from "../app-social-links/IAppSocialLinks";
import type { ThemeSwitchProps } from "~/components/actions/theme-switch/ThemeSwitch";

export interface IAppbar extends IAppSocialLinks, IAppSessionContent, ThemeSwitchProps {}
