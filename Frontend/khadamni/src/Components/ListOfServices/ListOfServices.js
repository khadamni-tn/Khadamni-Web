import * as React from 'react';

import Button from '@mui/material/Button';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { makeStyles } from "@material-ui/core/styles";
import { CardActionArea } from '@mui/material';



function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="localhost:3000">
        khademni.tn
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = [
  {
    img:
      "https://i.pinimg.com/564x/74/6e/24/746e24b1f20ea4f0cf148e33642f9445.jpg",
    title: "Plumbering"
  },
  {
    img:
      "https://i.pinimg.com/564x/38/bf/5c/38bf5c58d593829afb61c7ff15c7e26a.jpg",
    title: "Kids"
  },
  {
    img:
      "https://i.pinimg.com/564x/38/bf/5c/38bf5c58d593829afb61c7ff15c7e26a.jpg",
    title: "Gardening"
  },
  {
    img:
      "https://i.pinimg.com/564x/98/d4/16/98d41697b556b86cf54b6310fa483d18.jpg",
    title: "Animals"
  },
  {
    img:
      "https://images.unsplash.com/photo-1564135624576-c5c88640f235?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80",
    title: "IT"
  },
  {
    img:
      "https://images.unsplash.com/photo-1564135624576-c5c88640f235?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80",
    title: "House moving"
  }
];
const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
}));
const theme = createTheme();


export default function ListOfServices() {
  const classes = useStyles();
  return (
    
    <ThemeProvider theme={theme}>
        <h1>Choose your category</h1>
      <CssBaseline />
     <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
           
             {cards.map(card => (
              <Grid item key={card} xs={12} sm={6} md={4}>
               
                <Card link="/PostService" className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.img}
                    title="Image title"
                    href="/hello"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                    {card.title}
                    </Typography>
                    <Typography>description</Typography>
                  </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button href='/PostService' size="small" color="primary">
                      Select
                    </Button>
        
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Khademni.tn
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          We are here to help you and make your life easier
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}