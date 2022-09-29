import classes from "./AboutUs.module.css";

function AboutUs() {
  return (
    <div className={classes["flexbox-main-content"]}>
      <img className={classes.image} src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" />
      <h2 className={classes.title}>About Us</h2>
      <p className={classes.about}>
        CoachMate's <b>mission</b> is to bring coaches and clients together
        by enabling them to easily reserve their services online no matter
        which, where they are or when they want to book!
      </p>
      <p className={classes.about}>
        Our <b>vision</b> is to become the best global customer centric One Stop
        Solution where coaches and their clients unite in can
        harmony.
      </p>
      <p className={classes.about}>
        Today CoachMate runs four offices around the world with the
        headquarters based in Melbourne.
      </p>
      <br />
      <br />
      <div className={classes.details}>
        <h2 className={classes["details-title"]}>WE LOVE WHAT WE DO</h2>
        and we do our BEST to support our clients all the way. We are constantly
        improving our services and are proud to say that most of our new
        SimplyBook.me users come through referrals from existing clients. We
        look forward to having you, as one of our new users in the future!
      </div>
    </div>
  );
}

export default AboutUs;
