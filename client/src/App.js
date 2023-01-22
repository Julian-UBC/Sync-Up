import { Dashboard } from "./pages/Dashboard";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import { Dashboard } from "./pages/Dashboard";
import { Sidebar } from "./components/Sidebar";
import { Schedule } from "./pages/Schedule";
import { Meeting } from "./pages/Meeting";
import { Settings } from "./pages/Settings";

function App() {
  return (
    <Router>
      <Sidebar>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="schedule" element={<Schedule />} />
          <Route exact path="meeting" element={<Meeting />} />
          <Route exact path="settings" element={<Settings />} />
          <Route path="login-page" element={<LoginPage />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </Sidebar>
    </Router>
  );
}

export default App;
