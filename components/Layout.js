import React, { useContext } from "react";
import Head from "next/head";
import NextLink from "next/link";
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

export default function Layout({ title, description,favicon, children }) {
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const { darkMode, cart, userInfo } = state;
  const theme = createMuiTheme({
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

  const [sidbarVisible, setSidebarVisible] = useState(false);
  const sidebarOpenHandler = () => {
    setSidebarVisible(true);
  };
  const sidebarCloseHandler = () => {
    setSidebarVisible(false);
  };

  const [categories, setCategories] = useState([]);
  const { enqueueSnackbar } = useSnackbar();

  const fetchCategories = async () => {
    try {
      const { data } = await axios.get(`/api/products/categories`);
      setCategories(data);
    } catch (err) {
      enqueueSnackbar(getError(err), { variant: "error" });
    }
  };

  const [query, setQuery] = useState("");
  const queryChangeHandler = (e) => {
    setQuery(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    router.push(`/search?query=${query}`);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const darkModeChangeHandler = () => {
    dispatch({ type: darkMode ? "DARK_MODE_OFF" : "DARK_MODE_ON" });
    const newDarkMode = !darkMode;
    Cookies.set("darkMode", newDarkMode ? "ON" : "OFF");
  };
  const [anchorEl, setAnchorEl] = useState(null);
  const loginClickHandler = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const loginMenuCloseHandler = (e, redirect) => {
    setAnchorEl(null);
    if (redirect) {
      router.push(redirect);
    }
  };
  const logoutClickHandler = () => {
    setAnchorEl(null);
    dispatch({ type: "USER_LOGOUT" });
    Cookies.remove("userInfo");
    Cookies.remove("cartItems");
    Cookies.remove("shippinhAddress");
    Cookies.remove("paymentMethod");
    router.push("/");
  };
  return (
    <div>
      <Head>
<title>
          {title ? `${title} - Kenlink Pharmacies` : "Kenlink Pharmacies"}
        </title>
        {description && <meta name="description" content={description}/>}
        {favicon ?   <link rel="shortcut icon" href="/logo2.png" type="image/x-icon"/>:<link rel="shortcut icon" href="/logo2.png" type="image/x-icon"/>}
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
       
        <Container className={classes.main}>{children}</Container>
        {/* <footer className={classes.footer}>
          <Typography>All rights reserved. Next Amazona.</Typography>
        </footer> */}
      </ThemeProvider>
    </div>
  );
}
