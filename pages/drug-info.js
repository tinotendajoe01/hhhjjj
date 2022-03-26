import React, { useEffect } from "react";
import Product from "../models/Product";
import db from "../utils/db";
import BannerName from "../components/BannerName";
import Header from "../components/Header";
import dynamic from "next/dynamic";
import { Store } from "../utils/Store";
import Image from "next/image";
import NextLink from "next/link";
import {
  HeartIcon,
  SearchIcon,
  ShoppingBagIcon,
} from "@heroicons/react/outline";
import {
  BookmarkIcon,
  ChatAlt2Icon,
  HashtagIcon,
  PlusCircleIcon,
  StarIcon,
  XIcon,
} from "@heroicons/react/solid";
import {
  Grid,
  TableContainer,
  Table,
  Typography,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  CardContent,
  Link,
  Select,
  MenuItem,
  Button,
  Card,
  List,
  ListItem,
  ListItemText,
  CardActions,
} from "@material-ui/core";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import axios from "axios";

import Layout from "../components/Layout";
import Options from "../models/Options";
import Sidebar from "../components/ddic/Sidebar";

const drugInfoScreen = ({ products }) => {
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;
  const router = useRouter();
  useEffect(() => {
    if (!userInfo) {
      router.push("/login?redirect=/");
    }
  }, []);
  return (
    <>
      <Header />
      <Layout title="Drug info">
        <Grid container spacing={1}>
          <Grid item md={2} xs={12}>
            <Card>
              <List>
                <NextLink href="/admin/dashboard" passHref>
                  <ListItem selected button component="a">
                    <ListItemText primary="DDIC"></ListItemText>
                  </ListItem>
                </NextLink>
                <NextLink href="/admin/orders" passHref>
                  <ListItem button component="a">
                    <ListItemText primary="QUERIES"></ListItemText>
                  </ListItem>
                </NextLink>
                <NextLink href="/admin/products" passHref>
                  <ListItem button component="a">
                    <ListItemText primary="JOURNALS"></ListItemText>
                  </ListItem>
                </NextLink>
                <NextLink href="/admin/users" passHref>
                  <ListItem button component="a">
                    <ListItemText primary="COMMUNITY"></ListItemText>
                  </ListItem>
                </NextLink>
              </List>
            </Card>
          </Grid>
          <Grid item md={6} xs={12}>
            <Card>
              <List>
                <ListItem>
                  <Grid container spacing={5}>
                    <Grid item md={3}>
                      <Card raised>
                        <CardContent>
                          <Typography variant="h1"></Typography>
                          <Typography>ADR</Typography>
                        </CardContent>
                        <CardActions>
                          <NextLink href="#" passHref>
                            <Button size="small" color="danger">
                              <p className="text-red-600"> REPORT</p>
                            </Button>
                          </NextLink>
                        </CardActions>
                      </Card>
                    </Grid>
                    <Grid item md={3}>
                      <Card raised>
                        <CardContent>
                          <Typography variant="h1"></Typography>
                          <Typography>QUIRIES</Typography>
                        </CardContent>
                        <CardActions>
                          <NextLink href="/dic/" passHref>
                            <Button size="small" color="secondary">
                              ASK
                            </Button>
                          </NextLink>
                        </CardActions>
                      </Card>
                    </Grid>
                    <Grid item md={3}>
                      <Card raised>
                        <CardContent>
                          <Typography variant="h1"></Typography>
                          <Typography>DDICs</Typography>
                        </CardContent>
                        <CardActions>
                          <NextLink href="#" passHref>
                            <Button size="small" color="primary">
                              CONNECT
                            </Button>
                          </NextLink>
                        </CardActions>
                      </Card>
                    </Grid>
                    <Grid item md={3}>
                      <Card raised>
                        <CardContent>
                          <Typography variant="h1"></Typography>
                          <Typography>CHAT</Typography>
                        </CardContent>
                        <CardActions>
                          <NextLink href="/admin/users" passHref>
                            <Button size="small" color="primary">
                              Online
                            </Button>
                          </NextLink>
                        </CardActions>
                      </Card>
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem>
                  <section className="  w-full ">
                    <h6 className="uppercase font-bold">BINDURA FAQS</h6>
                    <details className="border p-2 faq-pad">
                      <summary className="faq-question font-size-14">
                        <b>How do I upload my prescription online?</b>
                      </summary>
                      <p className="faq-answer font-size-12 ml-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolorum, numquam laudantium eius blanditiis libero ex?
                      </p>
                    </details>
                    <details className="border p-2 faq-pad">
                      <summary className="faq-question font-size-14">
                        <b>How do I upload my prescription online?</b>
                      </summary>
                      <p className="faq-answer font-size-12 ml-3">
                        Firstly take a picture of your prescription. Ensure that
                        it is a good quality picture and you can see all of the
                        information. Fill in this form and attach the picture.
                        Once this is complete you will be able to submit your
                        prescription.
                      </p>
                    </details>
                    <details className="border p-2 faq-pad">
                      <summary className="faq-question font-size-14">
                        <b>Can i place an order over the phone?</b>
                      </summary>
                      <p class="faq-answer font-size-12 ml-3">
                        Yes, you can. Please place the order by phone and our
                        staff will call you when the order is ready.
                      </p>
                    </details>
                    <details class="border p-2 faq-pad">
                      <summary class="faq-question font-size-14">
                        <b>How will i know the upload has been successful?</b>
                      </summary>
                      <p class="faq-answer font-size-12 ml-3">
                        You will see a confirmation message after you have
                        successfuly uploaded your prescription and our
                        pharmacist will call you once it is ready.
                      </p>
                    </details>
                    <details class="border p-2 faq-pad">
                      <summary class="faq-question font-size-14">
                        <b>Are my personal details secure?</b>
                      </summary>
                      <p class="faq-answer font-size-12 ml-3">
                        Yes your information is completely secure and will not
                        be shared outside . Please see our privacy policy for
                        details.
                      </p>
                    </details>{" "}
                    <details className="border p-2 faq-pad">
                      <summary className="faq-question font-size-14">
                        <b>How do I upload my prescription online?</b>
                      </summary>
                      <p className="faq-answer font-size-12 ml-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolorum, numquam laudantium eius blanditiis libero ex?
                      </p>
                    </details>{" "}
                    <details className="border p-2 faq-pad">
                      <summary className="faq-question font-size-14">
                        <b>How do I upload my prescription online?</b>
                      </summary>
                      <p className="faq-answer font-size-12 ml-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolorum, numquam laudantium eius blanditiis libero ex?
                      </p>
                    </details>{" "}
                    <details className="border p-2 faq-pad">
                      <summary className="faq-question font-size-14">
                        <b>How do I upload my prescription online?</b>
                      </summary>
                      <p className="faq-answer font-size-12 ml-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolorum, numquam laudantium eius blanditiis libero ex?
                      </p>
                    </details>
                  </section>
                </ListItem>
              </List>
            </Card>
          </Grid>{" "}
          <Grid item md={4} xs={12}>
            <Card>
              <CardContent>
                <div className=" flex  items-center shadow-sm border border-gray-900  h-10 rounded-full flex-grow cursor-pointer bg-gray-900">
                  <input
                    type="text"
                    placeholder="Search by name..."
                    className="p-2 text-white input px-4 h-full w-6 flex-grow  rounded-full flex-shrink focus:outline-none bg-transparent"
                  />

                  <SearchIcon className="h-12 p-4 text-white " />

                  <XIcon className="h-12 p-4 text-white " />
                </div>
              </CardContent>
            </Card>
            <Card className="mt-[20px]  overflow-scroll  bg-white text-[#6a5d5d]">
              <CardContent>
                {" "}
                <tr className=" flex justify-around items-center cursor-pointer ">
                  <td className="p-[0.5rem] border-none">DRUG NAME:</td>
                  <td>
                    <NextLink href={`/drugInfo/`} passHref>
                      <strong>lorem4</strong>
                    </NextLink>
                  </td>
                </tr>{" "}
                <tr className="  bg-[#f3f2f8] text-black flex items-center justify-around">
                  <td className="p-[0.5rem] border-none">DRUG DOSE:</td>
                  <td>
                    <strong>lorem4</strong>
                  </td>
                </tr>{" "}
                <tr className=" flex justify-around items-center">
                  <td className="p-[0.5rem] border-none">TIMES PER DAY:</td>
                  <td>
                    <strong>lorem4 times</strong>
                  </td>
                </tr>{" "}
                <tr className=" flex bg-[#f3f2f8] items-center text-black justify-around">
                  <td className="p-[0.5rem] border-none">DURATION:</td>
                  <td>
                    <strong>lorem4 days</strong>
                  </td>
                </tr>{" "}
                <tr className=" flex justify-around items-center">
                  <td className="p-[0.5rem] border-none">STARTING ON:</td>
                  <td>
                    <strong>lorem4</strong>
                  </td>
                </tr>{" "}
                <tr className=" flex justify-around items-center cursor-pointer ">
                  <td className="p-[0.5rem] border-none">DRUG NAME:</td>
                  <td>
                    <NextLink href={`/drugInfo/`} passHref>
                      <strong>lorem4</strong>
                    </NextLink>
                  </td>
                </tr>{" "}
                <tr className="  bg-[#f3f2f8] text-black flex items-center justify-around">
                  <td className="p-[0.5rem] border-none">DRUG DOSE:</td>
                  <td>
                    <strong>lorem4</strong>
                  </td>
                </tr>{" "}
                <tr className=" flex justify-around items-center">
                  <td className="p-[0.5rem] border-none">TIMES PER DAY:</td>
                  <td>
                    <strong>lorem4 times</strong>
                  </td>
                </tr>{" "}
                <tr className=" flex bg-[#f3f2f8] items-center text-black justify-around">
                  <td className="p-[0.5rem] border-none">DURATION:</td>
                  <td>
                    <strong>lorem4 days</strong>
                  </td>
                </tr>{" "}
                <tr className=" flex justify-around items-center">
                  <td className="p-[0.5rem] border-none">STARTING ON:</td>
                  <td>
                    <strong>lorem4</strong>
                  </td>
                </tr>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Layout>
    </>
  );
};

export default drugInfoScreen;
export async function getServerSideProps() {
  await db.connect();
  const products = await Product.find({}, "-reviews").lean();

  const accountOptions = await Options.find({}).lean();
  const topRatedProductsDocs = await Product.find({}, "-reviews")
    .lean()
    .sort({
      rating: -1,
    })
    .limit(6);
  await db.disconnect();
  return {
    props: {
      products: products.map(db.convertDocToObj),

      topRatedProducts: topRatedProductsDocs.map(db.convertDocToObj),
      accountOptions: accountOptions.map(db.convertDocToObj),
    },
  };
}
