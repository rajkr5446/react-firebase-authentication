import { useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const { resetPassword } = useUserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(email);
      setMessage("Check your inbox for further instructions");
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <div className="w-100" style={{ maxWidth: "400px" }}>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Reset Password</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Reset Password
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/login">Login</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
};

export default ForgotPassword;
