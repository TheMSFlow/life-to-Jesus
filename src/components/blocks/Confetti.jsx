import React, { useEffect } from "react";
import confetti from "canvas-confetti";

const Confetti = () => {
  useEffect(() => {
    const count = 200;
    const defaults = { origin: { y: 0.7 } };

    const fire = (particleRatio, opts) => {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    };

    const playSound = () => {
      const sound = new Audio("/confetti-sound.mp3"); // Replace with your sound file path
      sound.play().catch((error) => {
        console.error("Error playing sound:", error);
      });
    };

    // Function to run confetti bursts
    const startConfetti = () => {
      playSound(); // Play sound effect once
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

    // Trigger the confetti once
    startConfetti();

    // Cleanup (optional, no intervals or timeouts to clear)
    return () => {};
  }, []);

  return null; // Or add a placeholder UI component
};

export default Confetti;
