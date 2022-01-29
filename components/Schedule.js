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
  return (
    <center>
      <List>
        <ListItem>
          <ListItemAvatar></ListItemAvatar>
          <ListItemText
            primary={todo}
            secondary="Dummy deadline"
          ></ListItemText>
        </ListItem>
      </List>
    </center>
  );
};

export default Todo;
