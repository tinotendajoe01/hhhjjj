import {
  Button,
  Container,
  FilledInput,
  Input,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";

const send = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [whatsAppMsg, setWhatsAppMsg] = useState(
    "Please follow https://aboutreact.com"
  );

  const initiateWhatsApp = () => {
    // Check for perfect 10 digit length
    if (mobileNumber.length != 10) {
      alert("Please insert correct WhatsApp number");
      return;
    }
    // Using 91 for India
    // You can change 91 with your country code
    let url =
      "whatsapp://send?text=" + whatsAppMsg + "&phone=263" + mobileNumber;
    Linking.openURL(url)
      .then((data) => {
        console.log("WhatsApp Opened");
      })
      .catch(() => {
        alert("Make sure Whatsapp installed on your device");
      });
  };
  return (
    <Container>
      <div>
        <Typography>
          Example to Send WhatsApp Message from React Native App
        </Typography>
        <Typography>Enter WhatsApp Number</Typography>
        <input
          //   value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
          placeholder="Enter WhatsApp Number"
        />{" "}
        <Typography>WhatsApp Message</Typography>
        <Input
          value={whatsAppMsg}
          onChangeText={(whatsAppMsg) => setWhatsAppMsg(whatsAppMsg)}
          placeholder={"WhatsApp Message"}
        />
        <Button onClick={initiateWhatsApp}>
          <Typography>Send WhatsApp Message</Typography>
        </Button>
      </div>
    </Container>
  );
};

export default send;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "white",
//     padding: 10,
//   },
//   titleText: {
//     fontSize: 22,
//     textAlign: "center",
//     fontWeight: "bold",
//   },
//   titleTextsmall: {
//     marginVertical: 8,
//     fontSize: 16,
//   },
//   buttonStyle: {
//     justifyContent: "center",
//     marginTop: 15,
//     padding: 10,
//     backgroundColor: "#8ad24e",
//   },
//   buttonTextStyle: {
//     color: "#fff",
//     textAlign: "center",
//   },
//   textInput: {
//     height: 40,
//     borderColor: "gray",
//     borderWidth: 1,
//     width: "100%",
//     paddingHorizontal: 10,
//   },
// });
