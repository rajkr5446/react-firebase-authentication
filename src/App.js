import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import ForgotPassword from "./components/ResetPassword";
import UpdateProfile from "./components/UpdateProfile";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <UserAuthContextProvider>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotpass" element={<ForgotPassword />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/updateprofile"
            element={
              <ProtectedRoute>
                <UpdateProfile />
              </ProtectedRoute>
            }
          />
        </Routes>
      </UserAuthContextProvider>
    </Container>
  );
};
export default App;
