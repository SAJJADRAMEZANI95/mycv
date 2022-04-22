import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function MediaCard({img,alt,title,info,url}) {
  return (
    <Card sx={{ Width: '600px' ,
        textAlign: 'center',
        
    }}>
      <CardMedia
        component="img"
        height="140"
        image={img}
        alt={alt}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {info}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" size="small"><a style={{textDecoration:'none',color:'white'}} href={url}>view</a></Button>
      </CardActions>
    </Card>
  );
}
