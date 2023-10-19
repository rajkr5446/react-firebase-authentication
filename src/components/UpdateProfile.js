import { useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const UpdateProfile = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  const { user, updatePass, updateMail } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (password !== confPassword) {
      setError("Passwords don't match");
      return;
    }
    try {
      setError("");
      setLoading(true);
      await updateMail(email);
      await updatePass(password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  };

  return (
    <div className="w-100" style={{ maxWidth: "400px" }}>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Update Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                required
                defaultValue={user.email}
              />
            </Form.Group>
            <Form.Group id="password" className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Leave to keep the password same"
              />
            </Form.Group>
            <Form.Group id="password-confirm" className="mb-3">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control
                type="password"
                onChange={(e) => setConfPassword(e.target.value)}
                placeholder="Leave to keep the password same"
              />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Update
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Link to="/">Cancel</Link>
      </div>
    </div>
  );
};

export default UpdateProfile;
