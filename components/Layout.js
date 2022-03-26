import React, { useContext } from "react";
import Head from "next/head";
import NextLink from "next/link";
import { createTheme } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Link,
  createMuiTheme,
  ThemeProvider,
  CssBaseline,
  Switch,
  Badge,
  Button,
  Menu,
  MenuItem,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  Divider,
  ListItemText,
  InputBase,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import CancelIcon from "@material-ui/icons/Cancel";
import SearchIcon from "@material-ui/icons/Search";
import useStyles from "../utils/styles";
import { Store } from "../utils/Store";
import { getError } from "../utils/error";
import Cookies from "js-cookie";
import { useState } from "react";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import axios from "axios";
import { useEffect } from "react";

export default function Layout({ title, description, favicon, children }) {
  const { state, dispatch } = useContext(Store);
  const { cart, userInfo, darkMode } = state;
  const theme = createTheme({
    typography: {
      h1: {
        fontSize: "1.6rem",
        fontWeight: 400,
        margin: "1rem 0",
      },
      h2: {
        fontSize: "1.4rem",
        fontWeight: 400,
        margin: "1rem 0",
      },
    },
    palette: {
      type: darkMode ? "dark" : "light",
      primary: {
        main: "#3db43f",
      },
      secondary: {
        main: "#3db43f",
      },
    },
  });
  const classes = useStyles();

  return (
    <div>
      <Head>
        <title>
          {title ? `${title} - Kenlink Pharmacies` : "Kenlink Pharmacies"}
        </title>
        {description && <meta name="description" content={description} />}
        {favicon ? (
          <link rel="shortcut icon" href="/logo2.png" type="image/x-icon" />
        ) : (
          <link rel="shortcut icon" href="/logo2.png" type="image/x-icon" />
        )}
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Container className={classes.main}>{children}</Container>
        <footer className=" bottom-0 text-center text-black font-italic  font-semibold">
          <Typography>Powered By ZWGODIGITAL</Typography>
        </footer>
      </ThemeProvider>
    </div>
  );
}
