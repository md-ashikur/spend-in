import type { ThemeConfig } from "antd";

const theme: ThemeConfig = {
  token: {
    // === overwrite AntD defaults ===
    colorPrimary: "#7C5CFC", // primary-500
    colorInfo: "#3b82f6",
    colorSuccess: "#22c55e",
    colorWarning: "#f59e0b",
    colorError: "#ef4444",

    // === primary palette ===
    primary50: "#eff6ff",
    primary100: "#E7DEFE",
    primary200: "#CEBEFE",
    primary300: "#B49DFE",
    primary400: "#9F84FD",
    primary500: "#7C5CFC",
    primary600: "#5E43D8",
    primary700: "#432EB5",
    primary800: "#2D1D92",
    primary900: "#1D1178",

    // === secondary palette ===
    secondary50: "#fdf2f8",
    secondary100: "#F3F5F7",
    secondary200: "#C3D4E9",
    secondary300: "#90A3BF",
    secondary400: "#596780",
    secondary500: "#1A202C",
    secondary600: "#131825",
    secondary700: "#0D121F",
    secondary800: "#080C19",
    secondary900: "#040815",

    white: "#ffffff",
    borderRadius: 8,
    fontSize: 16,
  // Typography colors
  colorTextHeading: "#040815",
  colorText: "#1A202C",
  colorTextSecondary: "#596780",
  },

  components: {
    // === Menu ===
    Menu: {
      itemColor: "#ffffffff", // default text color
      itemHoverColor: "#1A202C", // hover text color
      itemSelectedColor: "#fcf15cff", // active text color
      itemSelectedBg: "#1A202C", // no background, just text color
      horizontalItemSelectedColor: "#fc5c5cff", // selected color in horizontal menu

      // === Submenu (dropdown) ===
      subMenuItemBg: "#1A202C", // submenu background
      subMenuItemColor: "#90A3BF", // submenu item text (using secondary300 for better readability)
      subMenuItemHoverColor: "#7C5CFC", // hover (using primary500)
      subMenuItemSelectedColor: "#B49DFE", // selected text (using primary300)
      subMenuItemSelectedBg: "#1A202C", // clean background
    },

    // === Card ===
    Card: {
      colorBgContainer: "transparent", // dark card background
      colorBorderSecondary: "#2D1D92", // subtle border
      headerFontSize: 18,
      headerHeight: 56,
      borderRadiusLG: 12,
    },

    // === Button ===
    Button: {
      colorPrimary: "#7C5CFC", // your primary button
      colorPrimaryHover: "#5E43D8", // hover
      colorPrimaryActive: "#432EB5", // active
      borderRadius: 50,
      controlHeight: 44,
      paddingInline: 24,
      fontWeight: 600,
    },
  Typography:{
    titleMarginTop: 0,
  },
  
},
};

export default theme;
