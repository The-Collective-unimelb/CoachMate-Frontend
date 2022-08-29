import {Routes, Route } from "react-router-dom";
import NoPage from "./components/pages/NoPage";
import Welcome from "./components/pages/Welcome";
import Footer from "./components/Layout/Footer.js";
import Header from "./components/Layout/Header";
import CoachesList from "./components/pages/CoachesList";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Welcome/>}/>
        <Route path="/about-us"  element={<NoPage/>}/>
        <Route path="/contact"  element={<NoPage/>}/>
        <Route path="/login"  element={<NoPage/>}/>
        <Route path="/coaches"  element={<CoachesList/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
