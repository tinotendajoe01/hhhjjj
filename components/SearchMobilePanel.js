import { SearchIcon, XIcon } from "@heroicons/react/outline";
import { useState, useContext } from "react";
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
import { Store } from "../utils/Store";
import axios from "axios";
const SearchMobilePanel = (props) => {
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
  const { state, dispatch } = useContext(Store);
  const { cart, userInfo } = state;
  const products = props.products;
  const router = useRouter();
  const [searchInputMobile, setSearchInputMobile] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [query, setQuery] = useState("");
  const startSearchFilterMobile = (e) => {
    const searchInput = e.target.value.toLowerCase();
    setQuery(e.target.value);
    setWordEntered(searchInput);
    const newFilterMobile = products.filter((product) =>
      product.name.toLowerCase().includes(searchInput)
    );
    if (searchInput === "") {
      setSearchInputMobile([]);
    } else setSearchInputMobile(newFilterMobile);
  };
  const clearSearch = () => {
    setSearchInputMobile([]);
    setWordEntered("");
  };

  const runSearch = () => {
    router.push(`/search?query=${query}`);
  };
  return (
    <div className=" sm:hidden flex flex-col rounded-xl px-2 items-center mt-14 bg-white  mx-2 shadow-sm  list-none ">
      <div className=" flex items-center bg-gray-900 mt-2  shadow-sm  flex-grow w-full m  h-10 rounded-full  cursor-pointer ">
        <input
          onChange={startSearchFilterMobile}
          type="text"
          value={wordEntered}
          placeholder="Start your search"
          className="p-2 text-white mx-5 px-4 input  h-full w-6 flex-grow outline-none  rounded-full flex-shrink focus:outline-none bg-transparent"
        />

        {searchInputMobile.length === 0 ? (
          <SearchIcon onClick={runSearch} className="h-12 p-4 text-white " />
        ) : (
          <XIcon onClick={clearSearch} className="h-12 p-4 text-white " />
        )}
      </div>
      <div className="mb-2">
        <Grid item md={9} xs={12}>
          <TableContainer>
            <Table>
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

export default SearchMobilePanel;
