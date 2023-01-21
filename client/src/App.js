import "./App.css";

import { Dashboard } from "./pages/Dashboard";
import LoginPage from "./pages/LoginPage"

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="*" element={<Navigate replace to="/" />} />
          <Route path="login-page" element={<LoginPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
