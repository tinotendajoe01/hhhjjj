import React from "react";
import Product from "../../models/Product";
import db from "../../utils/db";
import BannerName from "./SLICK/BannerName";
import Header from "../components/Header";

import { Store } from "../../utils/Store";
import Image from "next/image";
import NextLink from "next/link";
import {
  //
  HeartIcon,
} from "@heroicons/react/outline";
import {
  BookmarkIcon,
  HashtagIcon,
  PlusCircleIcon,
  StarIcon,
} from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import axios from "axios";
const all = ({ products }) => {
  const { state, dispatch } = useContext(Store);
  const { cart, userInfo } = state;
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
  const router = useRouter();
  return (
    <div className="App">
      <Header />
      <main>
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
              {products.map((product) => (
                <div key={product._id}>
                  <div className="rowMenuCard ">
                    <div className="imgBox ">
                      <img src={product.image} alt="" />
                    </div>
                    <h3>{product.name}</h3>
                    <i className="loadMenu">
                      <HeartIcon className="h-5" />
                    </i>
                  </div>
                </div>
              ))}
            </div>
            <div className="dishItemContainer  ">
              {products.map((product) => (
                <div key={product._id}>
                  <div className="itemCard" id={product._id}>
                    <div className="isFavourite">
                      <BookmarkIcon className="h-5" />
                    </div>

                    <div className="imgBox">
                      <img src={product.image} alt="" className="itemImg" />
                    </div>

                    <div className="itemContent">
                      <h3 className="itemName">{product.name}</h3>
                      <div className="">
                        <div className="ratings flex ">
                          {Array.apply(null, { length: 5 }).map((e, i) => (
                            <i key={i} className="rating">
                              <StarIcon className="h-5 text-kenlink_blue_dark" />
                            </i>
                          ))}
                        </div>
                        <div className="flex justify-between">
                          <h3 className="price">
                            <span>$ {product.price} </span>
                          </h3>
                          <i
                            className="addToCar"
                            onClick={() => addToCartHandler(product)}
                          >
                            <PlusCircleIcon className="h-5" />
                          </i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default all;
export async function getServerSideProps() {
  await db.connect();
  const products = await Product.find({}).lean();
  await db.disconnect();
  return {
    props: {
      products: products.map(db.convertDocToObj),
    },
  };
}
