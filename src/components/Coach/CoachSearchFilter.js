import classes from "./CoachSearch.module.css";
import {
  Slider,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import TextMUI from "../UI/TextMUI";
import Button from "../UI/Button";
import { Stack } from "@mui/system";

function CoachSearchFilter(props) {
  const textFieldCss = {
    margin: "5px 10px 5px 24px",
    border: "1px solid #ddd",
  };

  const labelsCss = {
    margin: "5px 0px 5px 24px",
    "font-size": "16px",
  };

  return (
    <form className={classes.form}>
      <Stack>
        <TextMUI id="name" label="Name" sx={textFieldCss} />
        <TextMUI id="location" label="Location" sx={textFieldCss} />
        <Typography id="price-slider" sx={labelsCss}>
          Session price range
        </Typography>
        <Slider
          aria-labelledby="price-slider"
          value={props.sliderVal}
          onChange={props.onSliderChange}
          valueLabelDisplay="auto"
          min={20}
          max={props.maxSliderVal}
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
        <Button onClick={props.onButtonClick}>SEARCH</Button>
      </div>
    </form>
  );
}

export default CoachSearchFilter;
