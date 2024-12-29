import React, { useEffect } from "react";
import confetti from "canvas-confetti";

const Confetti = () => {
  useEffect(() => {
    const count = 200;
    const defaults = { origin: { y: 0.7 } };

    function fire(particleRatio, opts) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    // Function to run confetti bursts
    const startConfetti = () => {
      fire(0.25, {
        spread: 26,
        startVelocity: 55,
      });
      fire(0.2, {
        spread: 60,
      });
      fire(0.35, {
        spread: 100,
        decay: 0.91,
        scalar: 0.8,
      });
      fire(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2,
      });
      fire(0.1, {
        spread: 120,
        startVelocity: 45,
      });
    };

    // Trigger bursts every 500ms for 3 seconds
    const interval = setInterval(startConfetti, 500);

    // Stop confetti after 3 seconds
    const timeout = setTimeout(() => {
      clearInterval(interval);
    }, 1000);

    // Cleanup on unmount
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

};

export default Confetti;
