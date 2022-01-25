/* eslint-disable @next/next/no-img-element */
import NextLink from "next/link";
import { Grid, Link, Typography } from "@material-ui/core";
import Layout from "../components/Layout";
import db from "../utils/db";
import Product from "../models/Product";
import axios from "axios";
import { useRouter } from "next/router";
import { useContext } from "react";
import { Store } from "../utils/Store";

import Header from "../components/Header";

import Image from "next/image";
import { ShoppingBagIcon } from "@heroicons/react/solid";
import SliderHero from "../components/SliderHero";

import Rating from "@material-ui/lab/Rating";

export default function Home({ topRatedProducts, featuredProducts }) {
  const router = useRouter();
  const { state, dispatch } = useContext(Store);

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
  return (
    <>
      <Header />
      <Layout description="lorem">
        <main className="max-w-7xl m-auto">
          <SliderHero />
          <section>
            <div className="pl-1 font-bold text-xl">
              <Typography className="pl-1 font-bold text-xl " variant="h5">
                Best Sellers
              </Typography>
            </div>
            <div className="flex space-x-3 overflow-scroll scrollbar-hide  pl-1 pb-1 ">
              {topRatedProducts?.map((product) => (
                <div className="border bg-[#F8F9FA] rounded-xl shadow-sm z-30">
                  <NextLink href={`/product/${product.slug}`} passHref>
                    <div className="relative rounded-2xl h-20 w-40 md:h-52 md:w-80 flex-shrink-0 z-30">
                      <Image
                        src={product.image}
                        layout="fill"
                        objectFit="contain"
                        className="rounded-2xl"
                      />
                    </div>
                  </NextLink>

                  <div className=" flex flex-col items-center ">
                    <h1 className="">{product.name}</h1>
                    <Rating value={product.rating} readOnly></Rating>

                    <h4 className="font-bold">${product.price}</h4>
                  </div>

                  <div className="flex items-center pb-1 justify-center">
                    <button
                      onClick={() => addToCartHandler(product)}
                      className="button mt-auto flex items-center"
                    >
                      Bag
                      <span>
                        <ShoppingBagIcon className="h-4 " />
                      </span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <Typography className="pl-1 font-bold text-xl " variant="h5">
              Featured
            </Typography>
            <div className="flex space-x-3 overflow-scroll scrollbar-hide  pl-1 pb-1 ">
              {featuredProducts?.map((product) => (
                <div className="border bg-transparent rounded-xl shadow-sm ">
                  <NextLink href={`/product/${product.slug}`} passHref>
                    <div className="relative rounded-2xl h-20 w-40 md:h-52 md:w-80 flex-shrink-0 z-30">
                      <Image
                        src={product.image}
                        layout="fill"
                        objectFit="contain"
                        //   objectFit="cover"
                        className="rounded-2xl"
                      />
                    </div>
                  </NextLink>

                  <div className=" flex flex-col items-center ">
                    <h1 className="">{product.name}</h1>
                    <Rating value={product.rating} readOnly></Rating>

                    <h4 className="font-bold">${product.price}</h4>
                  </div>

                  <div className="flex items-center pb-1 justify-center">
                    <button
                      onClick={() => addToCartHandler(product)}
                      className="button"
                    >
                      Bag
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <section>
            <Typography className="pl-1 font-bold text-xl " variant="h5">
              Recommended
            </Typography>
            <div className="flex space-x-3 overflow-scroll scrollbar-hide  pl-1 pb-1 ">
              {featuredProducts?.map((product) => (
                <div className="border bg-transparent rounded-xl shadow-sm ">
                  <NextLink href={`/product/${product.slug}`} passHref>
                    <div className="relative rounded-2xl h-20 w-40 md:h-52 md:w-80 flex-shrink-0 z-30">
                      <Image
                        src={product.image}
                        layout="fill"
                        objectFit="contain"
                        //   objectFit="cover"
                        className="rounded-2xl"
                      />
                    </div>
                  </NextLink>

                  <div className=" flex flex-col items-center ">
                    <h1 className="">{product.name}</h1>
                    <Rating value={product.rating} readOnly></Rating>

                    <h4 className="font-bold">${product.price}</h4>
                  </div>

                  <div className="flex items-center pb-1  justify-center">
                    <button
                      onClick={() => addToCartHandler(product)}
                      className="button"
                    >
                      Bag
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  await db.connect();
  const featuredProductsDocs = await Product.find(
    { isFeatured: true },
    "-reviews"
  )
    .lean()
    .limit(3);
  const topRatedProductsDocs = await Product.find({}, "-reviews")
    .lean()
    .sort({
      rating: -1,
    })
    .limit(6);
  await db.disconnect();
  return {
    props: {
      featuredProducts: featuredProductsDocs.map(db.convertDocToObj),
      topRatedProducts: topRatedProductsDocs.map(db.convertDocToObj),
    },
  };
}
