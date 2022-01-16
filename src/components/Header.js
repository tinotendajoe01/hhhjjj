import Image from "next/image";
import NextLink from "next/link";
import data from "../../utils/data";
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
} from "@heroicons/react/outline";
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
import HeaderItem from "./HeaderItem";

import { useRouter } from "next/router";

import { useContext, useState } from "react";

import { Store } from "../../utils/Store";
import axios from "axios";
import Cookies from "js-cookie";

import SearchMobile from "./SearchMobile";
import SearchDesktop from "./SearchDesktop";

const Header = ({ placeholder }) => {
  const { state, dispatch } = useContext(Store);
  const { cart, userInfo } = state;

  const router = useRouter();

  const [searchInput, setSearchInput] = useState([]);
  const startSearchFilter = (e) => {
    const searchWord = e.target.value.toLowerCase();

    const newFilter = data.products.filter((value) =>
      value.name.toLowerCase().includes(searchWord)
    );
    if (searchWord === "") {
      setSearchInput([]);
    } else setSearchInput(newFilter);
  };

  const runSearch = () => {
    router.push({
      pathname: "/search",
      query: {
        title: searchInput,
      },
    });
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
    Cookies.remove("shippinhAddress");
    Cookies.remove("paymentMethod");
    router.push("/");
  };

  //SEARCHBAR
  const showSearchMobileTab = () => {
    const searchIconMobile = document.querySelector(".search__iconMobile");
    const tab = document.querySelector(".searchMobileTab");
    //for animantion
    //  const navLinks = document.querySelectorAll(".nav-links li");
    searchIconMobile.addEventListener("click", () => {
      // upon click the burger will grab nav-active from nav toggle

      tab.classList.remove("");
      console.log(tab.classList);
      //animate links

      // navLinks.forEach((link, index) => {
      //   if (link.style.animation) {
      //     link.style.animation = "";
      //   } else {
      //     link.style.animation = `navLinksFade 0.5s ease forwards ${
      //       index / 7 + 1.5
      //     }s`;
      //   }
      // });

      //burger icon
      searchIconMobile.classList.toggle("toggle");
    });
  };

  const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    //for animantion
    const navLinks = document.querySelectorAll(".nav-links li");
    burger.addEventListener("click", () => {
      // upon click the burger will grab nav-active from nav toggle

      nav.classList.toggle("nav-active");
      //animate links
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `navLinksFade 0.5s ease forwards ${
            index / 7 + 1.5
          }s`;
        }
      });
      //burger icon
      burger.classList.toggle("toggle");
    });
  };

  return (
    <>
      <header className="sticky top-0 bg-[#e0e0e0] z-50">
        <div className="flex flex-col sm:flex-row m-0 pt-5 shadow-xl justify-between items-center ">
          <div className="flex flex-grow justify-evenly max-w-2xl ">
            <div onClick={() => router.push("/")}>
              <HeaderItem title="HOME" Icon={HomeIcon} href="/" />
            </div>
            <NextLink href="/hot" passHref>
              <div>
                <HeaderItem title="trending" Icon={LightningBoltIcon} />
              </div>
            </NextLink>

            <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
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
                    Order Hisotry
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
              onChange={startSearchFilter}
              type="text"
              placeholder={placeholder || "Start your search"}
              className="p-2 text-white input px-4 h-full w-6 flex-grow  rounded-full flex-shrink focus:outline-none bg-transparent"
            />

            <SearchIcon
              onClick={runSearch}
              className="h-12 p-4 text-white "
              // placeholder="Start Searching Meds"
            />
          </div>
          <div className="flex flex-grow items-center justify-between sm:flex-grow-0 -mt-5">
            <Image
              onClick={() => router.push("/")}
              className="sm:w-1 cursor-pointer "
              src="/logo2.png"
              width={150}
              height={40}
              objectFit="contain"
              alt=""
            />
          </div>
        </div>
        <div className="flex items-center space-x-3 pl-6  bg-kenlink_blue-dark text-white text-sm">
          <p className="link flex items-center" onClick={navSlide}>
            <div class="burger ">
              <div class="line1 bg-dark"></div>
              <div class="line2 bg-dark"></div>
              <div class="line3 bg-dark"></div>
            </div>
          </p>
          <SearchIcon className="h-5 search__iconMobile cursor-pointer  sm:hidden xl:hidden lg:hidden" />

          <p className="cursor-pointer ">Deals</p>
          <p className="cursor-pointer">Cosmetics</p>
          <p className="">Gifts</p>

          <p className="hidden cursor-pointer lg:inline-flex">OTC</p>
          <p className="hidden cursor-pointern lg:inline-flex">
            Skincare & Beauty
          </p>
          <p className="hidden cursor-pointer lg:inline-flex">Baby</p>
          <p className="hidden cursor-pointer lg:inline-flex">For Men</p>
          <p className="hidden  cursor-pointerlg:inline-flex">Toolkits</p>
          <p className="hidden  cursor-pointerlg:inline-flex">
            Health & Personal Care
          </p>
        </div>

        {searchInput && <SearchDesktop searchInput={searchInput} />}
        {/* 
        <div className=" hidden searchMobileTab ">
          <SearchMobile />
        </div> */}
      </header>
      <div className="nav nav-links   bg-kenlink_blue-dark  pl-6 list-none uppercase space-y-2 absolute z-40  text-gray-900 ">
        {" "}
        <li>THE BRAND</li>
        <li>
          <p>
            &copy;<script>document.write(new Date().getFullYear());</script> All
            Rights Reserved.
          </p>
        </li>
      </div>
    </>
  );
};

export default Header;
