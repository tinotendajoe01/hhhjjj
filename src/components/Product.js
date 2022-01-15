import Image from "next/image";
import { useState } from "react";
import {
  StarIcon,
  ShoppingBagIcon,
  HeartIcon,
  PlusCircleIcon,
} from "@heroicons/react/outline";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";
import { useRouter } from "next/router";
import { addToProductDetails } from "../slices/productDetailsSlice";

const MAX_RATING = 5;
const MIN_RATING = 1;
const Product = ({ id, title, price, description, category, image }) => {
  const router = useRouter();

  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );
  const [hasPrime] = useState(Math.random() < 0.5);

  //basket logic
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    //push item into the store
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
      hasPrime,
      rating,
    };
    //sending product as action to redux store.. basket slice
    dispatch(addToBasket(product));
  };
  const addProductInfoToDetails = () => {
    router.push({
      pathname: "/productDetails",
      query: {
        title: title,
      },
    });
    const info = {
      id,
      title,
      price,
      description,
      category,
      image,
      hasPrime,
      rating,
    };
    dispatch(addToProductDetails(info));
  };
  return (
    <div className="relative flex m-5 bg-white flex-col z-30  p-5 ">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>
      <Image src={image} height={150} width={150} objectFit="contain" />
      <h4
        onClick={addProductInfoToDetails}
        className="my-3 font-semibold cursor-pointer "
      >
        {title}
      </h4>

      <p className="text-xs my-2 line-clamp-2 font-semibold">{description}</p>
      <div className="mb-5 font-bold">
        <Currency quantity={price} />
      </div>

      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5">
          <img className="w-12 " src="https://links.papareact.com/fdw" />
          <p className="text-xs text-gray-500">Free Next-day delivery</p>
        </div>
      )}
      <div className="flex pb-2">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className="h-5 text-black-500" />
          ))}
      </div>

      <button
        onClick={addItemToBasket}
        className="mt-auto button flex items-center justify-center "
      >
        Add to Bag {""}
        <ShoppingBagIcon className="h-4" />
      </button>
    </div>
  );
};

export default Product;
