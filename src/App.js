import { Fragment } from "react";
import Header from "./components/Layout/Header";
import Welcome from "./components/pages/Welcome";

function App() {
  return (
    <Fragment>
       <Header/>
       <Welcome/>
    </Fragment>
  );
}

export default App;
