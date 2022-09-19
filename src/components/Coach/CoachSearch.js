import classes from "./CoachSearch.module.css";
import Button from "../UI/Button";
import TextMUI from "../UI/TextMUI";

function CoachSearch(props) {
  return (
    <form className={classes.form} onSubmit={props.onSubmit}>
      <TextMUI
        id="search"
        label="Search"
        className={classes["textfield"]}
        onInput={props.onInput}
      />
      <div className={classes.button}>
        <Button type="button" onClick={props.onButtonClick}>Filter</Button>
        <Button type="submit">Search</Button>
      </div>
    </form>
  );
}

export default CoachSearch;
