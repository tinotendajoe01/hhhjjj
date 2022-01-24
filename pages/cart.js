import React, { useContext } from "react";
import dynamic from "next/dynamic";
import Layout from "../components/Layout";
import { Store } from "../utils/Store";
import NextLink from "next/link";
import Image from "next/image";
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
import {
  BookmarkIcon,
  HashtagIcon,
  PlusCircleIcon,
  StarIcon,
  XIcon,
} from "@heroicons/react/solid";
import axios from "axios";
import { useRouter } from "next/router";
import Header from "../components/Header";
function CartScreen() {
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;
  const updateCartHandler = async (item, quantity) => {
    const { data } = await axios.get(`/api/products/${item._id}`);
    if (data.countInStock < quantity) {
      window.alert("Sorry. Product is out of stock");
      return;
    }
    dispatch({ type: "CART_ADD_ITEM", payload: { ...item, quantity } });
  };
  const removeItemHandler = (item) => {
    dispatch({ type: "CART_REMOVE_ITEM", payload: item });
  };
  const checkoutHandler = () => {
    router.push("/shipping");
  };
  return (
    <>
      <Header />
      <Layout title="Shopping Bag">
        <main>
          <div className="text-center">
            <Typography component="h1" variant="h5">
              Your Shopping Bag
            </Typography>
          </div>
          {cartItems.length === 0 ? (
            <div>
              Your shopping bag is empty.{" "}
              <NextLink href="/" passHref>
                <Link>Let's go shopping!</Link>
              </NextLink>
            </div>
          ) : (
            <div className="mx-5">
              <Grid container spacing={1}>
                <Grid item md={9} xs={12}>
                  <TableContainer>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Image</TableCell>
                          <TableCell>Name</TableCell>
                          <TableCell align="right">Quantity</TableCell>
                          <TableCell align="right">Price</TableCell>
                          <TableCell align="right">Action</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {cartItems.map((item) => (
                          <TableRow key={item._id}>
                            <TableCell>
                              <NextLink href={`/product/${item.slug}`} passHref>
                                <Link>
                                  <Image
                                    src={item.image}
                                    alt={item.name}
                                    width={50}
                                    height={50}
                                  ></Image>
                                </Link>
                              </NextLink>
                            </TableCell>

                            <TableCell>
                              <NextLink href={`/product/${item.slug}`} passHref>
                                <Link>
                                  <Typography>{item.name}</Typography>
                                </Link>
                              </NextLink>
                            </TableCell>
                            <TableCell align="right">
                              <Select
                                value={item.quantity}
                                onChange={(e) =>
                                  updateCartHandler(item, e.target.value)
                                }
                              >
                                {[...Array(item.countInStock).keys()].map(
                                  (x) => (
                                    <MenuItem key={x + 1} value={x + 1}>
                                      {x + 1}
                                    </MenuItem>
                                  )
                                )}
                              </Select>
                            </TableCell>
                            <TableCell align="right">${item.price}</TableCell>
                            <TableCell align="right">
                              <Button
                                variant="contained"
                                color="prim\
                                ary"
                                className="button text-red-400"
                                name="remove"
                                onClick={() => removeItemHandler(item)}
                              >
                                <XIcon className="h-5 text-red-400" />
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Grid>
                <Grid item md={3} xs={12}>
                  <Card>
                    <List>
                      <ListItem>
                        <Typography variant="h6">
                          Subtotal (
                          {cartItems.reduce((a, c) => a + c.quantity, 0)} items)
                          : $
                          {cartItems.reduce(
                            (a, c) => a + c.quantity * c.price,
                            0
                          )}
                        </Typography>
                      </ListItem>
                      <ListItem>
                        <Button
                          onClick={checkoutHandler}
                          variant="contained"
                          color="primary"
                          fullWidth
                          className="butto"
                        >
                          Check Out
                        </Button>
                      </ListItem>
                    </List>
                  </Card>
                </Grid>
              </Grid>
            </div>
          )}
        </main>
      </Layout>
    </>
  );
}

export default dynamic(() => Promise.resolve(CartScreen), { ssr: false });
