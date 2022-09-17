import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import dayjs from "dayjs";

function SessionPicker(props) {
  const localizedFormat = require("dayjs/plugin/localizedFormat");
  dayjs.extend(localizedFormat);

  function handleSelectDate(newDate) {
    props.onSelectDate(newDate);
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker
        renderInput={(param) => <TextField {...param} />}
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
      />
    </LocalizationProvider>
  );
}

export default SessionPicker;
