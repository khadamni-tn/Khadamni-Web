import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { createPost } from '../../redux/Slices/post.slice'
import { useNavigate } from 'react-router-dom';
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ProfileAppBar from "../Dashboard/profileAppBar";

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import WorkIcon from '@mui/icons-material/Work';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PostJobCss from '../PostJob/PostJob.module.css'

const theme = createTheme();
export default function SelectOtherProps(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [Loading, setLoading] = React.useState('');
  const [Location, setLocation] = React.useState('');

  const handleLocation = (event) => {
    setLocation(event.target.value);
  };

  const [Schedule, setSchedule] = React.useState('');

  const handleSchedule = (event) => {
    setSchedule(event.target.value);
  };

  const [Field, setField] = React.useState('');

  const handleField = (event) => {
    setField(event.target.value);
  };

  const handleSubmit = () => {
    const data = {
      field: Field,
      location: Location,
      schedule: Schedule
    }
    

    dispatch(createPost(data, navigate))
      .then(() => {
       
        navigate('/');
      })
      .catch(() => {
        
        console.error("error");
      });
  };

  return (
    <ThemeProvider theme={theme}>

    <div>
    <ProfileAppBar/>

      
      
      
     
      
      
      
    </div>
      <Container component="main" maxWidth="xs">
        
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <WorkIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Create a new job
          </Typography>
          <Box className={PostJobCss.box} component="form"  noValidate sx={{ mt: 1 }}>
          
      <FormControl sx={{ m: 1, minWidth: 120 }} >
        <InputLabel id="demo-simple-select-error-label">Location</InputLabel>
        <Select
          labelId="demo-simple-select-error-label"
          id="demo-simple-select-error"
          value={Location}
          label="Location"
          onChange={handleLocation}
         
        >
         
          <MenuItem value={"Tunis"}>Tunis</MenuItem>
          <MenuItem value={"Ariana"}>Ariana</MenuItem>
          <MenuItem value={"Ben Arous"}>Ben Arous</MenuItem>
        </Select>
        <FormHelperText>Required</FormHelperText>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }} >
          <InputLabel id="demo-simple-select-required-label">Schedule</InputLabel>
          <Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required-label"
          value={Schedule}
          label="Schedule"
          onChange={handleSchedule}
         >
          
          <MenuItem value={"Monday"}>Monday</MenuItem>
          <MenuItem value={"Tuesday"}>Tuesday</MenuItem>
          <MenuItem value={"Wednesday"}>Wednsday</MenuItem>
          <MenuItem value={"Thursday"}>Thursday</MenuItem>
          <MenuItem value={"Friday"}>Friday</MenuItem>
          <MenuItem value={"Saturday"}>Saturday</MenuItem>
          <MenuItem value={"Sunday"}>Sunday</MenuItem>
        </Select>
        <FormHelperText>Required</FormHelperText>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-readonly-label">Field</InputLabel>
        <Select
          labelId="demo-simple-select-readonly-label"
          id="demo-simple-select-readonly"
          value={Field}
          label="Field"
          onChange={handleField}
          inputProps={{ readOnly: false }}
        >
          
          <MenuItem value={"gardening"}>Gardening</MenuItem>
          <MenuItem value={"Baby sitting"}>Baby sitting</MenuItem>
          <MenuItem value={"Plumbering"}>Plumbering</MenuItem>
        </Select>
        <FormHelperText>Required</FormHelperText>
      </FormControl>
            <Button
             onClick={handleSubmit}
              
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
             
            >
              Submit
            </Button>
            
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  
  );
}
