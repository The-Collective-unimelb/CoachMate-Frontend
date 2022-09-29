import classes from "./AboutUs.module.css";

function AboutUs() {
  return (
    <div className={classes["flexbox-main-content"]}>
      <h2>About Us</h2>
      <h3>
        Diabetes@Home was established in 2022 and is the national body for
        people affected by all types of diabetes and those at risk. Through
        leadership, prevention, management and research, Diabetes Australia is
        committed to reducing the impact of diabetes. We work in partnership
        with diabetes health professionals and educators, researchers and
        healthcare providers to minimise the impact of diabetes on the
        Australian community.
      </h3>
      <h4>
        Diabetes Australia consists of member organisations, each falling into
        one (at least) of the following categories: Specialist – medical,
        educational, scientific Community – state and territory diabetes
        organisations Research – Diabetes Australia Research Trust, Kellion
        Research Foundation, Diabetes Research Foundation – Western Australia.
      </h4>
    </div>
  );
}

export default AboutUs;
