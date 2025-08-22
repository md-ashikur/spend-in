// src/antd.d.ts
import "antd/es/theme/interface";

declare module "antd/es/theme/interface" {
  export interface AliasToken {
    primary50?: string; // custom name gulo ? diye optional kora hoise jeno type error na dhore
    primary100?: string;
    primary200?: string;
    primary300?: string;
    primary400?: string;
    primary500?: string;
    primary600?: string;
    primary700?: string;
    primary800?: string;
    primary900?: string;

    secondary50?: string;
    secondary100?: string;
    secondary200?: string;
    secondary300?: string;
    secondary400?: string;
    secondary500?: string;
    secondary600?: string;
    secondary700?: string;
    secondary800?: string;
    secondary900?: string;


    subMenuItemColor: string; // submenu item text color
    subMenuItemHoverColor: string; // submenu item hover text color
    subMenuItemSelectedBg: string; // submenu item selected background
  }
}
