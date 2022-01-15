import { Link } from "@material-ui/core";
import NextLink from "next/link";
import Image from "next/image";
import Header from "../../components/Header";
import Product from "../../../models/Product";
import db from "../../../utils/db";
import axios from "axios";

import { Store } from "../../../utils/Store";
import { useContext } from "react";
import { useRouter } from "next/router";
import { ArrowLeftIcon, BackspaceIcon } from "@heroicons/react/solid";

const productScreen = ({ product }) => {
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  if (!product) {
    <div>Product Not Found</div>;
  }
  const addToCartHandler = async () => {
    const existItem = state.cart.cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${product._id}`);

    if (data.countInStock < quantity) {
      window.alert("Sorry,Product is out of stock");
      return;
    }

    dispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity } });
    router.push("/cart");
  };
  return (
    <div>
      <Header />
      <div title={product.name} description={product.description}>
        <div className="mt-10 mb-10">
          <NextLink href="/" passHref>
            <Link>
              <ArrowLeftIcon className="h-5 text-kenlink_blue-dark" />
            </Link>
          </NextLink>
        </div>
        <div className="flex flex-col sm:flex-row   justify-between items-center max-w-5xl m-auto">
          <div className="relative p-2  h-52 w-60 md:h-80 md:w-80 lg:h-80  border bg-[#F8F9FA] rounded-xl shadow-sm   ">
            <Image
              src={product.image}
              alt={product.name}
              width={80}
              height={70}
              layout="responsive"
              src={product.image}
              alt={product.name}
              layout="responsive"
            />
          </div>

          <div className=" border-l-8 mt-4  ">
            <div className="flex flex-col justify-start font-bold flex-1 ">
              <h1 className="">
                Name:
                <span className="ml-10">{product.name}</span>
              </h1>
              <p>
                Category:
                <span className="ml-10">{product.category}</span>
              </p>
              <p>
                Brand: <span className="ml-10">{product.brand}</span>
              </p>
              <p>
                Rating:
                <span className="ml-10">
                  {product.rating} stars({product.numReviews} reviews)
                </span>
              </p>
              <p>
                Description:{" "}
                <span className="ml-10">{product.description}</span>
              </p>
            </div>
          </div>
          <div
            className="flex flex-grow flex-col font-semibold  justify-self-start sm:flex-grow-0 mt-4 
        
            "
          >
            <i>
              Price:{" "}
              <span className="ml-10 font-semibold">${product.price}</span>{" "}
            </i>
            <i>
              Product is
              <span className=" ml-1">
                {product.countInStock > 0 ? "In stock" : "Unavailable"}
              </span>
            </i>
            <div>
              <button onClick={addToCartHandler} className="button">
                Add to bag
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default productScreen;

export async function getServerSideProps(context) {
  const { params } = context;
  const { slug } = params;
  await db.connect();
  const product = await Product.findOne({ slug }).lean();
  await db.disconnect();
  return {
    props: {
      product: db.convertDocToObj(product),
    },
  };
}
