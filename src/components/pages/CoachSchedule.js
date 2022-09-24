import { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import classes from "./CoachSchedule.module.css";
import SessionPicker from "../Booking/SessionPicker";
import Button from "../UI/Button";
import SessionType from "../Booking/SessionType";
import { Stack } from "@mui/system";
import Swal from "sweetalert2";
import NoPage from "./NoPage";

const sessionTypes = [
  { type: "1 on 1", duration: "30mins", price: "$40" },
  { type: "1 on 1", duration: "60mins", price: "$80" },
  { type: "Group", duration: "30mins", price: "$20" },
  { type: "Group", duration: "60mins", price: "$40" },
];

function CoachSchedule(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedDate, setSelectedDate] = useState(null);
  const [sessionType, setSessionType] = useState("Private");

  if (location.state === null) {
    return (
      <>
        <NoPage
          text="Please select a coach from "
          linkText="here"
          to="/coaches"
        />
      </>
    );
  }

  function handleSelectDate(newDate) {
    setSelectedDate(newDate);
  }

  function handleSelectType(value) {
    setSessionType(value);
    console.log(value);
  }

  function handleConfirmBooking() {
    Swal.fire({
      title: "Success!",
      text: "Your booking is successful!",
      icon: "success",
      showCancelButton: true,
      confirmButtonText: "Back to home page",
      cancelButtonText: "Close",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/");
      }
    });
  }

  return (
    <div className={classes.layout}>
      <Stack alignItems="center" justifyContent="center">
        <Button onClick={() => navigate(-1)}>Back</Button>
        <h2>{location.state.coach.name}</h2>
        <SessionPicker
          dateTime={selectedDate}
          onSelectDate={handleSelectDate}
        />
        <h3>Select session type</h3>
        <SessionType
          sessionType={sessionType}
          onSelectType={handleSelectType}
        />
        <Button onClick={handleConfirmBooking}>Confirm Booking</Button>
      </Stack>
    </div>
  );
}

export default CoachSchedule;
