import React, { useState, useRef } from 'react';
import { sendSignInLinkToEmail } from 'firebase/auth';
import { auth } from '../../../firebase/firebaseConfig';
import Button from '../../global/Button';

const SignInForm = ({onStepChange}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [email, setEmail] = useState('');
  const emailInputRef = useRef(null);

  const handleNext = async () => {
    // Validate email format
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      alert('Please enter a valid email address.');
      if (emailInputRef.current) emailInputRef.current.focus();
      return;
    }

    try {
      // Set up action code settings (URL to redirect after email link sign-in)
      const actionCodeSettings = {
        // URL to redirect to after email link is clicked
        url: 'http://localhost:5176/bible',  // Update this URL
        handleCodeInApp: true,  // Handle the code inside the app
      };

      // Send sign-in link to the email address
      await sendSignInLinkToEmail(auth, email, actionCodeSettings);

      // Store the email in localStorage to use when completing sign-in
      window.localStorage.setItem('emailForSignIn', email);

      // Proceed to the confirmation step
      setCurrentStep(2);
      onStepChange(2);
    } catch (error) {
      alert('Error sending sign-in link: ' + error.message);
    }
  };

  const handleGoBack = () => {
    setCurrentStep(1);
    onStepChange(1);
  }

  return (
    <div className="relative w-full h-[7rem] overflow-hidden">
      <div
        className={`absolute inset-0 flex flex-col gap-4 transition-all duration-500 ${
          currentStep === 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
        }`}
      >
        <input
          className="w-full px-2 py-3 border border-input focus:outline-none placeholder-input rounded text-fair-black"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          ref={emailInputRef}
        />
        <Button cta="Continue with email" onClick={handleNext} />
      </div>

      <div
        className={`absolute inset-0 flex flex-col gap-4 transition-all duration-500 ${
          currentStep === 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
        }`}
      >
        <p className="text-center text-text">
          We've sent a link to your email address to complete the sign-in process.
        </p>
        <Button cta="Go back" type="secondary" onClick={handleGoBack} />
      </div>
    </div>
  );
};

export default SignInForm;
