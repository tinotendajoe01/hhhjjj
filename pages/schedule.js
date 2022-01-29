import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import React, { useState } from "react";
import Schedule from "../components/Schedule";

const Form = () => {
  const [todos, setTodos] = useState([]);
  //connect input to state
  const [input, setInput] = useState("");
  //
  const addTodo = (e) => {
    //this will fire off wen we click the btn
    e.preventDefault();
    setTodos([...todos, input]);
    setInput(""); /// input after submission
  };

  return (
    <center>
      <h1>Create Schedule </h1>
      <form className=" flex flex-col mx-10 space-y-2">
        <FormControl>
          <InputLabel>Add Your Schedule</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>

        <Button
          button
          disabled={!input}
          type="submit"
          onClick={addTodo}
          variant="contained"
          color="primary"
        >
          Add To Calendar
        </Button>
      </form>
      <ul>
        {todos.map((todo) => (
          <Schedule todo={todo} />
        ))}
      </ul>
    </center>
  );
};

export default Form;
