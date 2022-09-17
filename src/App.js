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
import CoachSchedule from "./components/pages/CoachSchedule";

function App() {
  return (
    <div>
      {/** header and content: viewport height minus footer height */}
      <div style={{ "min-height": "calc(100vh - 150px)" }}>
        <Header />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/coach-profile" element={<CoachProfile />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/coach-dashboard" element={<CoachDashboard />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/coaches" element={<CoachesList />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/schedule" element={<CoachSchedule />} />
          <Route path="/*" element={<NoPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
