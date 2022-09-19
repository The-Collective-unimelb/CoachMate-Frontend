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

const initialFilterFormData = {
  name: "",
  location: "",
  priceRange: [20, 30],
  sessionType: {
    private: true,
    group: true,
  },
};

function CoachesList() {
  const [openFilter, setOpenFilter] = useState(false);
  const [searchVal, setSearchVal] = useState("");
  const [filterFormData, setFilterFormData] = useState(initialFilterFormData);

  const minDistance = 10;
  const maxPrice = 100;
  function handlePriceSlider(event, newValue, activeThumb) {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], maxPrice - minDistance);
        setFilterFormData({
          ...filterFormData,
          priceRange: [clamped, clamped + minDistance],
        });
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setFilterFormData({
          ...filterFormData,
          priceRange: [clamped - minDistance, clamped],
        });
      }
    } else {
      setFilterFormData({
        ...filterFormData,
        priceRange: newValue,
      });
    }
  }

  function handleSearchVal(event) {
    if (openFilter) {
      if (event.target.id === "name") {
        setFilterFormData({
          ...filterFormData,
          name: event.target.value.trim(),
        });
      }
      if (event.target.id === "location") {
        setFilterFormData({
          ...filterFormData,
          location: event.target.value.trim(),
        });
      }
    } else {
      setSearchVal(event.target.value);
    }
  }

  function handleOpenFilter() {
    setOpenFilter(!openFilter);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(searchVal);
    console.log(filterFormData);

    setOpenFilter(false);
  }

  return (
    <div className={classes["coach-list"]}>
      {!openFilter && (
        <CoachSearch
          onButtonClick={handleOpenFilter}
          onSubmit={handleFormSubmit}
          onInput={handleSearchVal}
        />
      )}
      {openFilter && (
        <CoachSearchFilter
          sliderVal={filterFormData.priceRange}
          onSliderChange={handlePriceSlider}
          onButtonClick={handleOpenFilter}
          maxSliderVal={maxPrice}
          onSubmit={handleFormSubmit}
          onInput={handleSearchVal}
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
