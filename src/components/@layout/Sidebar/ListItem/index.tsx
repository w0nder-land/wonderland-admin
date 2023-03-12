import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Collapse, List } from '@mui/material';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { ISidebar } from 'constants/sidebar';
import { useRouter } from 'next/router';
import * as React from 'react';

interface ISidebarListItem {
  sidebar: ISidebar;
}

export const ListItem = ({ sidebar }: ISidebarListItem) => {
  const [open, setOpen] = React.useState(true);
  const router = useRouter();

  const handleCollapseClick = () => {
    setOpen(!open);
  };

  const handleSidebarClick = (path: string) => {
    router.push(`${sidebar.path}${path}`);
  };

  return (
    <>
      <ListItemButton onClick={handleCollapseClick} sx={{ p: 2 }}>
        <ListItemIcon>{sidebar.icon}</ListItemIcon>
        <ListItemText primary={sidebar.title} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {sidebar.subItems.map((subSidebarItem) => (
            <ListItemButton
              key={subSidebarItem.id}
              sx={{ p: 2, pl: 4 }}
              onClick={() => handleSidebarClick(subSidebarItem.path)}
            >
              <ListItemIcon>{subSidebarItem.icon}</ListItemIcon>
              <ListItemText primary={subSidebarItem.title} />
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </>
  );
};

// export const secondaryListItems = (
//   <>
//     <ListSubheader component="div" inset>
//       앱 관리
//     </ListSubheader>
//     <ListItemButton>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Current month" />
//     </ListItemButton>
//     <ListItemButton>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Last quarter" />
//     </ListItemButton>
//     <ListItemButton>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Year-end sale" />
//     </ListItemButton>
//   </>
// );

export default ListItem;
