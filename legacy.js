// import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
// import React, { useState } from "react";
// import Schedule from "../components/Schedule";
// import SchedulerWizard from "../components/SchedulerWizard";
// import db from "../utils/db";
// import Drug from "../models/Drug";
// const Form = ({ drugs }) => {
//   const [todos, setTodos] = useState([]);
//   //connect input to state
//   const [input, setInput] = useState("");
//   //
//   const addTodo = (e) => {
//     //this will fire off wen we click the btn
//     e.preventDefault();
//     setTodos([...todos, input]);
//     setInput(""); /// input after submission
//   };

//   return (
//     <center>
//       <SchedulerWizard />
//       <h1>Create Schedule </h1>
//       <form className=" flex flex-col mx-10 space-y-2">
//         <FormControl>
//           <InputLabel>Add Your Schedule</InputLabel>
//           <Input
//             value={input}
//             onChange={(event) => setInput(event.target.value)}
//           />
//         </FormControl>

//         <Button
//           button
//           disabled={!input}
//           type="submit"
//           onClick={addTodo}
//           variant="contained"
//           color="primary"
//         >
//           Add To Calendar
//         </Button>
//       </form>
//       <ul>
//         {todos.map((todo) => (
//           <Schedule todo={todo} />
//         ))}
//       </ul>
//       {drugs?.map((drug) => (
//         <div>
//           {drug.name}
//           <ol>
//             <li>Generic: {drug.genericName}</li>
//             <li>Category: {drug.category}</li>
//             <li>Standard Dose:{drug.standardDose}</li>
//             <li>A/E:{drug.adverseEffects}</li>
//             <li>Description:{drug.description}</li>
//           </ol>
//         </div>
//       ))}
//     </center>
//   );
// };

// export default Form;
// export async function getServerSideProps() {
//   await db.connect();

//   const drugs = await Drug.find({}).lean();

//   await db.disconnect();
//   return {
//     props: {
//       drugs: drugs.map(db.convertDocToObj),
//     },
//   };
// }

/////store
import Cookies from "js-cookie";
import { createContext, useReducer } from "react";

export const Store = createContext();
const initialState = {
  darkMode: Cookies.get("darkMode") === "ON" ? true : false,
  cart: {
    cartItems: Cookies.get("cartItems")
      ? JSON.parse(Cookies.get("cartItems"))
      : [],
    shippingAddress: Cookies.get("shippingAddress")
      ? JSON.parse(Cookies.get("shippingAddress"))
      : { location: {} },
    paymentMethod: Cookies.get("paymentMethod")
      ? Cookies.get("paymentMethod")
      : "",
  },
  selectedDrug: Cookies.get("selectedDrug") ? Cookies.get("selectedDrug") : "",
  selectedDose: Cookies.get("selectedDose") ? Cookies.get("selectedDose") : "",
  selectedDuration: Cookies.get("selectedDuration")
    ? Cookies.get("selectedDuration")
    : "",
  selectedDate: Cookies.get("selectedDate") ? Cookies.get("selectedDate") : "",
  selectedFreq: Cookies.get("selectedFreq") ? Cookies.get("selectedFreq") : "",

  userInfo: Cookies.get("userInfo")
    ? JSON.parse(Cookies.get("userInfo"))
    : null,
  // drugName: Cookies.get("drugName")
  //   ? JSON.parse(Cookies.get("drugName"))
  //   : null,
};

function reducer(state, action) {
  switch (action.type) {
    case "DARK_MODE_ON":
      return { ...state, darkMode: true };
    case "DARK_MODE_OFF":
      return { ...state, darkMode: false };
    case "CART_ADD_ITEM": {
      const newItem = action.payload;
      const existItem = state.cart.cartItems.find(
        (item) => item._id === newItem._id
      );
      const cartItems = existItem
        ? state.cart.cartItems.map((item) =>
            item.name === existItem.name ? newItem : item
          )
        : [...state.cart.cartItems, newItem];
      Cookies.set("cartItems", JSON.stringify(cartItems));
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    case "CART_REMOVE_ITEM": {
      const cartItems = state.cart.cartItems.filter(
        (item) => item._id !== action.payload._id
      );
      Cookies.set("cartItems", JSON.stringify(cartItems));
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    case "SAVE_SHIPPING_ADDRESS":
      return {
        ...state,
        cart: {
          ...state.cart,
          shippingAddress: {
            ...state.cart.shippingAddress,
            ...action.payload,
          },
        },
      };

    case "SAVE_SHIPPING_ADDRESS_MAP_LOCATION":
      return {
        ...state,
        cart: {
          ...state.cart,
          shippingAddress: {
            ...state.cart.shippingAddress,
            location: action.payload,
          },
        },
      };
    case "SAVE_PAYMENT_METHOD":
      return {
        ...state,
        cart: { ...state.cart, paymentMethod: action.payload },
      };
    case "CART_CLEAR":
      return { ...state, cart: { ...state.cart, cartItems: [] } };
    case "USER_LOGIN":
      return { ...state, userInfo: action.payload };
    case "USER_LOGOUT":
      return {
        ...state,
        userInfo: null,
        cart: {
          cartItems: [],
          shippingAddress: { location: {} },
          paymentMethod: "",
        },
      };
    //scheduler
    case "SAVE_DRUG_NAME":
      return {
        ...state,
        selectedDrug: action.payload,
      };
    case "SAVE_DOSE":
      return {
        ...state,
        selectedDose: action.payload,
      };
    case "SAVE_DURATION":
      return {
        ...state,
        selectedDuration: action.payload,
      };
    case "SAVE_DATE":
      return {
        ...state,
        selectedDate: action.payload,
      };
    case "SAVE_FREQ":
      return {
        ...state,
        selectedDate: action.payload,
      };

    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}

// Example to Send WhatsApp Message from React Native App
// https://aboutreact.com/send-whatsapp-message/

// import React in our code
import React, { useState } from "react";

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Linking,
} from "react-native";

const App = () => {
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
      "whatsapp://send?text=" + whatsAppMsg + "&phone=91" + mobileNumber;
    Linking.openURL(url)
      .then((data) => {
        console.log("WhatsApp Opened");
      })
      .catch(() => {
        alert("Make sure Whatsapp installed on your device");
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.titleText}>
          Example to Send WhatsApp Message from React Native App
        </Text>
        <Text style={styles.titleTextsmall}>Enter WhatsApp Number</Text>
        <TextInput
          value={mobileNumber}
          onChangeText={(mobileNumber) => setMobileNumber(mobileNumber)}
          placeholder={"Enter WhatsApp Number"}
          keyboardType="numeric"
          style={styles.textInput}
        />
        <Text style={styles.titleTextsmall}>WhatsApp Message</Text>
        <TextInput
          value={whatsAppMsg}
          onChangeText={(whatsAppMsg) => setWhatsAppMsg(whatsAppMsg)}
          placeholder={"WhatsApp Message"}
          style={styles.textInput}
        />
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonStyle}
          onPress={initiateWhatsApp}
        >
          <Text style={styles.buttonTextStyle}>Send WhatsApp Message</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
  },
  titleText: {
    fontSize: 22,
    textAlign: "center",
    fontWeight: "bold",
  },
  titleTextsmall: {
    marginVertical: 8,
    fontSize: 16,
  },
  buttonStyle: {
    justifyContent: "center",
    marginTop: 15,
    padding: 10,
    backgroundColor: "#8ad24e",
  },
  buttonTextStyle: {
    color: "#fff",
    textAlign: "center",
  },
  textInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    width: "100%",
    paddingHorizontal: 10,
  },
});
