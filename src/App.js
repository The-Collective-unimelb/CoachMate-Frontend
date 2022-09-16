import { Routes, Route } from "react-router-dom";
import NoPage from "./components/pages/NoPage";
import Welcome from "./components/pages/Welcome";
import Footer from "./components/Layout/Footer.js";
import Header from "./components/Layout/Header";
import CoachesList from "./components/pages/CoachesList";
import CoachProfile from "./components/pages/CoachProfile";
import EditProfile from "./components/pages/EditProfile";
import LoginForm from "./components/pages/Login";
import SignUpForm from "./components/pages/SignUp";
import CoachDashboard from "./components/pages/CoachDashboard";

function App() {
  return (
    <div>
      <Header />
      <Routes>
          <Route path="/" element={<Welcome />} />
          {/* FOR PAGE MAKING PURPOSES */}
          <Route path="/coach-profile" element={<CoachProfile />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/coach-dashboard" element={<CoachDashboard />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/coaches" element={<CoachesList />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/*" element={<NoPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
