import Image from "next/image";
import { BookmarkIcon, HashtagIcon } from "@heroicons/react/outline";
import { HeartIcon } from "@heroicons/react/outline";
const SearchProduct = ({
  id,
  title,
  price,
  rating,
  description,
  category,
  image,
  hasPrime,
}) => {
  return (
    <div
      className="flex py-7 px-2 pr-4 bg-gray-100 rounded-lg border-b cursor-pointer
     hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t"
    >
      <div className="relative h-60 w-60 md:h-52 md:w-80 flex-shrink-0 z-30">
        <Image
          src={image}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between ">
          <p className="">{title}</p>
          <HeartIcon className="h-7 cursor-pointer" />
        </div>
        <h4 className=" line-clamp-1 text-sm">{description}</h4>
        <div className="border-b border-white  w-10 pt-2" />

        <p className="pt-2 text-sm text-gray-700 flex-grow">{category}</p>
        <div className="flex justify-between items-end pt-5">
          <p className="flex items-center">
            <BookmarkIcon className="h-5 text-red-400" />
          </p>
          <div>
            <p className="text-lg font-semibold pb-2 lg:text-2xl">{price}</p>
            <p className="text-right font-extralight">{price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchProduct;
