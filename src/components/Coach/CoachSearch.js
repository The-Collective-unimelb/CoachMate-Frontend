import classes from "./CoachSearch.module.css";
import Button from "../UI/Button";
import TextMUI from "../UI/TextMUI";

function CoachSearch(props) {

  return (
    <form className={classes.form}>
      <TextMUI id="search" label="Search" className={classes["textfield"]} />
      <div className={classes.button}>
        <Button onClick={props.onButtonClick}>Filter</Button>
        <Button>Search</Button>
      </div>
    </form>
  );
}

export default CoachSearch;
