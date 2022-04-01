import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AssignmentIcon from '@material-ui/icons/Assignment';
import LocalDiningIcon from '@material-ui/icons/LocalDining';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';



function ListItems(props){

// function handleOnClick(){
    
//     console.log(props.setdiningclicked());
//   }

return ( 
<div>
<List>
 <div>
    <ListItem button onClick ={() => {props.setdiningclicked()}} >
      <ListItemIcon>
        <LocalDiningIcon />
      </ListItemIcon>
      <ListItemText primary="Restuarant" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Feature2" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Feature3" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Feature4" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Feature5" />
    </ListItem>
  </div>  
</List>
 <Divider />
<List>
    <div>
    <ListSubheader inset></ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Info1" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Info2" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Info3" />
    </ListItem>
    </div>
    </List>
    </div>)
}

export default ListItems;