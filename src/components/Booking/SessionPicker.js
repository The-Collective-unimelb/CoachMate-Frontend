import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import dayjs from "dayjs";

function SessionPicker(props) {
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
        minDateTime={dayjs()}
        views={['year', 'day', 'hours']}
      />
    </LocalizationProvider>
  );
}

export default SessionPicker;
