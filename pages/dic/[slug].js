import React, { useContext, useEffect, useState } from "react";
import NextLink from "next/link";
import Image from "next/image";
import {
  Grid,
  Link,
  List,
  ListItem,
  Typography,
  Card,
  Button,
  TextField,
  CircularProgress,
  Box,
  Select,
  MenuItem,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  duration,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import Layout from "../../components/Layout";
import useStyles from "../../utils/styles";
import Cookies from "js-cookie";
import db from "../../utils/db";
import axios from "axios";
import { Store } from "../../utils/Store";
import { getError } from "../../utils/error";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";

import Header from "../../components/Header";
import { ArrowLeftIcon } from "@heroicons/react/outline";
import Drug from "../../models/Drug";
import CheckoutWizard from "../../components/SchedulerWizard";
import { Controller, useForm } from "react-hook-form";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DateTimePicker from "react-datetime-picker";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";
import "react-datetime-picker/dist/DateTimePicker.css";

export default function DrugScreen({ drug }) {
  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    getValues,
  } = useForm();
  const router = useRouter();
  const { state, dispatch } = useContext(Store);

  const classes = useStyles();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const minDuration = drug.minDuration;
  const maxDuration = drug.maxDuration;
  const range = [...Array(maxDuration - minDuration + 1).keys()].map(
    (days) => days + minDuration
  );
  const drugName = drug.name;
  const [drugDose, setDrugDose] = useState("");
  const [drugDuration, setDrugDuration] = useState("");
  const [dailyFreq, setDailyFreq] = useState("");
  const [startDate, setStartDate] = useState("");
  const { prescriptionDetails } = state;

  console.log(prescriptionDetails);
  // useEffect(() => {
  //   setDrugDuration(prescriptionDetails.drugDuration);
  //   setDrugDose(prescriptionDetails.drugDose);
  //   setDailyFreq(prescriptionDetails.dailyFreq);
  //   setStartDate(prescriptionDetails.startDate);
  // }, []);
  const submitHandler = () => {
    closeSnackbar();
    if (!drugDose || !drugDuration || !startDate || !dailyFreq) {
      enqueueSnackbar("Please fill all details", { variant: "error" });
    } else {
      dispatch({
        type: "SAVE_PRESCRIPTION_DETAILS",
        payload: {
          drugName,
          drugDose,
          drugDuration,
          startDate,

          dailyFreq,
        },
      });
      Cookies.set(
        "prescriptionDetails",
        JSON.stringify({
          drugDose,
          drugDuration,
          startDate,
          drugName,
          dailyFreq,
        })
      );
    }
    router.push("/support/confirm");
  };
  if (!drug) {
    return <div>Drug Not Found</div>;
  }

  return (
    <>
      <Header />
      <Layout title={drug.name} description={drug.description}>
        <CheckoutWizard activeStep={1} />
        <form
          onSubmit={handleSubmit(submitHandler)}
          className="shadow-xl max-w-4xl m-auto "
        >
          <div className="text-center">
            <Typography component="h1" variant="h1">
              {drug.name} Prescription Details
            </Typography>
          </div>
          <List>
            <ListItem>
              <Box className={classes.fullWidth}>
                <Typography>Select Dose (mg)</Typography>

                <Select
                  fullWidth
                  value={drugDose}
                  onChange={(e) => setDrugDose(e.target.value)}
                >
                  <MenuItem key={drug.standardDose} value={drug.standardDose}>
                    {drug.standardDose}
                  </MenuItem>{" "}
                  <MenuItem key={drug.adultDose} value={drug.adultDose}>
                    {drug.adultDose}
                  </MenuItem>{" "}
                  <MenuItem key={drug.kidsDose} value={drug.kidsDose}>
                    {drug.kidsDose}
                  </MenuItem>
                </Select>
              </Box>
            </ListItem>{" "}
            <ListItem>
              <Box className={classes.fullWidth}>
                <Typography>Duration (days)</Typography>

                <Select
                  fullWidth
                  value={drugDuration}
                  onChange={(e) => setDrugDuration(e.target.value)}
                >
                  {range.map((duration) => (
                    <MenuItem key={duration} value={duration}>
                      {duration}
                    </MenuItem>
                  ))}
                </Select>
              </Box>
            </ListItem>{" "}
            <ListItem>
              <Box className={classes.fullWidth}>
                <Typography>Times A Day</Typography>

                <FormControl component="fieldset">
                  <RadioGroup
                    aria-label="Frequency"
                    name="selectedFreq"
                    value={dailyFreq}
                    onChange={(e) => setDailyFreq(e.target.value)}
                  >
                    <FormControlLabel
                      label="Once"
                      value="1"
                      control={<Radio />}
                    ></FormControlLabel>
                    <FormControlLabel
                      label="Twice"
                      value="2"
                      control={<Radio />}
                    ></FormControlLabel>
                    <FormControlLabel
                      label="Thrice"
                      value="3"
                      control={<Radio />}
                    ></FormControlLabel>
                  </RadioGroup>
                </FormControl>
              </Box>
            </ListItem>{" "}
            <ListItem>
              <Box className={classes.fullWidth}>
                <Typography>Starting Date</Typography>

                <div>
                  {/* <DatePicker
                    value={startDate}
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    dateFormat="dd/MM/yy"
                    minDate={new Date()}
                    isClearable
                    showYearDropdown
                    scrollableMonthYearDropdown
                    className="text-black"
                  /> */}
                  <DateTimePicker
                    value={startDate}
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    minDate={new Date()}
                    dayPlaceholder="DD"
                    minutePlaceholder="mm"
                    hourPlaceholder="hh"
                    monthPlaceholder="MM"
                    yearPlaceholder="YYYY"
                    className="text-black"
                  />
                </div>
              </Box>
            </ListItem>{" "}
            <ListItem>
              <Button
                variant="contained"
                type="submit"
                fullWidth
                color="primary"
                disabled={
                  !drugDose || !drugDuration || !startDate || !dailyFreq
                }
              >
                Proceed
              </Button>
            </ListItem>{" "}
            <ListItem>
              <Button
                fullWidth
                type="button"
                variant="contained"
                onClick={() => router.push("/support/")}
                className="button text-white"
              >
                Back
              </Button>
            </ListItem>
          </List>
        </form>
      </Layout>
    </>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { slug } = params;

  await db.connect();
  const drug = await Drug.findOne({ slug }, "-reviews").lean();
  await db.disconnect();
  return {
    props: {
      drug: db.convertDocToObj(drug),
    },
  };
}
