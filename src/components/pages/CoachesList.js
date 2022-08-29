import Button from "../UI/Button";
import CoachCard from "../UI/CoachCard";
import classes from "./CoachesList.module.css";

const DUMMY_VARS = [
  { name: "John", avail: "9/9/22", location: "mel" },
  { name: "Jack", avail: "10/10/22", location: "mel" },
  { name: "James", avail: "11/11/22", location: "mel" },
  { name: "Jamie", avail: "12/12/22", location: "mel" }
];

function CoachesList() {
  return (
    <div>
      <form className={classes.form}>
        {/* <label htmlFor="search">Search Coach: </label> */}
        <input id="search" type="text" placeholder="Search..." />
        <div className={classes.buttons}>
          <Button>Filter</Button>
          <Button>Search</Button>
        </div>
      </form>
      <section className={classes["coach-cards"]}>
        {DUMMY_VARS.map((coach) => {
          return (
            <CoachCard
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
