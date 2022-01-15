import Image from "next/image";
import NextLink from "next/link";

import axios from "axios";
import { useRouter } from "next/router";
import { useContext } from "react";
import { Store } from "../../utils/Store";

const MainProduct = ({
  name,
  price,
  id,
  description,
  category,
  image,
  slug,
  brand,
  rating,
  countInStock,
}) => {
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
    <div className="border bg-white rounded-xl">
      <NextLink href={`/product/${slug}`} passHref>
        <div className="relative rounded-2xl h-52 w-80 md:h-52 md:w-80 flex-shrink-0 z-30">
          <Image
            src={image}
            layout="fill"
            objectFit="contain"
            //   objectFit="cover"
            className="rounded-2xl"
          />
        </div>
      </NextLink>

      <h1 className="p-5">{name}</h1>
      <div className="flex justify-between pb-1 px-5">
        <h4 className="font-bold">${price}</h4>
        <button onClick={addToCartHandler} className="button">
          Add to Bag
        </button>
      </div>
    </div>
  );
};

export default MainProduct;
