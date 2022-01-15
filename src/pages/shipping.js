import {
  List,
  ListItem,
  Typography,
  TextField,
  Button,
  Link,
} from "@material-ui/core";

import { useRouter } from "next/router";
import NextLink from "next/link";
import router from "next/router";
import React, { useContext, useEffect } from "react";
// import Layout from "../components/Layout";

// import useStyles from "../../utils/styles";
import Cookies from "js-cookie";
import { Controller, useForm } from "react-hook-form";

import { Store } from "../../utils/Store";

export default function Shipping() {
  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm();

  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const {
    userInfo,
    cart: { deliveryAddress },
  } = state;
  useEffect(() => {
    if (!userInfo) {
      router.push("/login?redirect=/shipping");
    }
    setValue("fullName", deliveryAddress.fullName);

    setValue("address", deliveryAddress.address);
    setValue("city", deliveryAddress.city);
    setValue("postalCode", deliveryAddress.postalCode);
    setValue("country", deliveryAddress.country);
  }, []);

  // const classes = useStyles();
  const submitHandler = ({ fullName, address, city, postalCode, country }) => {
    dispatch({
      type: "SAVE_DELIVERY_ADDRESS",
      payload: { fullName, address, city, postalCode, country },
    });
    Cookies.set(
      "deliveryAddress",
      JSON.stringify({
        fullName,
        address,
        city,
        postalCode,
        country,
      })
    );
    router.push("/payment");
  };
  return (
    <div className="max-w-5xl m-auto">
      <form
        onSubmit={handleSubmit(submitHandler)}
        className=" shadow-xl
        mx-5
        mt-20
        rounded-md
        bg-blur"
      >
        <div className="text-center">
          {" "}
          <Typography component="h1" variant="h5">
            Address For Delivery
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
                  label="Full Name"
                  error={Boolean(errors.fullName)}
                  helperText={
                    errors.fullName
                      ? errors.fullName.type === "minLength"
                        ? "Full Name characters must be more than 1"
                        : "Full Name is required"
                      : ""
                  }
                  {...field}
                ></TextField>
              )}
            ></Controller>
          </ListItem>
          <ListItem>
            <Controller
              name="address"
              control={control}
              defaultValue=""
              rules={{
                required: true,
                minLength: 3,
              }}
              render={({ field }) => (
                <TextField
                  variant="outlined"
                  fullWidth
                  id="address"
                  label="Address"
                  error={Boolean(errors.address)}
                  helperText={
                    errors.address
                      ? errors.address.type === "minLength"
                        ? "Address characters must be more than 2"
                        : "Address  is required"
                      : ""
                  }
                  {...field}
                ></TextField>
              )}
            ></Controller>
          </ListItem>
          <ListItem>
            <Controller
              name="city"
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
                  id="city"
                  label="City"
                  error={Boolean(errors.city)}
                  helperText={
                    errors.city
                      ? errors.city.type === "minLength"
                        ? "City characters must be more than 1"
                        : "City is required"
                      : ""
                  }
                  {...field}
                ></TextField>
              )}
            ></Controller>
          </ListItem>{" "}
          <ListItem>
            <Controller
              name="postalCode"
              control={control}
              defaultValue=""
              rules={{
                required: true,
                minLength: 4,
              }}
              render={({ field }) => (
                <TextField
                  variant="outlined"
                  fullWidth
                  id="postalCode"
                  label="Postal Code"
                  error={Boolean(errors.postalCode)}
                  helperText={
                    errors.postalCode
                      ? errors.postalCode.type === "minLength"
                        ? "Postal Code characters must be more than 3"
                        : "Postal Code is required"
                      : ""
                  }
                  {...field}
                ></TextField>
              )}
            ></Controller>
          </ListItem>
          <ListItem>
            <Controller
              name="country"
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
                  id="country"
                  label="Country"
                  error={Boolean(errors.country)}
                  helperText={
                    errors.country
                      ? errors.country.type === "minLength"
                        ? "Country name characters must be more than 1"
                        : "Country name is required"
                      : ""
                  }
                  {...field}
                ></TextField>
              )}
            ></Controller>
          </ListItem>
          <ListItem className="">
            <Button
              className="button"
              variant="contained"
              type="submit"
              fullWidth
              color="primary"
            >
              Proceed
            </Button>
          </ListItem>
        </List>
      </form>
    </div>
  );
}
