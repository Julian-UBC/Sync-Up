import "./App.css";
import { useState } from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Login } from "./pages/Login";
import { Dashboard } from "./pages/Dashboard";
import { Sidebar } from "./components/Sidebar";
import { Schedule } from "./pages/Schedule";
import { Meeting } from "./pages/Meeting";
import { Settings } from "./pages/Settings";
import { useState } from "react";
import { Landing } from "./pages/Landing";
import { ProfileSettings } from "./pages/ProfileSettings";

function App () {
  const [isLogin, setIsLogin] = useState(false)

  return (
    <Router>
      {!isLogin ?
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="login" element={<Login setIsLogin={setIsLogin}/>} />
        </Routes>
        : <Sidebar>
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route exact path="schedule" element={<Schedule />} />
            <Route exact path="meeting" element={<Meeting />} />
            <Route exact path="settings" element={<Settings />} />
            <Route exact path="profile" element={<ProfileSettings />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Routes>
        </Sidebar>
      }
    </Router>
  );
}

export default App;
