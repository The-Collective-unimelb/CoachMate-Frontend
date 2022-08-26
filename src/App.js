import { Fragment } from "react";
import Header from "./components/Layout/Header";
import Welcome from "./components/pages/Welcome";
import Footer from "./components/Layout/Footer.js";

function App() {
  return (
    <Fragment>
       <Header/>
       <Welcome/>
       <Footer/>
    </Fragment>
  );
}

export default App;
