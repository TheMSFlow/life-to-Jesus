import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(3); // Start countdown from 3

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000); // Decrease time every 1 second

    return () => clearInterval(timerId); // Cleanup on unmount
  }, []);

  // Determine what to display
  const displayText = timeLeft > 0 ? timeLeft : 'Ready!';

  return (
    <div className="flex justify-center items-center font-garamond text-5xl text-primary-hover">
      <h1>{displayText}</h1>
    </div>
  );
};

export default CountdownTimer;
