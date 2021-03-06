import Image from "next/image";
import NextLink from "next/link";
import data from "../utils/data";
import { useSnackbar } from "notistack";
import CancelIcon from "@material-ui/icons/Cancel";
import {
  MenuIcon,
  HomeIcon,
  BadgeCheckIcon,
  UserIcon,
  SearchIcon,
  LightningBoltIcon,
  CollectionIcon,
  ShoppingBagIcon,
  InformationCircleIcon,
  HeartIcon,
  TrashIcon,
  SearchCircleIcon,
  XIcon,
} from "@heroicons/react/outline";
import {
  Grid,
  AppBar,
  Toolbar,
  Select,
  Typography,
  Container,
  Link,
  TableContainer,
  Table,
  ThemeProvider,
  CssBaseline,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
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
import HeaderItem from "./HeaderItem";
import { useEffect } from "react";
import { useRouter } from "next/router";

import { useContext, useState } from "react";

import { Store } from "../utils/Store";
import axios from "axios";
import Cookies from "js-cookie";
import SearchMobilePanel from "./SearchMobilePanel";
import UploadMobilePanel from "./UploadMobilePanel";
const Header = ({ title, description, products }) => {
  const addToCartHandler = async (product) => {
    const existItem = state.cart.cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${product._id}`);
    if (data.countInStock < quantity) {
      window.alert("Sorry. Product is out of stock");
      return;
    }
    dispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity } });
    router.push("/cart");
  };
  const { state, dispatch } = useContext(Store);
  const { cart, userInfo, darkMode } = state;

  const router = useRouter();
  const darkModeChangeHandler = () => {
    dispatch({ type: darkMode ? "DARK_MODE_OFF" : "DARK_MODE_ON" });
    const newDarkMode = !darkMode;
    Cookies.set("darkMode", newDarkMode ? "ON" : "OFF");
  };
  const [wordEntered, setWordEntered] = useState("");

  const [searchInput, setSearchInput] = useState([]);
  const [query, setQuery] = useState("");
  const startSearchFilter = (e) => {
    const searchInputText = e.target.value.toLowerCase();
    setQuery(e.target.value);
    setWordEntered(searchInputText);
    const newFilter = products.filter((product) =>
      product.name.toLowerCase().includes(searchInputText)
    );
    if (searchInputText === "") {
      setSearchInput([]);
    } else setSearchInput(newFilter);
  };
  const clearSearch = () => {
    setSearchInput([]);
    setWordEntered("");
  };

  const runSearch = () => {
    router.push(`/search?query=${query}`);
  };

  //MENU BTN IN NAV
  const [anchorEl, setAnchorEl] = useState(null);
  const loginClickHandler = (e) => {
    setAnchorEl(e.currentTarget);
    console.log("click");
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
    Cookies.remove("deliveryAddress");
    Cookies.remove("paymentMethod");
    router.push("/");
  };

  ///sidebar
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

  useEffect(() => {
    fetchCategories();
  }, []);
  const [searchMobileVisible, setSearchMobileVisible] = useState(false);
  const searchMobileOpenHandler = () => {
    setSearchMobileVisible(true);
  };
  const searchMobileCloseHandler = () => {
    setSearchMobileVisible(false);
  };

  const [uploadMobileVisible, setUploadMobileVisible] = useState(false);
  const uploadMobileOpenHandler = () => {
    setUploadMobileVisible(true);
  };
  const uploadMobileCloseHandler = () => {
    setUploadMobileVisible(false);
  };

  return (
    <>
      <header className="sticky top-0 bg-[#e0e0e0] z-50">
        <div className="flex flex-col sm:flex-row m-0 pt-5 shadow-xl justify-between items-center ">
          <div className="flex flex-grow justify-evenly max-w-2xl ">
            <div onClick={() => router.push("/")}>
              <HeaderItem title="HOME" Icon={HomeIcon} href="/" />
            </div>
            <NextLink href="/trending" passHref>
              <div>
                <HeaderItem title="trending" Icon={LightningBoltIcon} />
              </div>
            </NextLink>

            <HeaderItem title="PRIME" Icon={BadgeCheckIcon} />
            <HeaderItem title="INFO" Icon={InformationCircleIcon} />

            <div className="relative" onClick={() => router.push("/cart")}>
              <span className="absolute -top-2  right-1 md:right-5 h-6 w-5 text-center text-sm rounded-full bg-kenlink_blue-dark text-white border cursor-pointer font-semibold ">
                {cart.cartItems.length}
              </span>

              <HeaderItem title="Bag" Icon={ShoppingBagIcon} />
            </div>

            {userInfo ? (
              <>
                <div onClick={loginClickHandler}>
                  <HeaderItem
                    title={userInfo.name}
                    Icon={UserIcon}
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                  />
                </div>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={loginMenuCloseHandler}
                >
                  <MenuItem
                    onClick={(e) => loginMenuCloseHandler(e, "/profile")}
                  >
                    Profile
                  </MenuItem>
                  <MenuItem
                    onClick={(e) => loginMenuCloseHandler(e, "/order-history")}
                  >
                    Order History
                  </MenuItem>
                  {userInfo.isAdmin && (
                    <MenuItem
                      onClick={(e) =>
                        loginMenuCloseHandler(e, "/admin/dashboard")
                      }
                    >
                      Admin Dashboard
                    </MenuItem>
                  )}
                  <MenuItem onClick={logoutClickHandler}>Logout</MenuItem>
                </Menu>
              </>
            ) : (
              <div onClick={() => router.push("/login")}>
                <HeaderItem title="Login" Icon={UserIcon} />
              </div>
            )}
          </div>

          <div className=" hidden sm:flex -mt-5 items-center shadow-sm border border-gray-900  h-10 rounded-full flex-grow cursor-pointer bg-gray-900">
            <input
              name="query"
              // onChange={queryChangeHandler}
              onChange={startSearchFilter}
              type="text"
              value={wordEntered}
              placeholder="Search by name..."
              className="p-2 text-white input px-4 h-full w-6 flex-grow  rounded-full flex-shrink focus:outline-none bg-transparent"
            />

            {searchInput.length === 0 ? (
              <SearchIcon
                onClick={runSearch}
                className="h-12 p-4 text-white "
              />
            ) : (
              <XIcon onClick={clearSearch} className="h-12 p-4 text-white " />
            )}
          </div>

          <div className="flex flex-grow items-center justify-between sm:flex-grow-0 -mt-5">
            <Image
              onClick={() => router.push("/")}
              className="sm:w-1 cursor-pointer "
              src="/zlogo (6).png"
              width={150}
              height={40}
              objectFit="contain"
              alt=""
            />
          </div>
        </div>
        <div className="flex items-center space-x-3 pl-6 list-none bg-kenlink_blue-dark text-white text-sm">
          <li className="link flex items-center">
            <div onClick={sidebarOpenHandler} className="burger  ">
              <div className="line1 bg-dark"></div>
              <div className="line2 bg-dark"></div>
              <div className="line3 bg-dark"></div>
            </div>
          </li>
          <div>
            <Drawer
              anchor="left"
              open={sidbarVisible}
              onClose={sidebarCloseHandler}
            >
              <List>
                <ListItem>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography>Shop By Category</Typography>
                    <IconButton
                      aria-label="close"
                      onClick={sidebarCloseHandler}
                    >
                      <XIcon className="h-5 text-kenlink_blue-dark" />
                    </IconButton>
                  </Box>
                </ListItem>
                <Divider light />
                {categories.map((category) => (
                  <NextLink
                    key={category}
                    href={`/search?category=${category}`}
                    passHref
                  >
                    <ListItem
                      button
                      component="a"
                      onClick={sidebarCloseHandler}
                    >
                      <ListItemText primary={category}></ListItemText>
                    </ListItem>
                  </NextLink>
                ))}
              </List>
            </Drawer>
          </div>
          <li onClick={searchMobileOpenHandler}>
            <SearchIcon className="h-5 search__iconMobile cursor-pointer  sm:hidden xl:hidden lg:hidden" />
          </li>
          <NextLink href="/gifts" passHref>
            <li className="cursor-pointer ">Deals</li>
          </NextLink>
          <NextLink href="/gifts" passHref>
            <li className="cursor-pointer ">Tips</li>
          </NextLink>
          <li onClick={uploadMobileOpenHandler} className="cursor-pointer ">
            Community
          </li>

          <li className="hidden cursor-pointer lg:inline-flex">OTC</li>
          <li className="hidden cursor-pointern lg:inline-flex">
            Skincare & Beauty
          </li>
          <li className="hidden cursor-pointer lg:inline-flex">Baby</li>
          <li className="hidden cursor-pointer lg:inline-flex">For Men</li>
          <li className="hidden  cursor-pointerlg:inline-flex">Toolkits</li>
          <li className="hidden  cursor-pointerlg:inline-flex">
            Health & Personal Care
          </li>
          <li>
            <Switch
              checked={darkMode}
              onChange={darkModeChangeHandler}
            ></Switch>
          </li>
        </div>
        <div className="flex items-center">
          <Grid item md={9} xs={12}>
            <TableContainer>
              <Table>
                <TableBody>
                  {searchInput.slice(0, 5).map((product) => (
                    <TableRow key={product._id}>
                      <TableCell>
                        <NextLink href={`/product/${product.slug}`} passHref>
                          <Link>
                            <Image
                              src={product.image}
                              alt={product.name}
                              width={50}
                              height={50}
                            ></Image>
                          </Link>
                        </NextLink>
                      </TableCell>

                      <TableCell>
                        <NextLink href={`/product/${product.slug}`} passHref>
                          <Link>
                            <Typography>{product.name}</Typography>
                          </Link>
                        </NextLink>
                      </TableCell>
                      <TableCell align="right">
                        <Select
                          value={product.quantity}
                          onChange={(e) =>
                            updateCartHandler(item, e.target.value)
                          }
                        >
                          {[...Array(product.countInStock).keys()].map((x) => (
                            <MenuItem key={x + 1} value={x + 1}>
                              {x + 1}
                            </MenuItem>
                          ))}
                        </Select>
                      </TableCell>
                      <TableCell align="right">${product.price}</TableCell>
                      <TableCell align="right">
                        <Button
                          onClick={() => addToCartHandler(product)}
                          variant="contained"
                          className="button"
                          color="primary"
                        >
                          Bag
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </div>
        <div>
          <div>
            <Drawer
              anchor="top"
              open={searchMobileVisible}
              onClose={searchMobileCloseHandler}
            >
              <SearchMobilePanel products={products} />
            </Drawer>
          </div>
        </div>
        <div>
          <Drawer
            anchor="top"
            open={uploadMobileVisible}
            onClose={uploadMobileCloseHandler}
          >
            <UploadMobilePanel />
          </Drawer>
        </div>
      </header>
    </>
  );
};

export default Header;
