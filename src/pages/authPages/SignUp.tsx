import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/global.css";

interface SignUpFormProps {
  onSubmit: (data: {
    username: string;
    email: string;
    company: string;
    companyRegNumber: string;
    dobMonth: string;
    dobDay: string;
    dobYear: string;
    password: string;
    securityText: string;
  }) => void;
}

const SignUpForm: React.FC<SignUpFormProps> = ({ onSubmit }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [companyRegNumber, setCompanyRegNumber] = useState("");
  const [dobMonth, setDobMonth] = useState("");
  const [dobDay, setDobDay] = useState("");
  const [dobYear, setDobYear] = useState("");
  const [password, setPassword] = useState("");
  const [securityText, setSecurityText] = useState("");
  const [usernameError, setUsernameError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [companyError, setCompanyError] = useState<string | null>(null);
  const [companyRegNumberError, setCompanyRegNumberError] = useState<
    string | null
  >(null);
  const [dobError, setDobError] = useState<string | null>(null);

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
    setUsernameError(null);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setEmailError(null);
  };

  const handleCompanyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompany(e.target.value);
    setCompanyError(null);
  };

  const handleCompanyRegNumberChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setCompanyRegNumber(e.target.value);
    setCompanyRegNumberError(null);
  };

  const handleDobMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDobMonth(e.target.value);
    setDobError(null);
  };

  const handleDobDayChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDobDay(e.target.value);
    setDobError(null);
  };

  const handleDobYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDobYear(e.target.value);
    setDobError(null);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let isValid = true;

    if (username.trim() === "") {
      setUsernameError("Username is required");
      isValid = false;
    }

    if (email.trim() === "") {
      setEmailError("Email is required");
      isValid = false;
    }

    if (company.trim() === "") {
      setCompanyError("Company is required");
      isValid = false;
    }

    if (companyRegNumber.trim() === "") {
      setCompanyRegNumberError("Company Registration Number is required");
      isValid = false;
    }

    if (dobMonth === "" || dobDay === "" || dobYear === "") {
      setDobError("Date of Birth is required");
      isValid = false;
    }

    if (isValid) {
      onSubmit({
        username,
        email,
        company,
        companyRegNumber,
        dobMonth,
        dobDay,
        dobYear,
        password,
        securityText,
      });
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
          placeholder="John Doe"
          aria-label="Username"
        />
        {usernameError && <div className="error">{usernameError}</div>}
      </label>
      <label>
        Email
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="example@gmail.com"
          aria-label="Email"
        />
        {emailError && <div className="error">{emailError}</div>}
      </label>
      <label>
        Company
        <input
          type="text"
          value={company}
          onChange={handleCompanyChange}
          placeholder="Atlas, Adobe etc"
          aria-label="Company"
        />
        {companyError && <div className="error">{companyError}</div>}
      </label>
      <label>
        Company Registration No.
        <input
          type="text"
          value={companyRegNumber}
          onChange={handleCompanyRegNumberChange}
          placeholder="+55 23 232 1212"
          aria-label="Company Registration Number"
        />
        {companyRegNumberError && (
          <div className="error">{companyRegNumberError}</div>
        )}
      </label>
      <label>
        Date of Birth
        <div className="dob-inputs">
          <select
            style={{ paddingLeft: "30px", paddingRight: "30px" }}
            value={dobMonth}
            onChange={handleDobMonthChange}
            aria-label="Month"
          >
            <option value="">Month</option>
          </select>
          <select
            style={{ paddingLeft: "30px", paddingRight: "30px" }}
            value={dobDay}
            onChange={handleDobDayChange}
            aria-label="Day"
          >
            <option value="">Day</option>
          </select>
          <select
            style={{ paddingLeft: "30px", paddingRight: "30px" }}
            value={dobYear}
            onChange={handleDobYearChange}
            aria-label="Year"
          >
            <option value="">Year</option>
          </select>
        </div>
        {dobError && <div className="error">{dobError}</div>}
      </label>

      <button type="submit">SIGN UP</button>
    </form>
  );
};

const SignUp: React.FC = () => {
  const handleSubmit = (data: {
    username: string;
    email: string;
    company: string;
    companyRegNumber: string;
    dobMonth: string;
    dobDay: string;
    dobYear: string;
    password: string;
    securityText: string;
  }) => {
    console.log("Username:", data.username);
    console.log("Email:", data.email);
    console.log("Company:", data.company);
    console.log("Company Registration No.:", data.companyRegNumber);
    console.log(
      "Date of Birth:",
      `${data.dobMonth}/${data.dobDay}/${data.dobYear}`,
    );
    console.log("Password:", data.password);
    console.log("Security Text:", data.securityText);
  };

  return (
    <div className="background-image">
      <div className="login-container">
        <div className="login-header">
          <h1>accountabilityAi</h1>
          <p>Create An Account</p>
        </div>
        <SignUpForm onSubmit={handleSubmit} />
        <div className="login-footer">
          <Link to="/forgot-password" className="forgot-password">
            Forgot Password?
          </Link>
          <p>
            Already have an account? <Link to="/">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
