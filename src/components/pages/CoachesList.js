import CoachCard from "../UI/CoachCard";
import classes from "./CoachesList.module.css";
import { useState } from "react";
import CoachSearch from "../Coach/CoachSearch";
import CoachSearchFilter from "../Coach/CoachSearchFilter";

const DUMMY_VARS = [
  { id: 1, name: "John", avail: "9/9/22", location: "mel" },
  { id: 2, name: "Jack", avail: "10/10/22", location: "mel" },
  { id: 3, name: "James", avail: "11/11/22", location: "mel" },
  { id: 4, name: "Jamie", avail: "12/12/22", location: "mel" },
];

function CoachesList() {
  const [openFilter, setOpenFilter] = useState(false);
  const [priceVal, setPriceVal] = useState([20, 30]);

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

  return (
    <div className={classes["coach-list"]}>
      {!openFilter && <CoachSearch onButtonClick={setOpenFilter} />}
      {openFilter && (
        <CoachSearchFilter
          sliderVal={priceVal}
          onSliderChange={handlePriceSlider}
          onButtonClick={setOpenFilter}
          maxSliderVal={maxPrice}
        />
      )}
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
