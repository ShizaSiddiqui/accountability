import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/global.css";
import DummyCaptcha from "../../components/DummyCaptcha";

interface LoginFormProps {
  onSubmit: (data: {
    username: string;
    password: string;
    securityText: string;
  }) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [securityText, setSecurityText] = useState("");
  const [usernameError, setUsernameError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [securityTextError, setSecurityTextError] = useState<string | null>(
    null,
  );

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
    setUsernameError(null);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setPasswordError(null);
  };

  const handleSecurityTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSecurityText(e.target.value);
    setSecurityTextError(null);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let isValid = true;

    if (username.trim() === "") {
      setUsernameError("Username is required");
      isValid = false;
    }

    if (password.trim() === "") {
      setPasswordError("Password is required");
      isValid = false;
    }

    if (securityText.trim() === "") {
      setSecurityTextError("Security Text is required");
      isValid = false;
    }

    if (isValid) {
      onSubmit({ username, password, securityText });
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <label>
        User Name
        <input
          type="text"
          value={username}
          onChange={handleUsernameChange}
          placeholder="hammad.khawaja@31g.co.uk"
          aria-label="Username"
        />
        {usernameError && <div className="error">{usernameError}</div>}
      </label>
      <label>
        Password
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Password123@"
          aria-label="Password"
        />
        {passwordError && <div className="error">{passwordError}</div>}
      </label>
      <label>
        Security Text
        <DummyCaptcha onChange={handleSecurityTextChange} />
        {securityTextError && <div className="error">{securityTextError}</div>}
      </label>
      <label>
        <div className="checkbox-wrapper">
          <input type="checkbox" className="checkbox" />
          Remember me on this computer
        </div>
      </label>
      <button type="submit">LOG IN</button>
    </form>
  );
};

const Login: React.FC = () => {
  const handleSubmit = (data: {
    username: string;
    password: string;
    securityText: string;
  }) => {
    console.log("Username:", data.username);
    console.log("Password:", data.password);
    console.log("Security Text:", data.securityText);
  };

  return (
    <div className="background-image">
      <div className="login-container">
        <div className="login-header">
          <h1>accountabilityAi</h1>
          <p>Welcome Back</p>
        </div>
        <LoginForm onSubmit={handleSubmit} />
        <div className="login-footer">
          <Link to="/forgot-password" className="forgot-password">
            Forgot Password?
          </Link>
          <p>
            Don't have an account? <Link to="/sign-up">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
