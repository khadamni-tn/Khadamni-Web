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
      .unwrap()
      .then(() => {
        props.history.push("/Dashboard/Posts");
        console.log("hi");
        window.location.reload();
      })
      .catch(() => {
        console.error("error");
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
      
      <input type="submit"/>
      
      </form>
    </div>
  );
}
