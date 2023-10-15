import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import React from "react";

import HouseIcon from '@mui/icons-material/House';
import InfoIcon from '@mui/icons-material/Info';
import LoginIcon from '@mui/icons-material/Login';

const HeaderList = () => {
  const listItem = [
    {
      name: "Home",
      path: "/home",
      icon: <HouseIcon />,
    },
    {
        name: "About",
        path: "/about",
        icon: <InfoIcon />,
      },
      {
        name: "Login",
        path: "/login",
        icon: <LoginIcon />,
      },
  ];
  return (
    <List component={"ul"} dense={true} disablePadding={true}>
      <ListItem className="">
        {listItem &&
          listItem.map((item, index) => (
            <ListItemButton component="a" href={item.path} key={index} className="hover:text-blue-400 bg-transparent" >
              {item.icon}
              <ListItemText className="ms-1">{item.name}</ListItemText>
            </ListItemButton>
          ))}
      </ListItem>
    </List>
  );
};

export default HeaderList;
