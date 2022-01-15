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
} from "@heroicons/react/outline";
import HeaderItem from "./HeaderItem";

import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";
import { useContext, useState } from "react";
import InputRange from "react-input-range";
import RangeSlider from "./RangeSlider";
import { createAction } from "@reduxjs/toolkit";
import { Store } from "../../utils/Store";

const Header = ({ placeholder }) => {
  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  // const { data: session } = useSession();
  const router = useRouter();
  // const items = useSelector(selectItems);

  const [searchInput, setSearchInput] = useState("");
  console.log(searchInput);

  const runSearch = () => {
    router.push({
      pathname: "/search",
      query: {
        title: searchInput,
      },
    });
  };
  return (
    <header className="sticky top-0 bg-[#e0e0e0] z-50">
      <div className="flex flex-col sm:flex-row m-0 pt-5 shadow-xl justify-between items-center ">
        <div className="flex flex-grow justify-evenly max-w-2xl ">
          <div onClick={() => router.push("/")}>
            <HeaderItem title="HOME" Icon={HomeIcon} href="/" />
          </div>
          <NextLink href="/hot" passHref>
            <div>
              <HeaderItem title="HOT" Icon={LightningBoltIcon} />
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
          <div onClick={() => signIn()}>
            <HeaderItem title="Account" Icon={UserIcon} />
          </div>
        </div>
        <div className=" hidden sm:flex -mt-5 items-center shadow-sm border  h-10 rounded-full flex-grow cursor-pointer bg-white">
          <input
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            type="text"
            placeholder={placeholder || "Start your search"}
            className="p-2 input px-4 h-full w-6 flex-grow  rounded-full flex-shrink focus:outline-none bg-transparent"
          />
          {searchInput && (
            <TrashIcon onClick={(e) => setSearchInput("")} className="h-5" />
          )}
          <SearchIcon
            onClick={runSearch}
            className="h-12 p-4 "
            placeholder="Start Searching Meds"
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

      <div className="flex items-center space-x-3 pl-6 bg-kenlink_blue-dark text-white text-sm">
        <p className="link flex items-center">
          <MenuIcon className="h-6 mr-1" />
        </p>

        <p>Deals</p>
        <p className="">Cosmetics</p>
        <p className="">Gifts</p>
        {/* <div className="flex  relative bg-transparent rounded-full cursor-pointer flex-shrink shadow-sm sm:hidden lg:hidden xl:hidden">
          <input
            className=" rounded-full   pl-1  text-black outline-none "
            type="text"
            placeholder="lorem"
          />
          <SearchIcon
            onClick={runSearch}
            className="h-5 absolute text-black "
            placeholder="Start Searching Meds"
          />
        </div> */}
        <p className="hidden lg:inline-flex">OTC</p>
        <p className="hidden lg:inline-flex">Skincare & Beauty</p>
        <p className="hidden lg:inline-flex">Baby</p>
        <p className="hidden lg:inline-flex">For Men</p>
        <p className="hidden lg:inline-flex">Toolkits</p>
        <p className="hidden lg:inline-flex">Health & Personal Care</p>
      </div>
      {searchInput && (
        <div className="flex  items-center bg-white shadow-xl  list-none rounded-b-lg flex-col justify-self-end">
          {data.products.map((value, key) => (
            <li>{value.name}</li>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
