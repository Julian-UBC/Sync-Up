import { Dashboard } from "./pages/Dashboard";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="*" element={<Navigate replace to="/" />} />
        <Route path="login-page" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
