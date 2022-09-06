import React from "react";
import {
  Drawer as MUIDrawer,
  ListItem,
  ListItemIcon,
  ListItemButton,
  ListItemText,
  List,
} from "@material-ui/core";
import { FaHome, FaSwatchbook, FaFacebook, FaTwitter } from "react-icons/fa";

function SideBars(props) {
  const itemsList = [
    {
      text: "Inbox",
      icon: <FaHome />,
    },
    {
      text: "Starred",
      icon: <FaHome />,
    },
    {
      text: "Send email",
      icon: <FaHome />,
    },
    {
      text: "Draft",
      icon: <FaHome />,
    },
  ];
  return (
    <div>
      <MUIDrawer variant="permanent">
        <div style={{ width: "160px" }}>
          <List>
            {itemsList.map((item, index) => {
              const { text, icon } = item;
              return (
                <ListItem key={text} disablePadding>
                  <ListItem Button key={text}>
                    {icon && <ListItemIcon>{icon}</ListItemIcon>}
                 
                    <ListItemText primary={text} />
                  </ListItem>
                </ListItem>
              );
            })}
          </List>
        </div>
      </MUIDrawer>
    </div>
  );
}

export default SideBars;
