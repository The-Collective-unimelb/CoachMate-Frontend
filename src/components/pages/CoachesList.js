import Button from "../UI/Button";
import CoachCard from "../UI/CoachCard";
import classes from "./CoachesList.module.css";
import { useState } from "react";
import {
  TextField,
  Slider,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { Stack } from "@mui/system";

const DUMMY_VARS = [
  { id: 1, name: "John", avail: "9/9/22", location: "mel" },
  { id: 2, name: "Jack", avail: "10/10/22", location: "mel" },
  { id: 3, name: "James", avail: "11/11/22", location: "mel" },
  { id: 4, name: "Jamie", avail: "12/12/22", location: "mel" },
];

function CoachesList() {
  const [openFilter, setOpenFilter] = useState(false);
  const [priceVal, setPriceVal] = useState([20, 30]);

  function handleFilter(event) {
    event.preventDefault();
    setOpenFilter(!openFilter);
  }

  function valuetext(val) {
    return `$${val}`;
  }
  const textFieldCss = {
    margin: "5px 10px 5px 24px",
    border: "1px solid #ddd",
  };

  const labelsCss = {
    margin: "5px 0px 5px 24px",
    "font-size": "16px"
  }

  const minDistance = 10;
  const maxPrice = 100;
  function handlePriceSlider(event, newValue, activeThumb) {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], maxPrice - minDistance);
        setPriceVal([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setPriceVal([clamped - minDistance, clamped]);
      }
    } else {
      setPriceVal(newValue);
    }
  }

  const basicForm = (
    <form className={classes.form}>
      {/* <label htmlFor="search">Search Coach: </label> */}
      {/* <input id="search" type="text" placeholder="Search..." /> */}
      <TextField id="search" label="Search" className={classes["textfield"]} />
      <div className={classes.button}>
        <Button onClick={handleFilter}>Filter</Button>
        <Button>Search</Button>
      </div>
    </form>
  );

  const filterForm = (
    <form className={classes.form}>
      <Stack>
        <TextField
          id="name"
          label="Name"
          sx={textFieldCss}
          className={classes["textfield"]}
        />
        <TextField
          id="location"
          label="Location"
          sx={textFieldCss}
          className={classes["textfield"]}
        />
        <Typography id="price-slider" sx={labelsCss}>
          Session price range
        </Typography>
        <Slider
          aria-labelledby="price-slider"
          value={priceVal}
          onChange={handlePriceSlider}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          min={20}
          max={maxPrice}
          disableSwap
          sx={{ margin: "10px 10px 5px 24px", width: "700px" }}
        />
        <FormGroup className={classes["labels"]}>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Private Session"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Group Sessions"
          />
        </FormGroup>
      </Stack>
      <div className={classes.button}>
        <Button onClick={handleFilter}>Search</Button>
      </div>
    </form>
  );

  return (
    <div className={classes["coach-list"]}>
      {!openFilter && basicForm}
      {openFilter && filterForm}
      <section className={classes["coach-cards"]}>
        {DUMMY_VARS.map((coach) => {
          return (
            <CoachCard
              key={coach.id}
              name={coach.name}
              avail={coach.avail}
              location={coach.location}
            />
          );
        })}
      </section>
    </div>
  );
}

export default CoachesList;
