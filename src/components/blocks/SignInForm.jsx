import React, { useState, useRef } from 'react';
import Button from './Button';

const SignInForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const handleNext = () => {
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      alert('Please enter a valid email address.');
      if (emailInputRef.current) {
        emailInputRef.current.focus();
      }
      return;
    }
    setCurrentStep(2);
    setTimeout(() => {
      if (passwordInputRef.current) {
        passwordInputRef.current.focus();
      }
    }, 0);
  };

  const handleSignIn = () => {
    alert(`Signing in with: \nEmail: ${email}\nPassword: ${password}`);
  };

  const handleGoBack = () => {
    setCurrentStep(1);
  };

  return (
    <div className="relative w-full h-[6.70rem] overflow-hidden">
      {/* Step 1 - Email Input */}
      <div
        className={`absolute inset-0 flex flex-col gap-4 transition-all duration-500 ease-in-out ${
          currentStep === 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
        }`}
      >
        <input
          className="w-full px-2 py-3 border border-input focus:outline-none placeholder-input rounded text-fair-black"
          type="email"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          ref={emailInputRef}
        />
        {currentStep === 1 && (
          <Button
            cta={'Next'}
            onClick={handleNext}
          />
        )}
      </div>

      {/* Step 2 - Password Input */}
      <div
        className={`absolute inset-0 flex flex-col gap-4 transition-all duration-500 ease-in-out ${
          currentStep === 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
        }`}
      >
        <input
          type="password"
          id="password"
          className="w-full px-2 py-3 border border-input placeholder-input rounded focus:outline-none text-sm text-fair-black"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          ref={passwordInputRef}
        />
        <div className="flex flex-row gap-2">
          <Button
            type="primary"
            cta={'Sign in'}
            onClick={handleSignIn}
          />
          <Button
            type="secondary"
            cta={'Go back'}
            onClick={handleGoBack}
          />
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
