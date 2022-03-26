import Image from "next/image";
import NextLink from "next/link";
import {
  Box,
  Button,
  Grid,
  List,
  ListItem,
  MenuItem,
  Select,
  Typography,
  FormControl,
  Input,
  InputLabel,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Link,
  Card,
} from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import Layout from "../../components/Layout";
import SchedulerWizard from "../../components/SchedulerWizard";
import db from "../../utils/db";
import { Store } from "../../utils/Store";
import Cookies from "js-cookie";
import useStyles from "../../utils/styles";
import Drug from "../../models/Drug";
import { Controller, useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import Header from "../../components/Header";
import { SearchIcon, XIcon } from "@heroicons/react/outline";
import { PlusCircleIcon } from "@heroicons/react/solid";
const index = ({ drugs }) => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const { state, dispatch } = useContext(Store);
  const router = useRouter();
  const [searchInputMobile, setSearchInputMobile] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [query, setQuery] = useState("");
  const startSearchFilterMobile = (e) => {
    const searchInput = e.target.value.toLowerCase();
    setQuery(e.target.value);
    setWordEntered(searchInput);
    const newFilterMobile = drugs.filter((drug) =>
      drug.name.toLowerCase().includes(searchInput)
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
  const { userInfo } = state;
  const classes = useStyles();
  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    getValues,
  } = useForm();
  const [selectedDrug, setSelecteDrug] = useState("");

  useEffect(() => {
    if (!userInfo) {
      router.push("/login?redirect=/support");
    } else {
      setSelecteDrug(Cookies.get("selectedDrug") || "");
    }
  }, []);

  const submitHandler = (e) => {
    closeSnackbar();
    e.preventDefault();
    if (!selectedDrug) {
      enqueueSnackbar("Select A drug Name", { variant: "error" });
    } else {
      dispatch({ type: "SAVE_DRUG_NAME", payload: selectedDrug });
      Cookies.set("selectedDrug", selectedDrug);
      router.push("/scheduler/dose");
    }
  };
  return (
    <>
      <Header />
      <Layout>
        <SchedulerWizard activeStep={1} />
        <div className="flex item-center  font-bold uppercase justify-center ">
          <h3>Search The Drug You Are Taking</h3>
        </div>
        <>
          <div className=" flex items-center bg-gray-900 mt-2  shadow-sm  flex-grow w-full m  h-10 rounded-full  cursor-pointer ">
            <input
              onChange={startSearchFilterMobile}
              type="text"
              value={wordEntered}
              placeholder="Enter Drug Name"
              className="p-2 text-white mx-5 px-4 input  h-full w-6 flex-grow outline-none  rounded-full flex-shrink focus:outline-none bg-transparent"
            />

            {searchInputMobile.length === 0 ? (
              <SearchIcon
                onClick={runSearch}
                className="h-12 p-4 text-white "
              />
            ) : (
              <XIcon onClick={clearSearch} className="h-12 p-4 text-white " />
            )}
          </div>{" "}
          <div className="mb-2">
            <Grid item md={9} xs={12}>
              <TableContainer>
                <Table>
                  <TableBody>
                    {searchInputMobile.slice(0, 5).map((drug) => (
                      <TableRow key={drug._id}>
                        <TableCell>
                          <NextLink href={`/support/${drug.slug}`} passHref>
                            <Link>
                              <Image
                                src={drug.image}
                                alt={drug.name}
                                width={50}
                                height={50}
                                objectFit="contain"
                                layout="responsive"
                              ></Image>
                            </Link>
                          </NextLink>
                        </TableCell>

                        <TableCell>
                          <NextLink href={`/support/${drug.slug}`} passHref>
                            <Link>
                              <Typography>{drug.name}</Typography>
                            </Link>
                          </NextLink>
                        </TableCell>
                        <TableCell align="right">
                          <NextLink href={`/support/${drug.slug}`} passHref>
                            <Link>
                              <PlusCircleIcon className="h-5" />
                            </Link>
                          </NextLink>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </div>
        </>
      </Layout>
    </>
  );
};

export default index;
export async function getServerSideProps() {
  await db.connect();

  const drugs = await Drug.find({}).lean();

  await db.disconnect();
  return {
    props: {
      drugs: drugs.map(db.convertDocToObj),
    },
  };
}
