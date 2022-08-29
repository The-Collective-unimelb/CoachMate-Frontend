import classes from "./CoachProfile.module.css";
import pfp from "../../assets/pfp-blue.jpg";
import Card from "../UI/Card";

function CoachProfile() {
  return (
    <div className={classes["vertical-flex"]}>
      <h1 className={classes["heading"]}>COACH PROFILE</h1>
      <div className={classes["horizontal-flex"]}>
        <div className={classes["profile-pic-column"]}>
          <h2 className={classes["coach-name"]}>NAME</h2>
          <img src={pfp} className={classes["profile-pic"]}></img>
        </div>
        <div className={classes["profile-details-column"]}>
          <div>
            <h2>ABOUT ME</h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Libero
            justo laoreet sit amet cursus sit amet dictum sit. Nulla facilisi
            cras fermentum odio eu. Sed risus pretium quam vulputate dignissim
            suspendisse in est. Convallis tellus id interdum velit laoreet id
            donec. Nibh mauris cursus mattis molestie a iaculis. Urna id
            volutpat lacus laoreet. Sagittis aliquam malesuada bibendum arcu
            vitae elementum curabitur vitae. Convallis tellus id interdum velit
            laoreet id donec. Nibh mauris cursus mattis molestie a iaculis. Urna
            id volutpat lacus laoreet.
          </div>
          <div>
            <h2>SKILLS</h2>
            Convallis tellus id interdum velit laoreet id donec. Nibh mauris
            cursus mattis molestie a iaculis. Urna id volutpat lacus laoreet.
            Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur
            vitae.
          </div>
          <div>
            <h2>QUALIFICATIONS</h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Libero
            justo laoreet sit amet cursus sit amet dictum sit. Nulla facilisi
            cras fermentum odio eu. Sed risus pretium quam vulputate dignissim
            suspendisse in est. Convallis tellus id interdum velit laoreet id
            donec. Nibh mauris cursus mattis molestie a iaculis. Urna id
            volutpat lacus laoreet. Sagittis aliquam malesuada bibendum arcu
            vitae elementum curabitur vitae.
          </div>
          <div>
            <h2>SESSION PRICES</h2>
            <div>One-on-One Coaching 30 MINS $175</div>
            <div>One-on-One Coaching 45 MINS $250</div>
            <div>Small Group up to 4 athletes 60 MINS $300</div>
            <div>Team up to 15 athletes 60 MINS $500</div>
            <div>Online Mentoring 30 MINS $100</div>
            <div>Online Mentoring 45 MINS $140</div>
          </div>
          <div>
            <h2>REVIEWES</h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Libero
            justo laoreet sit amet cursus sit amet dictum sit. Nulla facilisi
            cras fermentum odio eu. Sed risus pretium quam vulputate dignissim
            suspendisse in est. Convallis tellus id interdum velit laoreet id
            donec. Nibh mauris cursus mattis molestie a iaculis. Urna id
            volutpat lacus laoreet. Sagittis aliquam malesuada bibendum arcu
            vitae elementum curabitur vitae.
          </div>
          <div>
            <h2>CONTACT INFO</h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Libero
            justo laoreet sit amet cursus sit amet dictum sit. Nulla facilisi
            cras fermentum odio eu. Sed risus pretium quam vulputate dignissim
            suspendisse in est. Convallis tellus id interdum velit laoreet id
            donec. Nibh mauris cursus mattis molestie a iaculis. Urna id
            volutpat lacus laoreet. Sagittis aliquam malesuada bibendum arcu
            vitae elementum curabitur vitae.
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoachProfile;
