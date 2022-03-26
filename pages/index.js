import React, { useEffect } from "react";
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
  CardContent,
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

const Account = ({ topRatedProducts, accountOptions, products }) => {
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
  useEffect(() => {
    if (!userInfo) {
      router.push("/login?redirect=/");
    }
  }, []);
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
    router.push(`/${option.url}`);
  };

  return (
    <div className="App">
      <Header products={products} />{" "}
      <Layout title="Account">
        <main className=" max-w-xl mx-auto ">
          <div className=" mainContainer ">
            {/* Banner  */}
            <div className="banner shadow-lg border-2 border-gray-900">
              {userInfo ? (
                <BannerName name={userInfo.name} discount={"30"} more={"#"} />
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
            </div>
            <div className="flex space-x-3 overflow-scroll scrollbar-hide text-black  pl-1 pb-1 ">
              <div className="border relative  bg-image2  h-40 w-40  rounded-xl shadow-sm z-30">
                <div className="absolute  bottom-0 left-0 right-0 m-1 p-2 rounded-xl flex flex-col bg-white">
                  <h6 className="font-bold">Remedies</h6>
                  <p className="text-xs">
                    Winter is comming! Be prepared to fight...
                  </p>
                </div>
              </div>
              <div className="border  relative bg-image  h-40 w-40  rounded-xl shadow-sm z-30">
                {" "}
                <div className="absolute bottom-0 left-0 right-0 m-1 p-2 rounded-xl flex flex-col bg-white">
                  <h6 className="font-bold">Alerts</h6>
                  <p className="text-xs">Free immunization held on...</p>
                </div>
              </div>{" "}
              <div className="border hidden sm:flex  relative  bg-image2  h-40 w-40  rounded-xl shadow-sm z-30">
                <div className="absolute  bottom-0 left-0 right-0 m-1 p-2 rounded-xl flex flex-col bg-white">
                  <h6 className="font-bold">Remedies</h6>
                  <p className="text-xs">
                    Winter is comming! Be prepared to fight...
                  </p>
                </div>
              </div>
            </div>{" "}
            <div>
              {" "}
              <div
                className="flex justify-evenly space-x-3 
              rounded-xl text-black my-5 py-3 border-[1px] "
              >
                {" "}
                <div>DRUGS</div> <div>NOTES</div>{" "}
                <div className="coolbtn">SCORE</div>
              </div>{" "}
              <div
                className="flex justify-evenly space-x-3 items-center
              rounded-xl text-black my-5 py-3 border-[1px]"
              >
                {" "}
                <div>FMH</div> <div>PSMI</div>{" "}
                <div className="coolbtn">CIMAS</div>
              </div>{" "}
              <div
                className="flex justify-evenly  bg-kenlink_blue 
              rounded-xl text-white my-5 w-[75%] py-3 border-[1px]"
              >
                {" "}
                <div>DEDUCTABLES</div> <div>COPAYS</div> <div>PRIME</div>
              </div>
            </div>
          </div>
          <div
            className="absolute right-0 bottom-[35px] z-50 m-3  flex-none flex items-center justify-center
             w-14 h-14 rounded-full text-violet-600 bg-white shadow-2xl hover:animate-bounce cursor-pointer"
          >
            {" "}
            <ChatAlt2Icon className="h-10 text-kenlink_green sticky " />
          </div>
        </main>
      </Layout>
    </div>
  );
};

export default Account;
export async function getServerSideProps() {
  await db.connect();
  const products = await Product.find({}, "-reviews").lean();

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
      products: products.map(db.convertDocToObj),

      topRatedProducts: topRatedProductsDocs.map(db.convertDocToObj),
      accountOptions: accountOptions.map(db.convertDocToObj),
    },
  };
}
