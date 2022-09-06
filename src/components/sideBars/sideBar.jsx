import React, {useState} from "react";
import {
  Drawer as MUIDrawer,
  ListItem,
  ListItemIcon,
  ListItemButton,
  ListItemText,
  List,
} from "@material-ui/core";
import { FaHome, FaSwatchbook, FaFacebook, FaTwitter } from "react-icons/fa";
import {makeStyles} from '@material-ui/core/styles'
import {withRouter} from 'react-router-dom'

function SideBars(props) {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  const {history} = props
  const itemsList = [
    {
      text: "Inbox",
      icon: <FaHome />,
      onClick : ()=> history.push('/')
    }, 
    {
      text: "Starred"

    },
    {
      text: "Book",
      icon: <FaHome />,
      onClick : ()=> history.push('/book')

    },
    {
      text: "Draft",
      icon: <FaHome />,
    },
  ];
  return (
    <div>
      <MUIDrawer variant="permanent" styles={{width:'190px'}} >
        <div >
          <List>
            {itemsList.map((item, index) => {
              const { text, icon,onClick  } = item;
              return (
                <ListItem key={text} disablePadding>
                  <ListItem button key={text}  onClick = {onClick}>
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

export default withRouter(SideBars);
