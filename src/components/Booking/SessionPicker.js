import { useState } from "react";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import dayjs from "dayjs";

function SessionPicker(props) {
  const [hasError, setHasError] = useState(false)

  const localizedFormat = require("dayjs/plugin/localizedFormat");
  dayjs.extend(localizedFormat);

  function handleSelectDate(newDate) {
    props.onSelectDate(newDate);
  }

  function handleError() {
    setHasError(!hasError);
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker
        renderInput={(param) => (
          <TextField
            {...param}
            error={hasError}
            helperText={hasError && "Invalid date time"}
          />
        )}
        label="Pick a time"
        value={props.dateTime}
        onChange={handleSelectDate}
        inputFormat="LLL"
        minDate={dayjs()}
        maxDate={dayjs().add(5, "month")}
        minTime={dayjs().hour(8)}
        maxTime={dayjs().hour(18)}
        views={["year", "day", "hours"]}
        disableMaskedInput
        onError={handleError}
      />
    </LocalizationProvider>
  );
}

export default SessionPicker;
