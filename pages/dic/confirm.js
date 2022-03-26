import {
  Container,
  Button,
  FormControl,
  FormControlLabel,
  List,
  CardContent,
  ListItem,
  Radio,
  RadioGroup,
  Typography,
  Grid,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Link,
  CircularProgress,
  Card,
} from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import Layout from "../../components/Layout";
import SchedulerWizard from "../../components/SchedulerWizard";
import db from "../../utils/db";
import { Store } from "../../utils/Store";
import Cookies from "js-cookie";
import useStyles from "../../utils/styles";
import { getError } from "../../utils/error";
import { Controller, useForm } from "react-hook-form";
import { useRouter } from "next/router";
import Header from "../../components/Header";
import { useSnackbar } from "notistack";
import CheckoutWizard from "../../components/SchedulerWizard";
import axios from "axios";
const confirm = () => {
  const { state, dispatch } = useContext(Store);
  const { prescriptionDetails, userInfo, patientDetails } = state;
  const router = useRouter();
  const { closeSnackbar, enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);

  const savePrescriptionHandler = async () => {
    closeSnackbar();
    try {
      setLoading(true);
      const { data } = await axios.post(
        "/api/prescriptions/",
        {
          prescriptionDetails,
          patientDetails,
        },
        {
          headers: {
            authorization: `Bearer ${userInfo.token}`,
          },
        }
      );

      Cookies.remove("prescriptionDetails");
      setLoading(false);
      router.push(`/prescription/${data._id}`);
    } catch (err) {
      setLoading(false);
      enqueueSnackbar(getError(err), { variant: "error" });
    }
  };
  return (
    <>
      <Header />{" "}
      <Layout
        title={prescriptionDetails.drugName}
        description="{drug.description}"
      >
        <CheckoutWizard activeStep={2} />{" "}
        <Container className="max-w-7xl m-auto">
          {" "}
          <Card>
            <CardContent>
              <div className="flex justify-between">
                {" "}
                <Typography color="textSecondary" gutterBottom>
                  Full Name
                </Typography>
                <h2>{patientDetails.fullName} </h2>
              </div>
              <div className="flex justify-between">
                <Typography className="infoBox__total " color="textSecondary">
                  Cell
                </Typography>
                <h2>{patientDetails.cell}</h2>
              </div>
              <div className="flex justify-between">
                <Typography className="infoBox__total " color="textSecondary">
                  Gender
                </Typography>
                <h2>{patientDetails.gender}</h2>
              </div>
              <div className="flex justify-between">
                <Typography className="infoBox__total " color="textSecondary">
                  Age
                </Typography>
                <h2>{patientDetails.age}</h2>
              </div>
            </CardContent>
          </Card>
          <Card className="mt-[20px]  overflow-scroll  bg-white text-[#6a5d5d]">
            <CardContent>
              {" "}
              <tr className=" flex justify-around items-center">
                <td className="p-[0.5rem] border-none">DRUG NAME:</td>
                <td>
                  <strong>{prescriptionDetails.drugName}</strong>
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
              <tr className=" flex bg-[#f3f2f8] text-black items-center justify-around">
                <td className="p-[0.5rem] border-none">DURATION:</td>
                <td>
                  <strong>{prescriptionDetails.drugDuration} days</strong>
                </td>
              </tr>{" "}
              <tr className=" flex justify-evenly items-center">
                <td className="p-[0.5rem] border-none">STARTING ON:</td>
                <td>
                  <strong>{prescriptionDetails.startDate}</strong>
                </td>
              </tr>
            </CardContent>
          </Card>
        </Container>{" "}
        <List>
          <ListItem>
            <Button
              variant="contained"
              type="submit"
              fullWidth
              color="primary"
              onClick={savePrescriptionHandler}
            >
              Confirm & Save
            </Button>
          </ListItem>{" "}
          <ListItem>
            <Button
              fullWidth
              type="button"
              variant="contained"
              className="button text-white"
            >
              Back
            </Button>
          </ListItem>
        </List>
      </Layout>
    </>
  );
};

export default confirm;
