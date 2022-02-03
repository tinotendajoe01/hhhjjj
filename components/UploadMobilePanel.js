import { SearchIcon, XIcon } from "@heroicons/react/outline";
import { UploadIcon } from "@heroicons/react/solid";
import { useState } from "react";
import Image from "next/image";
import NextLink from "next/link";
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
import data from "../utils/data";
import { useRouter } from "next/router";
const UploadMobilePanel = () => {
  const router = useRouter();

  return (
    <div className=" sm:hidden flex flex-col  px-2 items-center mt-14 mb-5 bg-white  mx-2   list-none ">
      <h1 className="font-semibold text-md">Send us your prescription</h1>
      <div
        className=" flex items-center bg-gray-900 mt-2 pb-7 
       shadow-sm  flex-grow w-full m  h-10 rounded-md  cursor-pointer "
      >
        <button
          disabled
          className=" text-white py-5  text-center input  h-full w-6 flex-grow outline-none  rounded-full 
        flex-shrink focus:outline-none bg-transparent"
        >
          <i>
            {" "}
            Upload Your Prescription Here{" "}
            <span className="text-red-900 uppercase ">
              🛑feature disabled🛑
            </span>{" "}
          </i>
        </button>

        {/* <div className=" text-white">
          {" "}
          <UploadIcon className="h-5  " />
        </div> */}
      </div>
    </div>
  );
};

export default UploadMobilePanel;
