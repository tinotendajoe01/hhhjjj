import {
  List,
  ListItem,
  Typography,
  TextField,
  Button,
  RadioGroup,
  FormControl,
  Radio,
  Box,
  FormControlLabel,
} from "@material-ui/core";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { Store } from "../../utils/Store";
import useStyles from "../../utils/styles";
import Cookies from "js-cookie";
import { Controller, useForm } from "react-hook-form";
import SchedulerWizard from "../../components/SchedulerWizard";
import Header from "../../components/Header";
import Product from "../../models/Product";
import db from "../../utils/db";

export default function PatientScreen({ products }) {
  const [gender, setGender] = useState("");

  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    getValues,
  } = useForm();
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const { userInfo, patientDetails } = state;

  useEffect(() => {
    if (!userInfo) {
      s;
      router.push("/login?redirect=/shipping");
    }
    setValue("fullName", patientDetails.fullName);
    setValue("age", patientDetails.age);
    setValue("cell", patientDetails.cell);
    setValue("gender", patientDetails.gender);
  }, []);

  const classes = useStyles();
  const submitHandler = ({ fullName, age, cell, gender }) => {
    dispatch({
      type: "SAVE_PATIENT_DETAILS",
      payload: { fullName, age, cell, gender },
    });
    Cookies.set(
      "patientDetails",
      JSON.stringify({
        fullName,
        age,
        cell,
        gender,
      })
    );
    router.push("/support/select-drug");
  };

  return (
    <>
      {" "}
      <Header products={products} />
      <Layout>
        <SchedulerWizard activeStep={0} />
        <form
          onSubmit={handleSubmit(submitHandler)}
          className="shadow-xl max-w-4xl m-auto "
        >
          <div className="text-center">
            {" "}
            <Typography component="h1" variant="h1">
              Personal Details
            </Typography>
          </div>
          <List>
            <ListItem>
              <Controller
                name="fullName"
                control={control}
                defaultValue=""
                rules={{
                  required: true,
                  minLength: 2,
                }}
                render={({ field }) => (
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="fullName"
                    label="Enter Your Name"
                    error={Boolean(errors.fullName)}
                    helperText={
                      errors.fullName
                        ? errors.fullName.type === "minLength"
                          ? "Full Name length is more than 1 letters"
                          : "Full Name is required"
                        : ""
                    }
                    {...field}
                  ></TextField>
                )}
              ></Controller>
            </ListItem>{" "}
            <ListItem>
              <Controller
                name="age"
                control={control}
                defaultValue=""
                rules={{
                  required: true,
                  minLength: 1,
                }}
                render={({ field }) => (
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="age"
                    label="Enter Your Age"
                    error={Boolean(errors.age)}
                    helperText={
                      errors.age
                        ? errors.age.type === "minLength"
                          ? "Age length is more than 0 letters"
                          : "Age is required"
                        : ""
                    }
                    {...field}
                  ></TextField>
                )}
              ></Controller>
            </ListItem>{" "}
            <ListItem>
              <Controller
                name="cell"
                control={control}
                defaultValue=""
                rules={{
                  required: true,
                  minLength: 10,
                }}
                render={({ field }) => (
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="cell"
                    label="Enter Your Phone Number"
                    error={Boolean(errors.cell)}
                    helperText={
                      errors.cell
                        ? errors.cell.type === "minLength"
                          ? "Number must be 10 digits"
                          : "Number is required"
                        : ""
                    }
                    {...field}
                  ></TextField>
                )}
              ></Controller>
            </ListItem>{" "}
            <ListItem className="flex justify-between items-center space-x-8">
              <Controller
                name="gender"
                control={control}
                defaultValue=""
                rules={{
                  required: true,
                  minLength: 10,
                }}
                render={({ field }) => (
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="gender"
                    label="Select Gender"
                    error={Boolean(errors.gender)}
                    helperText={
                      errors.gender
                        ? errors.gender.type === "minLength"
                          ? "Number must be 10 digits"
                          : "Number is required"
                        : ""
                    }
                    isDisabled
                    {...field}
                  ></TextField>
                )}
              ></Controller>{" "}
              <Controller
                name="gender"
                control={control}
                defaultValue=""
                rules={{
                  required: true,
                  minLength: 1,
                }}
                render={({ field }) => (
                  <FormControl component="fieldset" {...field}>
                    <RadioGroup
                      aria-label="Gender"
                      name="selectedGender"
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      className="py-5"
                    >
                      <FormControlLabel
                        label="Male"
                        value="male"
                        control={<Radio />}
                      ></FormControlLabel>
                      <FormControlLabel
                        label="Female"
                        value="female"
                        control={<Radio />}
                      ></FormControlLabel>
                    </RadioGroup>
                  </FormControl>
                )}
              ></Controller>
            </ListItem>{" "}
            <ListItem>
              <Button
                variant="contained"
                type="submit"
                fullWidth
                color="primary"
              >
                Continue
              </Button>
            </ListItem>
          </List>
        </form>
      </Layout>
    </>
  );
}
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
