import { ExpandLess, ExpandMore } from '@mui/icons-material';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import AssignmentIcon from '@mui/icons-material/Assignment';
import FestivalTwoToneIcon from '@mui/icons-material/FestivalTwoTone';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import { Collapse, List } from '@mui/material';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import * as React from 'react';

export const mainListItems = () => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      {/* <ListSubheader component="div" inset>
        관리
      </ListSubheader> */}
      <ListItemButton onClick={handleClick} sx={{ p: 2 }}>
        <ListItemIcon>
          <SupervisedUserCircleIcon />
        </ListItemIcon>
        <ListItemText primary="회원 관리" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ p: 2, pl: 4 }}>
            <ListItemIcon>
              <AccessibilityNewIcon />
            </ListItemIcon>
            <ListItemText primary="일반 회원 관리" />
          </ListItemButton>
          <ListItemButton sx={{ p: 2, pl: 4 }}>
            <ListItemIcon>
              <AdminPanelSettingsIcon />
            </ListItemIcon>
            <ListItemText primary="관리자 회원 관리" />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton sx={{ p: 2 }}>
        <ListItemIcon>
          <FestivalTwoToneIcon />
        </ListItemIcon>
        <ListItemText primary="페스티벌 관리" />
      </ListItemButton>
    </>
  );
};

export const secondaryListItems = (
  <>
    <ListSubheader component="div" inset>
      앱 관리
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>
  </>
);
