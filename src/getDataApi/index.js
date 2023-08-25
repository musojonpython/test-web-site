import React, {Component} from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import axios from "axios";

class Backend extends Component {
    
state = {
    postlar: []
}
    
    componentDidMount() {
        // fetch("https://jsonplaceholder.typicode.com/users")
        // .then((response) => response.json())
        // .then(postlar => {
        //     console.log(postlar);
        //     this.setState({postlar:postlar});
        // })
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res => {
            const users = res.data;
            // console.log(users)
            this.setState({postlar: users})
        })
    }

    render() { 
        return ( <>
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
    {this.state.postlar.map((post, index) => (
        <>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
        </ListItemAvatar>
        <ListItemText
          primary={post.phone}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {post.name}
              </Typography>
              {post.email}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      </>
      ))}
    </List>
        </> );
    }
}
 
export default Backend;