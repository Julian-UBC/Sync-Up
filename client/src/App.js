import { Dashboard } from "./pages/Dashboard";
import LoginPage from "./pages/LoginPage";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { ThemeProvider } from "@mui/system";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="*" element={<Navigate replace to="/" />} />
          <Route path="login-page" element={<LoginPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
