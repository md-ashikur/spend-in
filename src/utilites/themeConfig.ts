import type { ThemeConfig } from 'antd';

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

  borderRadius: 8,
    fontSize: 16,

  },
};

export default theme;