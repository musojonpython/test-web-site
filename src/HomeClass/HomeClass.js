import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Users from "./users.json";

export default function HomeClass() {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      
      {Users.map((user) => {
        return(
        <>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src={user.photo} />
          </ListItemAvatar>
          <ListItemText
            primary={user.phone}
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  {user.name}
                </Typography>
                {user.country}
              </React.Fragment>
            }
          />
          
        </ListItem>
        <Divider variant="inset" component="li" />
      </>
      )
    })}
    </List>
  );
}
