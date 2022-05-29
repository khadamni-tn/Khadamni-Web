import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';



import AssignmentIcon from '@mui/icons-material/Assignment';
import CheckIcon from '@mui/icons-material/Check';

import CampaignIcon from '@mui/icons-material/Campaign';
import PeopleIcon from '@mui/icons-material/People';
import { Link } from 'react-router-dom';


export const mainListItems = (
 
 <React.Fragment>
   
    <ListItemButton >
    <Link to="/Dashboard/Posts">
      <ListItemIcon>
        <CampaignIcon />
      </ListItemIcon>
      <ListItemText primary="My posts" />
      </Link>
    </ListItemButton>
    <ListItemButton>
    <Link to="/Dashboard/FilteredJobbers">
      <ListItemIcon>
        <CheckIcon />
      </ListItemIcon>
      <ListItemText primary="Jobbers" />
      </Link>
    </ListItemButton>
    <ListItemButton>
    <Link to="/Dashboard/Jobbers">
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="All Jobbers" />
      </Link>
    </ListItemButton>
    
    
    
  </React.Fragment>
);

// export const secondaryListItems = (
//   <React.Fragment>
//     <ListSubheader component="div" inset>
//       Reports
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
//       <ListItemText primary="Last year" />
//     </ListItemButton>
//   </React.Fragment>
// );