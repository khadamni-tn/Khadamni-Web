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
import PrimarySearchAppBar from '../Header/AppBar';
import { useNavigate } from "react-router-dom";


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
      "https://www.super-bac.com/articles/wp-content/uploads/2020/03/mercatique-min.png",
    title: "IT"
  },
  {
    img:
      "https://img.freepik.com/free-photo/happy-baby-sitting-table-kitchen-eating-with-appetite_144520-794.jpg",
    title: "Baby Sitting"
  },
  {
    img:
      "https://ca-times.brightspotcdn.com/dims4/default/fcfdda9/2147483647/strip/true/crop/1800x1013+0+0/resize/840x473!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Ff5%2F33%2F417fa05141e394041be1e7fe9813%2Fgardening-clip-art-adobe-stock.jpg",
    title: "Gardening"
  },
  {
    img:
      "https://images.theconversation.com/files/223380/original/file-20180615-85830-1m127xe.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop",
    title: "Animals"
  },
  {
    img:
      "https://testprepscore.com/wp-content/uploads/2021/04/In-Person-vs-Online-Tutoring-750x480.jpg",
    title: "Tutoring"
  },
  {
    img:
      "https://img.huffingtonpost.com/asset/5e75341e2600000a34b67120.jpeg?cache=SxSWCaxXjg&ops=crop_0_527_3902_2751,scalefit_630_noupscale",
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
    paddingTop: "90%" // 16:9
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


export default function Album() {
  const classes = useStyles();

  const navigate = useNavigate();
  return (

    <ThemeProvider theme={theme}>
      <PrimarySearchAppBar />
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
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Find the ideal Jobber for your daily services.
            </Typography>
            
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained" href="/JobberSignUp">Become a jobber</Button>
              <Button onClick={() => navigate("/SignIn")} variant="outlined"> Post a job offer</Button>
            </Stack>
            <Typography variant="h4" align="left" color="text.secondary" paragraph>
              What service do you need ?
            </Typography>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>

            {cards.map(card => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.img}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.title}
                    </Typography>
                    <Typography>description</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
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