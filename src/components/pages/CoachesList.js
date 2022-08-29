import CoachCard from "../UI/CoachCard";
import classes from "./CoachesList.module.css";

function CoachesList() {
  return (
    <div>
      <form className={classes.form}>
        {/* <label htmlFor="search">Search Coach: </label> */}
        <input id="search" type="text" placeholder="Enter Name" />
        <button>Filter</button>
        <button>Search</button>
      </form>
      <section className={classes["coach-cards"]}>
        <CoachCard />
        <CoachCard />
      </section>
    </div>
  );
}

export default CoachesList;
