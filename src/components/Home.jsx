import { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const Home = () => {
  const [error, setError] = useState("");

  const { user, logOut } = useUserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    setError("");
    try {
      await logOut();
      navigate("/login");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="w-100" style={{ maxWidth: "400px" }}>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <div className="text-center">
            <strong>Email:</strong> {user.email}
          </div>
          <Link to="/updateprofile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
    </div>
  );
};

export default Home;
