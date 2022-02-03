import React from "react";
import Product from "../models/Product";
import db from "../utils/db";
import BannerName from "../components/BannerName";
import Header from "../components/Header";
import dynamic from "next/dynamic";
import { Store } from "../utils/Store";
import Image from "next/image";
import NextLink from "next/link";
import {
  //
  HeartIcon,
  ShoppingBagIcon,
} from "@heroicons/react/outline";
import {
  BookmarkIcon,
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
import DebitCard from "../components/DebitCard";
import Layout from "../components/Layout";
import Cats from "../models/Cats";

const all = ({ topRatedProducts, cats, products }) => {
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

  return (
    <div className="App">
      <Header products={products} />
      <Layout title="Trending">
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
                {cats.map((product) => (
                  <div key={product._id}>
                    <div className="rowMenuCard border border-solid  border-kenlink_blue ">
                      <div className="imgBox ">
                        <img
                          src={product.image}
                          className="text-white"
                          alt=""
                        />
                      </div>
                      <h3>{product.name}</h3>
                      <i className="loadMenu">
                        {/* <HeartIcon className="h-5" /> */}
                      </i>
                    </div>
                  </div>
                ))}
              </div>

              <div className="dishItemContainere flex space-x-3 overflow-scroll scrollbar-hide  pl-1 pb-1  ">
                {topRatedProducts.map((product) => (
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

          <div className=" hidden   mr-10  mt-2  pr-5  rounded-md">
            {cartItems.length === 0 ? (
              <div className=" items-center ">
                Your bag is empty .{" "}
                <NextLink href="/" passHref>
                  <Link>Let's Go shopping</Link>
                </NextLink>
              </div>
            ) : (
              <>
                <Typography className="text-center uppercase" variant="h5">
                  Your Shopping Bag
                </Typography>

                <Grid item md={9} xs={12}>
                  <TableContainer>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Image</TableCell>
                          <TableCell>Name</TableCell>
                          <TableCell align="right">Quantity</TableCell>
                          <TableCell align="right">Price</TableCell>
                          <TableCell align="right">Action</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {cartItems.map((item) => (
                          <TableRow key={item._id}>
                            <TableCell>
                              <NextLink href={`/product/${item.slug}`} passHref>
                                <Link>
                                  <Image
                                    src={item.image}
                                    alt={item.name}
                                    width={50}
                                    height={50}
                                  ></Image>
                                </Link>
                              </NextLink>
                            </TableCell>

                            <TableCell>
                              <NextLink href={`/product/${item.slug}`} passHref>
                                <Link>
                                  <Typography>{item.name}</Typography>
                                </Link>
                              </NextLink>
                            </TableCell>
                            <TableCell align="right">
                              <Select
                                value={item.quantity}
                                onChange={(e) =>
                                  updateCartHandler(item, e.target.value)
                                }
                              >
                                {[...Array(item.countInStock).keys()].map(
                                  (x) => (
                                    <MenuItem key={x + 1} value={x + 1}>
                                      {x + 1}
                                    </MenuItem>
                                  )
                                )}
                              </Select>
                            </TableCell>
                            <TableCell align="right">${item.price}</TableCell>
                            <TableCell align="right">
                              <Button
                                onClick={() => removeItemHandler(item)}
                                variant="contained"
                                className="button text-red-400"
                                color="primary text-white"
                              >
                                <XIcon className="h-5 text-red-400" />
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Grid>
                <Grid>
                  <Card>
                    <List>
                      <ListItem>
                        <Typography variant="h5">
                          Subtotal (
                          {cartItems.reduce((a, c) => a + c.quantity, 0)} items)
                          : $
                          {cartItems.reduce(
                            (a, c) => a + c.quantity * c.price,
                            0
                          )}
                        </Typography>
                      </ListItem>
                      <ListItem>
                        <Button
                          onClick={checkoutHandler}
                          variant="contained"
                          color="primary"
                          fullWidth
                          className="buttn "
                        >
                          Check Out
                        </Button>
                      </ListItem>
                    </List>
                  </Card>
                </Grid>
              </>
            )}
          </div>
        </main>
      </Layout>
    </div>
  );
};

export default all;
export async function getServerSideProps() {
  await db.connect();
  const cats = await Cats.find({}).lean();
  const products = await Product.find({}).lean();

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
      cats: cats.map(db.convertDocToObj),
    },
  };
}
