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
import { SearchIcon, SearchCircleIcon } from "@heroicons/react/outline";
import { useState } from "react";
import data from "../../utils/data";
const SearchMobile = () => {
  const [searchInputMobile, setSearchInputMobile] = useState([]);
  const startSearchFilterMobile = (e) => {
    const searchWordMobile = e.target.value.toLowerCase();

    const newFilterMobile = data.products.filter((product) =>
      product.name.toLowerCase().includes(searchWordMobile)
    );
    if (searchWordMobile === "") {
      setSearchInputMobile([]);
    } else setSearchInputMobile(newFilterMobile);
  };

  const runSearchMobile = () => {
    router.push({
      pathname: "/search",
      query: {
        title: searchInputMobile,
      },
    });
  };
  return (
    <div className=" sm:hidden flex flex-col rounded-xl px-2 items-center bg-white mt-4 mx-2 shadow-sm  list-none ">
      <div className=" flex items-center bg-gray-900 mt-2  shadow-sm  flex-grow w-full m  h-10 rounded-full  cursor-pointer bg-white">
        <input
          onChange={startSearchFilterMobile}
          type="text"
          placeholder="Start your search"
          className="p-2 text-white mx-5 px-4 input  h-full w-6 flex-grow outline-none  rounded-full flex-shrink focus:outline-none bg-transparent"
        />
        <SearchIcon
          onClick={runSearchMobile}
          className="h-12 p-4 text-white "
        />
      </div>
      <div className="mb-2">
        <Grid item md={9} xs={12}>
          <TableContainer>
            <Table>
              {/* <TableHead>
                  <TableRow>
                    <TableCell>Image</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Quantity</TableCell>
                    <TableCell align="right">Price</TableCell>
                    <TableCell align="right">Action</TableCell>
                  </TableRow>
                </TableHead> */}
              <TableBody>
                {searchInputMobile.slice(0, 5).map((product) => (
                  <TableRow key={product._id}>
                    <TableCell>
                      <NextLink href={`/product/${product.slug}`} passHref>
                        <Link>
                          <Image
                            src={product.image}
                            alt={product.name}
                            width={50}
                            height={50}
                          ></Image>
                        </Link>
                      </NextLink>
                    </TableCell>

                    <TableCell>
                      <NextLink href={`/product/${product.slug}`} passHref>
                        <Link>
                          <Typography>{product.name}</Typography>
                        </Link>
                      </NextLink>
                    </TableCell>
                    <TableCell align="right">
                      <Select
                        value={product.quantity}
                        onChange={(e) =>
                          updateCartHandler(item, e.target.value)
                        }
                      >
                        {[...Array(product.countInStock).keys()].map((x) => (
                          <MenuItem key={x + 1} value={x + 1}>
                            {x + 1}
                          </MenuItem>
                        ))}
                      </Select>
                    </TableCell>
                    <TableCell align="right">${product.price}</TableCell>
                    <TableCell align="right">
                      <Button
                        onClick={() => addToCartHandler(product)}
                        variant="contained"
                        className="button"
                        color="primary"
                      >
                        Bag
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </div>
    </div>
  );
};

export default SearchMobile;
