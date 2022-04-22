import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import TextRating from './Rating';

export default function GutterlessList() {
  return (
    <List sx={{ width: '100%', maxWidth: 700, bgcolor: 'background.paper',borderStyle:'dashed',margin:'auto',marginBottom:'10px' }}>
     
        <ListItem
          disableGutters
          secondaryAction={<TextRating rate={4.5} />}
        >
          <ListItemText sx={{marginLeft:'25px'}} primary="HTML" />
        </ListItem>
        <hr style={{width:'500px',borderStyle: "dashed"}}/>
        <ListItem
          disableGutters
          secondaryAction={<TextRating rate={4} />}
        >
          <ListItemText sx={{marginLeft:'25px'}} primary="Css" />
        </ListItem>
        <hr style={{width:'500px',borderStyle: "dashed"}}/>
        <ListItem
          disableGutters
          secondaryAction={<TextRating rate={3.5} />}
        >
          <ListItemText sx={{marginLeft:'25px'}} primary="BootStrap5" />
        </ListItem>
        <hr style={{width:'500px',borderStyle: "dashed"}}/>
        <ListItem
          disableGutters
          secondaryAction={<TextRating rate={3} />}
        >
          <ListItemText sx={{marginLeft:'25px'}} primary="Chart.js" />
        </ListItem>
        <hr style={{width:'500px',borderStyle: "dashed"}}/>
        <ListItem
          disableGutters
          secondaryAction={<TextRating rate={3.5} />}
        >
          <ListItemText sx={{marginLeft:'25px'}} primary="MUI" />
        </ListItem>
        <hr style={{width:'500px',borderStyle: "dashed"}}/>
        <ListItem
          disableGutters
          secondaryAction={<TextRating rate={4} />}
        >
          <ListItemText sx={{marginLeft:'25px'}} primary="JavaScript" />
        </ListItem>
        <hr style={{width:'500px',borderStyle: "dashed"}}/>
        <ListItem
          disableGutters
          secondaryAction={<TextRating rate={3.5} />}
        >
          <ListItemText sx={{marginLeft:'25px'}} primary="React.js" />
        </ListItem>
        <hr style={{width:'500px',borderStyle: "dashed"}}/>
        <ListItem
          disableGutters
          secondaryAction={<TextRating rate={4} />}
        >
          <ListItemText sx={{marginLeft:'25px'}} primary="Git" />
        </ListItem>
      
    </List>
  );
}
