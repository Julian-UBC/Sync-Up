import "./App.css";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import { Dashboard } from "./pages/Dashboard";
import { WebcamPage } from "./pages/webcam/WebcamPage";
import { Sidebar } from "./components/Sidebar";
import { Schedule } from "./pages/Schedule";
import { Meeting } from "./pages/Meeting";
import { Settings } from "./pages/Settings";
import { ProfileSettings } from "./pages/ProfileSettings";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar>
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route exact path="schedule" element={<Schedule />} />
            <Route exact path="meeting" element={<Meeting />} />
            <Route exact path="webcam" element={<WebcamPage />} />
            <Route exact path="settings" element={<Settings />} />
            <Route exact path="profile" element={<ProfileSettings />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Routes>
        </Sidebar>
      </Router>
    </div>
  );
}

export default App;
