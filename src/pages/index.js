import data from "../../utils/data";
import Header from "../components/Header";

import db from "../../utils/db";
import Product from "../../models/Product";
import Image from "next/image";
import NextLink from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import { useContext } from "react";
import { Store } from "../../utils/Store";
import SliderHero from "../components/SliderHero";
import { ShoppingBagIcon } from "@heroicons/react/solid";
import Featured from "../../models/Featured";
import Footer from "../components/Footer";
const Shop = ({ products, featured }) => {
  console.log(featured);
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
      <main className="max-w-7xl m-auto">
        <SliderHero />

        <section>
          <h2 className="pl-1 font-bold text-xl">Best Sellers</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide  pl-1 pb-1 ">
            {products?.map((product) => (
              <div className="border bg-[#F8F9FA] rounded-xl shadow-sm z-30">
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
          <h2 className="pl-1 mt-7 font-bold text-xl">Featured</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide  pl-1 pb-1 ">
            {products?.map((product) => (
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
          <h2 className="pl-1 mt-7 font-bold text-xl">Recommended</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide  pl-1 pb-1 ">
            {products?.map((product) => (
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

      <Footer />
    </>
  );
};

export default Shop;
export async function getServerSideProps() {
  await db.connect();
  const products = await Product.find({}).lean();

  const featured = await Featured.find({}).lean();

  await db.disconnect();

  return {
    props: {
      products: products.map(db.convertDocToObj),
      featured: featured.map(db.convertDocToObj),
    },
  };
}
