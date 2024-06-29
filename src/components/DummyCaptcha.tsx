import React, { useState } from 'react';

const generateCaptchaText = () => {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let captchaText = '';
  for (let i = 0; i < 6; i++) {
    captchaText += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return captchaText;
};

const DummyCaptcha: React.FC<{ onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }> = ({ onChange }) => {
  const [captchaText, setCaptchaText] = useState(generateCaptchaText());

  const refreshCaptcha = () => {
    setCaptchaText(generateCaptchaText());
  };

  return (
    <div className="captcha-container">
      <div className="captcha-image">{captchaText}</div>
      <input
        type="text"
        placeholder="Enter the shown text"
        onChange={onChange}
        className="captcha-input"
      />
      <button type="button" onClick={refreshCaptcha} className="refresh-captcha">↻</button>
    </div>
  );
};

export default DummyCaptcha;
