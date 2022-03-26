import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ImageIcon,
} from "@material-ui/core";
import React from "react";

const Todo = ({ todo }) => {
  const date = new Date();
  console.log(date);
  const full = date.getDate();
  console.log(full);
  const day = date.getDay();
  const hour = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();
  return (
    <center>
      <List>
        <ListItem>
          <ListItemAvatar></ListItemAvatar>
          <ListItemText primary={todo} secondary={full}></ListItemText>
        </ListItem>
      </List>
    </center>
  );
};

export default Todo;
