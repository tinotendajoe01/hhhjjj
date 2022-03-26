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
} from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import Layout from "../components/Layout";
import SchedulerWizard from "../components/SchedulerWizard";
import db from "../utils/db";
import { Store } from "../utils/Store";
import Cookies from "js-cookie";
import useStyles from "../utils/styles";
import Drug from "../models/Drug";
import { Controller, useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import Header from "../components/Header";
const Form = ({ drugs }) => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const { state, dispatch } = useContext(Store);
  const router = useRouter();
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
      router.push("/login?redirect=/schedule");
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
        <SchedulerWizard activeStep={0} />
        <>
          {" "}
          <form
            className="shadow-xl max-w-4xl m-auto "
            onSubmit={submitHandler}
          >
            <Grid>
              <List>
                <ListItem>
                  <Box className={classes.fullWidth}>
                    <Typography>Select Your Medicine</Typography>

                    <Select
                      fullWidth
                      value={selectedDrug}
                      onChange={(e) => setSelecteDrug(e.target.value)}
                    >
                      <MenuItem value="all">All</MenuItem>
                      {drugs?.map((drug) => (
                        <MenuItem key={drug._id} value={drug.name}>
                          {drug.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </Box>
                </ListItem>
                <ListItem>
                  <Button
                    variant="contained"
                    type="submit"
                    fullWidth
                    color="primary"
                    onClick={submitHandler}
                    disabled={!selectedDrug}
                  >
                    Proceed
                  </Button>
                </ListItem>
              </List>
            </Grid>
          </form>
        </>
      </Layout>
    </>
  );
};

export default Form;
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
