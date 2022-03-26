import React, { useContext, useEffect, useReducer } from "react";
import dynamic from "next/dynamic";
import Layout from "../../components/Layout";
import { Store } from "../../utils/Store";
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
  CircularProgress,
  Button,
  Card,
  List,
  ListItem,
  CardContent,
} from "@material-ui/core";
import axios from "axios";
import { useRouter } from "next/router";
import useStyles from "../../utils/styles";
import { useSnackbar } from "notistack";
import { getError } from "../../utils/error";
import Header from "../../components/Header";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import Product from "../../models/Product";
import db from "../../utils/db";

function reducer(state, action) {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true, error: "" };
    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        prescription: action.payload,
        error: "",
      };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    case "PAY_REQUEST":
      return { ...state, loadingPay: true };
    case "PAY_SUCCESS":
      return { ...state, loadingPay: false, successPay: true };
    case "PAY_FAIL":
      return { ...state, loadingPay: false, errorPay: action.payload };
    case "PAY_RESET":
      return { ...state, loadingPay: false, successPay: false, errorPay: "" };
    case "DELIVER_REQUEST":
      return { ...state, loadingDeliver: true };
    case "DELIVER_SUCCESS":
      return { ...state, loadingDeliver: false, successDeliver: true };
    case "DELIVER_FAIL":
      return { ...state, loadingDeliver: false, errorDeliver: action.payload };
    case "DELIVER_RESET":
      return {
        ...state,
        loadingDeliver: false,
        successDeliver: false,
        errorDeliver: "",
      };
    default:
      state;
  }
}

function Prescription({ params, products }) {
  const prescriptionId = params.id;
  const classes = useStyles();
  const router = useRouter();
  const { state } = useContext(Store);
  const { userInfo } = state;

  const [
    {
      loading,
      error,
      prescription,
      successPay,
      loadingDeliver,
      successDeliver,
    },
    dispatch,
  ] = useReducer(reducer, {
    loading: true,
    prescription: {},
    error: "",
  });

  const { prescriptionDetails, patientDetails } = prescription;
  console.log(prescription);
  console.log(prescriptionDetails);
  console.log(patientDetails);
  useEffect(() => {
    if (!userInfo) {
      return router.push("/login");
    }
    const fetchPrescription = async () => {
      try {
        dispatch({ type: "FETCH_REQUEST" });
        const { data } = await axios.get(
          `/api/prescriptions/${prescriptionId}`,
          {
            headers: { authorization: `Bearer ${userInfo.token}` },
          }
        );
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: getError(err) });
      }
    };
    if (
      !prescription._id ||
      (prescription._id && prescription._id !== prescriptionId)
    ) {
      fetchPrescription();
    }
  }, [prescription, successPay, successDeliver]);
  const { enqueueSnackbar } = useSnackbar();

  function onError(err) {
    enqueueSnackbar(getError(err), { variant: "error" });
  }

  return (
    <>
      <Header products={products} />
      <Layout title={`Prescription ${prescriptionId}`}>
        <div className="max-w-7xl mx-auto">
          <Typography component="h1" variant="h1">
            Prescription #{prescriptionId.substring(21, 24)}
          </Typography>
          {loading ? (
            <CircularProgress />
          ) : error ? (
            <Typography className={classes.error}>{error}</Typography>
          ) : (
            <Grid container spacing={1}>
              <Grid item md={9} xs={12}>
                <Card className={classes.section}>
                  <List>
                    <ListItem>
                      <Typography component="h2" variant="h2">
                        Patient #{prescription.user.substring(22, 24)} Details
                      </Typography>
                    </ListItem>
                    <ListItem>
                      {patientDetails.fullName} |{patientDetails.age}|
                      {patientDetails.gender}| {patientDetails.cell}
                    </ListItem>
                  </List>
                </Card>
                <Card className="mt-[20px]  overflow-scroll  bg-white text-[#6a5d5d]">
                  <CardContent>
                    {" "}
                    <tr className=" flex justify-around items-center cursor-pointer ">
                      <td className="p-[0.5rem] border-none">DRUG NAME:</td>
                      <td>
                        <NextLink
                          href={`/drugInfo/${prescriptionDetails.drugName}`}
                          passHref
                        >
                          <strong>{prescriptionDetails.drugName}</strong>
                        </NextLink>
                      </td>
                    </tr>{" "}
                    <tr className="  bg-[#f3f2f8] text-black flex items-center justify-around">
                      <td className="p-[0.5rem] border-none">DRUG DOSE:</td>
                      <td>
                        <strong>{prescriptionDetails.drugDose}</strong>
                      </td>
                    </tr>{" "}
                    <tr className=" flex justify-around items-center">
                      <td className="p-[0.5rem] border-none">TIMES PER DAY:</td>
                      <td>
                        <strong>{prescriptionDetails.dailyFreq} times</strong>
                      </td>
                    </tr>{" "}
                    <tr className=" flex bg-[#f3f2f8] items-center text-black justify-around">
                      <td className="p-[0.5rem] border-none">DURATION:</td>
                      <td>
                        <strong>{prescriptionDetails.drugDuration} days</strong>
                      </td>
                    </tr>{" "}
                    <tr className=" flex justify-around items-center">
                      <td className="p-[0.5rem] border-none">STARTING ON:</td>
                      <td>
                        <strong>
                          {prescriptionDetails.startDate.substring(2, 10)}
                        </strong>
                      </td>
                    </tr>
                  </CardContent>
                </Card>
                <Card className={classes.section}>
                  <List>
                    <ListItem>
                      <Typography component="h2" variant="h2">
                        Status :(<span className=" text-red-400">pending</span>)
                      </Typography>
                    </ListItem>
                    <ListItem>
                      <tr className=" flex justify-around items-center">
                        <td className="p-[0.5rem] border-none">Created At:</td>
                        <td>
                          <strong>
                            {" "}
                            {prescription.createdAt.substring(2, 10)} |{" "}
                            {prescription.createdAt.substring(11, 19)}
                          </strong>
                        </td>
                      </tr>{" "}
                    </ListItem>{" "}
                    <ListItem>
                      <tr className=" flex justify-around items-center">
                        <td className="p-[0.5rem] border-none">Updated At:</td>
                        <td>
                          <strong>
                            {" "}
                            {prescription.updatedAt.substring(2, 10)} |{" "}
                            {prescription.updatedAt.substring(11, 19)}
                          </strong>
                        </td>
                      </tr>{" "}
                    </ListItem>
                  </List>
                </Card>
              </Grid>
            </Grid>
          )}
        </div>
      </Layout>
    </>
  );
}

export default dynamic(() => Promise.resolve(Prescription), { ssr: false });
export async function getServerSideProps({ params }) {
  await db.connect();
  const products = await Product.find({}, "-reviews").lean();

  await db.disconnect();

  return { props: { products: products.map(db.convertDocToObj), params } };
}
