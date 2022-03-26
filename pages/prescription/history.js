import axios from "axios";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import NextLink from "next/link";
import React, { useEffect, useContext, useReducer } from "react";
import {
  CircularProgress,
  Grid,
  List,
  ListItem,
  Link,
  TableContainer,
  Typography,
  Card,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  ListItemText,
} from "@material-ui/core";
import { getError } from "../../utils/error";
import { Store } from "../../utils/Store";
import Layout from "../../components/Layout";
import useStyles from "../../utils/styles";
import Header from "../../components/Header";
import db from "../../utils/db";
import Product from "../../models/Product";
function reducer(state, action) {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true, error: "" };
    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        prescriptions: action.payload,
        error: "",
      };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      state;
  }
}

function PrescriptionHistory({ products }) {
  const { state } = useContext(Store);
  const router = useRouter();
  const classes = useStyles();
  const { userInfo } = state;

  const [{ loading, error, prescriptions }, dispatch] = useReducer(reducer, {
    loading: true,
    prescriptions: [],
    error: "",
  });

  useEffect(() => {
    if (!userInfo) {
      router.push("/login");
    }
    const fetchPrescriptions = async () => {
      try {
        dispatch({ type: "FETCH_REQUEST" });
        const { data } = await axios.get(`/api/prescriptions/history`, {
          headers: { authorization: `Bearer ${userInfo.token}` },
        });
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: getError(err) });
      }
    };
    fetchPrescriptions();
  }, []);

  console.log(prescriptions);
  return (
    <>
      <Header products={products} />
      <Layout title="Prescription History">
        <div className="max-w-7xl mx-auto">
          <Grid container spacing={1}>
            <Grid item md={3} xs={12}>
              <Card className={classes.section}>
                <List>
                  <NextLink href="/profile" passHref>
                    <ListItem button component="a">
                      <ListItemText primary="Profile "></ListItemText>
                    </ListItem>
                  </NextLink>
                  <NextLink href="/support/prescription/history" passHref>
                    <ListItem selected button component="a">
                      <ListItemText primary="Your History"></ListItemText>
                    </ListItem>
                  </NextLink>
                  <NextLink href="/" passHref>
                    <ListItem button component="a">
                      <ListItemText primary="Go Back"></ListItemText>
                    </ListItem>
                  </NextLink>
                </List>
              </Card>
            </Grid>
            <Grid item md={9} xs={12}>
              <Card className={classes.section}>
                <List>
                  <ListItem>
                    <Typography component="h1" variant="h1">
                      Medication History
                    </Typography>
                  </ListItem>
                  {prescriptions.length != 0 ? (
                    <ListItem>
                      {loading ? (
                        <CircularProgress />
                      ) : error ? (
                        <Typography className={classes.error}>
                          {error}
                        </Typography>
                      ) : (
                        <TableContainer>
                          <Table>
                            <TableHead>
                              <TableRow>
                                <TableCell>#RX</TableCell>
                                <TableCell>DATE</TableCell>
                                <TableCell>DRUG</TableCell>
                                <TableCell>DOSE</TableCell>
                                <TableCell>FREQ</TableCell>
                                <TableCell>MORE</TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {prescriptions.map((prescription) => (
                                <TableRow key={prescription._id}>
                                  <TableCell>
                                    {prescription._id.substring(20, 24)}
                                  </TableCell>
                                  <TableCell>
                                    {prescription.createdAt.substring(1, 10)}
                                  </TableCell>
                                  <TableCell>
                                    {prescription.prescriptionDetails.drugName}
                                  </TableCell>
                                  <TableCell>
                                    {prescription.prescriptionDetails.drugDose}
                                  </TableCell>
                                  <TableCell>
                                    {prescription.prescriptionDetails.dailyFreq}
                                  </TableCell>
                                  <TableCell>
                                    <NextLink
                                      href={`/prescription/${prescription._id}`}
                                      passHref
                                    >
                                      <Button variant="contained">
                                        Details
                                      </Button>
                                    </NextLink>
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </TableContainer>
                      )}
                    </ListItem>
                  ) : (
                    <div className="text-center">
                      You have no record.{" "}
                      <NextLink href="/support" passHref>
                        <Link>Share with us your prescriptions</Link>
                      </NextLink>
                    </div>
                  )}
                </List>
              </Card>
            </Grid>
          </Grid>
        </div>
      </Layout>
    </>
  );
}

export default dynamic(() => Promise.resolve(PrescriptionHistory), {
  ssr: false,
});
export async function getServerSideProps() {
  await db.connect();
  const products = await Product.find({}, "-reviews").lean();

  await db.disconnect();
  return {
    props: {
      products: products.map(db.convertDocToObj),
    },
  };
}
