import { createMuiTheme } from "@material-ui/core/styles";
const fontFamily = "'Poppins', sans-serif";

export const defaultTheme = createMuiTheme({
  palette: {
    common: {
      black: "rgba(0, 0, 0, 1)",
      white: "#fff"
    },
    background: {
      paper: "rgba(251, 251, 251, 1)",
      default: "rgba(255, 255, 255, 1)",
      items: "rgba(241, 241, 241, 1)",
      light: "rgba(244, 244, 244, 1)",
      contrast: "rgba(221, 221, 221, 1)",
      dark: "rgba(191, 191, 191, 1)",
      star: "#fcae51"
    },
    primary: {
      light: "#718792",
      main: "#455a64",
      dark: "#1c313a",
      contrastText: "rgba(255, 255, 255, 1)"
    },
    secondary: {
      light: "#5df2d6",
      main: "#00bfa5",
      dark: "#008e76",
      contrastText: "rgba(255, 255, 255, 1)"
    },
    border: {
      darkBorder: "rgba(100, 100, 100, 1)",
      lightBorder: "rgba(221, 221, 221, 1)",
    },
    status: {
      success: "rgba(153, 194, 72, 1)",
      notStarted: "#fc7150",
      inProgress: "#5185fc",
      inReview: "#fcae51",
      completed:"#4dd778",
      Cancelled: "ff5b5b",
      dueToday: "#67747d",
      starred: "#ffc700"
    },
    error: {
      light: "#e57373",
      main: "rgba(255, 91, 90, 1)",
      dark: "rgba(255, 91, 90, 1)",
      contrastText: "#fff"
    },
    text: {
      primary: "rgba(51, 51, 51, 1)",
      secondary: "rgba(191, 191, 191, 1)",
      disabled: "rgba(191, 191, 191, 1)",
      hint: "rgba(191, 191, 191, 1)"
    }
  },
  spacing: {
    defaultCntPadding: 20
  },
  typography: {
    useNextVariants: true,
    fontFamily: fontFamily,
    fontWeightLight: 500,
    fontWeightRegular: 600,
    fontWeightMedium: 700,
    h1: {
      fontFamily: fontFamily,
      fontSize: "28px",
      fontWeight: 600,
      color: "rgba(51, 51, 51, 1)"
    },
    h2: {
      fontFamily: fontFamily,
      fontSize: "24px",
      fontWeight: 600,
      color: "rgba(51, 51, 51, 1)"
    },
    h3: {
      fontFamily: fontFamily,
      fontSize: "20px",
      fontWeight: 600,
      color: "rgba(51, 51, 51, 1)"
    },
    h4: {
      fontFamily: fontFamily,
      fontSize: "16px",
      fontWeight: 600,
      color: "rgba(51, 51, 51, 1)"
    },
    subtitle1: {
      color: "rgba(191, 191, 191, 1)",
      fontSize:19
    },
    body1: {
      fontSize: 14,
      color: "rgba(191, 191, 191, 1)",
      fontWeight: 500
    }
  }
});
