import { createTheme } from "@mui/material";

export const colorTokens = {
    grey: {
      0: "#FFFFFF",
      10: "#F6F6F6",
      50: "#F0F0F0",
      100: "#E0E0E0",
      200: "#C2C2C2",
      300: "#A3A3A3",
      400: "#858585",
      500: "#666666",
      600: "#4D4D4D",
      700: "#333333",
      800: "#1A1A1A",
      900: "#0A0A0A",
      1000: "#000000",
    },
    primary: {
      50: "#fff1f2",
      100: "#ffe4e6",
      200: "#fecdd3",
      300: "#fda4af",
      400: "#fb7185",
      500: "#f43f5e",
      600: "#e11d48",
      700: "#be123c",
      800: "#9f1239",
      900: "#881337",
      950: "#4c0519",
    },
    };
    
    // mui theme settings
    export const theme = createTheme({
    palette: {
      primary: {
        dark: colorTokens.primary[600],
        main: colorTokens.primary[300],
        light: colorTokens.primary[200],
      },
      secondary: {
        dark: colorTokens.grey[800],
        main: colorTokens.grey[400],
        light: colorTokens.grey[50],
      },
      background: {
        default: colorTokens.grey[50],
      },
    },

    typography: {
      fontFamily: ["Fauna One", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Cinzel Decorative", "sans-serif"].join(","),
        fontSize: 48,
      },
      h2: {
        fontFamily: ["Cinzel", "sans-serif"].join(","),
        fontSize: 36,
      },
      h3: {
        fontFamily: ["Cinzel", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Cinzel", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Cinzel", "sans-serif"].join(","),
        fontSize: 18,
      },
      h6: {
        fontFamily: ["Cinzel", "sans-serif"].join(","),
        fontSize: 15,
      },
    },
});
