import Cookies from "js-cookie";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { Store } from "../../utils/Store";
// import Layout from "../components/Layout";
import CheckoutWizard from "../components/CheckoutWizard";
// import useStyles from "../../utils/styles";
import {
  Button,
  FormControl,
  FormControlLabel,
  List,
  ListItem,
  Radio,
  RadioGroup,
  Typography,
} from "@material-ui/core";
import { useSnackbar } from "notistack";

export default function Payment() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  //   const classes = useStyles();
  const router = useRouter();
  const [paymentMethod, setPaymentMethod] = useState("");
  const { state, dispatch } = useContext(Store);
  const {
    cart: { deliveryAddress },
  } = state;
  useEffect(() => {
    if (!deliveryAddress.address) {
      router.push("/shipping");
    } else {
      setPaymentMethod(Cookies.get("paymentMethod") || "");
    }
  }, []);
  const submitHandler = (e) => {
    closeSnackbar();
    e.preventDefault();
    if (!paymentMethod) {
      enqueueSnackbar("Payment method is required", { variant: "error" });
    } else {
      dispatch({ type: "SAVE_PAYMENT_METHOD", payload: paymentMethod });
      Cookies.set("paymentMethod", paymentMethod);
      router.push("/placeorder");
    }
  };
  return (
    <div className="max-w-6xl m-auto">
      {" "}
      <CheckoutWizard activeStep={2}></CheckoutWizard>
      <form
        onSubmit={submitHandler}
        className=" shadow-xl
        mx-5
        mt-20
        rounded-md
        bg-blur"
      >
        <div className="text-center">
          <Typography component="h1" variant="h5">
            Payment Method
          </Typography>
        </div>
        <List>
          <ListItem>
            <FormControl component="fieldset">
              <RadioGroup
                aria-label="Payment Method"
                name="paymentMethod"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
              >
                <FormControlLabel
                  label="PayPal"
                  value="PayPal"
                  control={<Radio />}
                ></FormControlLabel>
                <FormControlLabel
                  label="Stripe"
                  value="Stripe"
                  control={<Radio />}
                ></FormControlLabel>
                <FormControlLabel
                  label="Cash"
                  value="Cash"
                  control={<Radio />}
                ></FormControlLabel>
              </RadioGroup>
            </FormControl>
          </ListItem>
          <ListItem>
            <Button
              className="button"
              fullWidth
              type="submit"
              variant="contained"
              color="primary"
            >
              Proceed
            </Button>
          </ListItem>
          <ListItem>
            <Button
              fullWidth
              type="button"
              variant="contained"
              onClick={() => router.push("/shipping")}
            >
              Go Back
            </Button>
          </ListItem>
        </List>
      </form>
    </div>
  );
}
