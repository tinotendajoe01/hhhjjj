import React from "react";
import Product from "../models/Product";
import db from "../utils/db";
import BannerName from "../components/BannerName";
import Header from "../components/Header";
import dynamic from "next/dynamic";
import { Store } from "../utils/Store";
import Image from "next/image";
import NextLink from "next/link";
import { HeartIcon, ShoppingBagIcon } from "@heroicons/react/outline";
import {
  BookmarkIcon,
  ChatAlt2Icon,
  HashtagIcon,
  PlusCircleIcon,
  StarIcon,
  XIcon,
} from "@heroicons/react/solid";
import {
  Grid,
  TableContainer,
  Table,
  Typography,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Link,
  Select,
  MenuItem,
  Button,
  Card,
  List,
  ListItem,
} from "@material-ui/core";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import axios from "axios";

import Layout from "../components/Layout";
import Options from "../models/Options";

const Account = ({ topRatedProducts, accountOptions }) => {
  const { state, dispatch } = useContext(Store);
  const {
    cart: { cartItems },
    userInfo,
  } = state;
  const addToCartHandler = async (product) => {
    const existItem = state.cart.cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${product._id}`);
    if (data.countInStock < quantity) {
      window.alert("Sorry. Product is out of stock");
      return;
    }

    dispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity } });
    // router.push("/cart");
  };
  const router = useRouter();

  //update bag quantity
  const updateCartHandler = async (item, quantity) => {
    const { data } = await axios.get(`/api/products/${item._id}`);
    if (data.countInStock < quantity) {
      window.alert("Sorry. Product is out of stock");
      return;
    }
    dispatch({ type: "CART_ADD_ITEM", payload: { ...item, quantity } });
  };
  const removeItemHandler = (item) => {
    dispatch({ type: "CART_REMOVE_ITEM", payload: item });
  };
  const checkoutHandler = () => {
    router.push("/shipping");
  };

  const routing = async (option) => {
    router.push(`/${option.name}`);
    console.log(option.name);
  };

  return (
    <div className="App">
      <Header />
      <Layout title="Account">
        <main className="flex  ">
          <div className=" mainContainer ">
            {/* Banner  */}
            <div className="banner shadow-lg border-2 border-gray-900">
              {userInfo ? (
                <BannerName name={userInfo.name} discount={"20"} more={"#"} />
              ) : (
                <BannerName name={"there!"} discount={"20"} more={"#"} />
              )}

              <img src="/favico.svg" alt="" className="deliveryPic" />
            </div>

            <div className="dishContainer">
              <div className="rowContainer">
                {accountOptions.map((option) => (
                  <div key={option._id} onClick={() => routing(option)}>
                    <div className="rowMenuCard border border-solid  border-kenlink_blue ">
                      <div className="imgBox ">
                        <img src={option.image} className="text-white" alt="" />
                      </div>
                      <h3>{option.name}</h3>
                      <i className="loadMenu">
                        {/* <HeartIcon className="h-5" /> */}
                      </i>
                    </div>
                  </div>
                ))}
              </div>

              <div className="dishItemContainere flex space-x-3 overflow-scroll scrollbar-hide  pl-1 pb-1  "></div>
            </div>
            <div class="grid grid-flow-col grid-rows-2 grid-cols-3 gap-8">
              <div className="bg-green-400 rounded-lg">
                <Image src="/favico.svg" height={100} width={100} alt="" />
              </div>
              <div class="col-start-3 bg-black rounded-lg">
                <Image src="/favico.svg" height={50} width={50} alt="" />
              </div>
              <div className="bg-red-400 rounded-lg">
                <Image src="/favico.svg" height={50} width={50} alt="" />
              </div>
              <div className="bg-yellow-400 rounded-lg">
                <Image src="/favico.svg" height={50} width={50} alt="" />
              </div>
              <div class="row-start-1 col-start-2 col-span-2 bg-black rounded-lg">
                <Image src="/favico.svg" height={50} width={50} alt="" />
              </div>
            </div>
            <div
              className="sticky absolute bottom-2 z-30  flex-none flex items-center justify-center
             w-14 h-14 rounded-full text-violet-600 bg-black shadow-2xl hover:animate-bounce cursor-pointer"
            >
              <ChatAlt2Icon className="h-10 text-white " />
            </div>
          </div>
        </main>
      </Layout>
    </div>
  );
};

export default Account;
export async function getServerSideProps() {
  await db.connect();
  const accountOptions = await Options.find({}).lean();
  const topRatedProductsDocs = await Product.find({}, "-reviews")
    .lean()
    .sort({
      rating: -1,
    })
    .limit(6);
  await db.disconnect();
  return {
    props: {
      topRatedProducts: topRatedProductsDocs.map(db.convertDocToObj),
      accountOptions: accountOptions.map(db.convertDocToObj),
    },
  };
}
