import { useState } from "react";
import classes from "./CoachSchedule.module.css";
import SessionPicker from "../Booking/SessionPicker";
import Button from "../UI/Button";
import SessionType from "../Booking/SessionType";
import { Stack } from "@mui/system";

const sessionTypes = [
  { type: "1 on 1", duration: "30mins", price: "$40" },
  { type: "1 on 1", duration: "60mins", price: "$80" },
  { type: "Group", duration: "30mins", price: "$20" },
  { type: "Group", duration: "60mins", price: "$40" },
];

function CoachSchedule(props) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [sessionType, setSessionType] = useState("Private");

  function handleSelectDate(newDate) {
    setSelectedDate(newDate);
  }

  function handleSelectType(value) {
    setSessionType(value);
    console.log(value);
  }

  return (
    <div className={classes.layout}>
      <Stack>
        <Button>Back</Button>
        <div>
          <h2>Please select session type, date, and time below</h2>
          <SessionPicker
            dateTime={selectedDate}
            onSelectDate={handleSelectDate}
          />
          <h3>Select session type</h3>
          <SessionType
            sessionType={sessionType}
            onSelectType={handleSelectType}
          />
        </div>
        <Button>Confirm Booking</Button>
      </Stack>
    </div>
  );
}

export default CoachSchedule;
