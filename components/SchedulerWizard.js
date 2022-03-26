import { Step, StepLabel, Stepper } from "@material-ui/core";
import React from "react";
import useStyles from "../utils/styles";

export default function CheckoutWizard({ activeStep = 0 }) {
  const classes = useStyles();
  return (
    <Stepper
      className={classes.transparentBackgroud}
      activeStep={activeStep}
      alternativeLabel
    >
      {["Your Details", "Medication Details", "Confirm Schedule"].map(
        (step) => (
          <Step key={step}>
            <StepLabel>{step}</StepLabel>
          </Step>
        )
      )}
    </Stepper>
  );
}
/*
pick a drug
select dose (range)
period
frequency (time space between reminders)
start date


*/
