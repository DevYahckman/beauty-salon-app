import React from "react";
import {
  Drawer as MUIDrawer,
  ListItem,
  ListItemIcon,
  ListItemButton,
  ListItemText,
  List,
} from "@material-ui/core";
function SideBars(props) {
  return (
    <div>
      <MUIDrawer open>
        <div>
          <List>
            {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItem Button key={text}>
                  {/* <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon> */}
                  <ListItemText primary={text} />
                </ListItem>
              </ListItem>
            ))}
          </List>
        </div>
      </MUIDrawer>
    </div>
  );
}

export default SideBars;
