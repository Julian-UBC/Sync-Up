import "./App.css";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import "./App.css";

import { Dashboard } from "./pages/Dashboard";
import { Sidebar } from "./components/Sidebar";
import { Schedule } from "./pages/Schedule";
import { Meeting } from "./pages/Meeting";
import { Settings } from "./pages/Settings";

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar>
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route exact path="schedule" element={<Schedule />} />
            <Route exact path="meeting" element={<Meeting />} />
            <Route exact path="settings" element={<Settings />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Routes>
        </Sidebar>
      </Router>
    </div>
  );
}

export default App;
