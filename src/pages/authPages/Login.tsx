import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/global.css'; 
import DummyCaptcha from '../../components/DummyCaptcha'; 

interface LoginFormProps {
  onSubmit: (data: { username: string; password: string; securityText: string }) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [securityText, setSecurityText] = useState('');
  const [error, setError] = useState(null);

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSecurityTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSecurityText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      onSubmit({ username, password, securityText });
    } catch (error: any) {
        setError(error.toString());
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
      </label>
      <label>
        Security Text
        <DummyCaptcha onChange={handleSecurityTextChange} />
      </label>

      {error && <div className="error">{error}</div>}

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
  const handleSubmit = (data: { username: string; password: string; securityText: string }) => {
    // Here you'd typically handle form submission, e.g., sending data to a server.
    console.log('Username:', data.username);
    console.log('Password:', data.password);
    console.log('Security Text:', data.securityText);
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
          <Link to="/forgot-password" className="forgot-password">Forgot Password?</Link>
          <p>Don't have an account? <Link to="/sign-up">Sign Up</Link></p>
        </div>
      </div>
   </div>
  );
};

export default Login;