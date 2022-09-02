import {Routes, Route} from "react-router-dom";
import NoPage from "./components/pages/NoPage";
import Welcome from "./components/pages/Welcome";
import Footer from "./components/Layout/Footer.js";
import Header from "./components/Layout/Header";
import CoachesList from "./components/pages/CoachesList";
import CoachProfile from "./components/pages/CoachProfile";
import EditProfile from "./components/pages/EditProfile";
import LoginForm from "./components/pages/Login";
import SignUpForm from "./components/pages/SignUp";

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Welcome/>}/>
        {/* FOR PAGE MAKING PURPOSES */}
        <Route path="/about-us"  element={<CoachProfile/>}/>
        <Route path="/contact"  element={<EditProfile/>}/>
        <Route path="/login"  element={<LoginForm/>}/>
        <Route path="/coaches"  element={<CoachesList/>}/>
        <Route path="/signup" element={<SignUpForm/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
