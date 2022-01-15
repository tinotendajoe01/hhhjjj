import {
  List,
  ListItem,
  Typography,
  TextField,
  Button,
  Link,
} from "@material-ui/core";
import axios from "axios";
import { useRouter } from "next/router";
import NextLink from "next/link";
import router from "next/router";
import React, { useContext, useEffect, useState } from "react";
// import Layout from "../components/Layout";
// import { Store } from "../../utils/Store";
// import useStyles from "../../utils/styles";
import Cookies from "js-cookie";
// import { Controller, useForm } from "react-hook-form";
import { useSnackbar } from "notistack";
import { Store } from "../../utils/Store";
import { useForm, Controller } from "react-hook-form";

export default function Login() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const router = useRouter();
  const { redirect } = router.query; //login?redirect=/shipping

  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;
  useEffect(() => {
    if (userInfo) {
      router.push("/");
    }
  }, []);

  // const classes = useStyles();
  const submitHandler = async ({ email, password }) => {
    closeSnackbar();
    try {
      const { data } = await axios.post("/api/users/login", {
        email,
        password,
      });
      dispatch({ type: "USER_LOGIN", payload: data });
      // Cookies.set("userInfo", data);Cookies.set('userInfo', JSON.stringify({...data}));
      Cookies.set("userInfo", JSON.stringify(data));
      router.push(redirect || "/");
    } catch (err) {
      enqueueSnackbar(
        err.response.data ? err.response.data.message : err.message,
        { variant: "error" }
      );
    }
  };
  return (
    <div className="max-w-5xl m-auto">
      <form
        onSubmit={handleSubmit(submitHandler)}
        className=" shadow-xl
        mx-5
        mt-20
        rounded-md"
      >
        <div className="text-center">
          {" "}
          <Typography component="h1" variant="h5">
            Login
          </Typography>
        </div>
        <List>
          <ListItem>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={{
                required: true,
                pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              }}
              render={({ field }) => (
                <TextField
                  variant="outlined"
                  fullWidth
                  id="email"
                  label="Email"
                  inputProps={{ type: "email" }}
                  error={Boolean(errors.email)}
                  helperText={
                    errors.email
                      ? errors.email.type === "pattern"
                        ? "Email is not valid"
                        : "Email is required"
                      : ""
                  }
                  {...field}
                ></TextField>
              )}
            ></Controller>
          </ListItem>
          <ListItem className="">
            <Controller
              name="password"
              control={control}
              defaultValue=""
              rules={{
                required: true,
                minLength: 6,
              }}
              render={({ field }) => (
                <TextField
                  variant="outlined"
                  fullWidth
                  id="password"
                  label="Password"
                  inputProps={{ type: "password" }}
                  error={Boolean(errors.password)}
                  helperText={
                    errors.password
                      ? errors.password.type === "minLength"
                        ? "Password must contain at least 6 characters"
                        : "Password is required"
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
              Login
            </Button>
          </ListItem>
          <ListItem>
            Don&apos;t have a Kenlink account? &nbsp;
            <NextLink href={`/create?redirect=${redirect || "/"}`} passHref>
              <Link>Create one, it's free!</Link>
            </NextLink>
          </ListItem>
        </List>
      </form>
    </div>
  );
}
