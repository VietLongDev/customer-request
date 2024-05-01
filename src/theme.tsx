const colors = {
  grey: {
    100: "#e0e0e0",
    200: "#c2c2c2",
    300: "#a3a3a3",
    400: "#858585",
    500: "#666666",
    600: "#525252",
    700: "#3d3d3d",
    800: "#292929",
    900: "#141414",
  },
  blueAccent: {
    100: "#e1e2fe",
    200: "#c3c6fd",
    300: "#a4a9fc",
    400: "#868dfb",
    500: "#6870fa",
    600: "#535ac8",
    700: "#3e4396",
    800: "#2a2d64",
    900: "#151632",
  },
  primary: {
    100: "#040509",
    200: "#080b12",
    300: "#0c101b",
    400: "#f2f0f0", // manually changed
    500: "#141b2d",
    600: "#1F2A40",
    700: "#727681",
    800: "#a1a4ab",
    900: "#d0d1d5",
  },
  redAccent: {
    100: "#FFCCBC",
    200: "#FFAB91",
    300: "#FF8A65",
    400: "#FF7043",
    500: "#FF5722",
    600: "#F4511E",
    700: "#E64A19",
    800: "#D84315",
    900: "#BF360C",
  },
  greenAccent: {
    100: "#DCEDC8",
    200: "#C5E1A5",
    300: "#AED581",
    400: "#9CCC65",
    500: "#8BC34A",
    600: "#7CB342",
    700: "#689F38",
    800: "#558B2F",
    900: "#33691E",
  },
};
export const theme = {
  palette: {
    primary: {
      main: colors.blueAccent[500],
    },
    secondary: {
      main: colors.blueAccent[500],
    },
    neutral: {
      dark: colors.grey[700],
      main: colors.grey[500],
      light: colors.grey[100],
    },
    background: {
      default: colors.primary[500],
    },
    success: {
      main: colors.greenAccent[500],
    },
    error: {
      main: colors.redAccent[500],
    },
  },
};
