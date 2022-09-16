import { useState } from "react";
import classes from "./CoachSchedule.module.css";
import SessionPicker from "../Booking/SessionPicker";
import Button from "../UI/Button";

const sessionTypes = [{ type: "" , duration:"", price:""}];

function CoachSchedule(props) {
  const [selectedDate, setSelectedDate] = useState(null);

  function handleSelectDate(newDate) {
    setSelectedDate(newDate);
  }

  return (
    <div className={classes.layout}>
      <Button>Back</Button>
      <h2>Please select a date and time below</h2>
      <SessionPicker dateTime={selectedDate} onSelectDate={handleSelectDate} />
      <h3>Select session type</h3>
      <Button>Confirm Booking</Button>
    </div>
  );
}

export default CoachSchedule;
