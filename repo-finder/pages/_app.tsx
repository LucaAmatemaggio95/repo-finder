import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import Head from "next/head";
import TopBar from "../components/TopBar/TopBar";
import { RecoilRoot } from "recoil";

const theme = createTheme({
  palette: {
    mode: "dark"
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "Montserrat, sans serif"
        },
        h5: {
          fontWeight: 500
        },
        h4: {
          fontWeight: 500
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "Montserrat, sans serif",
          textTransform: "none"
        }
      }
    }
  }
});

export default function App({
  Component,
  pageProps: { session, ...pageProps }
}: AppProps) {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SessionProvider session={session}>
          <Head>
            <title>Repo-Finder</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <TopBar />
          <Component {...pageProps} />
        </SessionProvider>
      </ThemeProvider>
    </RecoilRoot>
  );
}
