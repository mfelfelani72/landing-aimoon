import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const TARGET = '700';
const SPIN_DURATION = 5000; // 5 seconds
const DIGIT_HEIGHT = 60; // Height of each digit in px
const STAGGER_DELAY = 300; // Stagger delay for each column's spin

// Function to generate a random number from 0 to 9
const getRandomDigit = () => Math.floor(Math.random() * 10);

const JackpotDigit = ({ finalDigit, delay, index }) => {
  const [spinning, setSpinning] = useState(true);
  const [digitOffset, setDigitOffset] = useState(getRandomDigit()); // Random starting digit
  const [randomInterval, setRandomInterval] = useState(null);

  useEffect(() => {
    // Randomize digits until stopping
    const randomizeDigits = () => {
      const interval = setInterval(() => {
        setDigitOffset(getRandomDigit()); // Set a random digit every interval
      }, Math.random() * 100 + 50); // Randomize interval between 50ms and 150ms

      setRandomInterval(interval);
    };

    // Start randomizing digits
    randomizeDigits();

    // Stop randomizing after the spin duration + stagger delay
    const stopTimeout = setTimeout(() => {
      clearInterval(randomInterval);
      setSpinning(false);
    }, SPIN_DURATION + delay);

    return () => {
      clearInterval(randomInterval);
      clearTimeout(stopTimeout);
    };
  }, [delay, randomInterval]);

  const currentDigit = spinning ? DIGITS[digitOffset] : finalDigit;

  return (
    <motion.div
      className="relative h-[60px] w-12 bg-black text-white font-bold text-4xl flex items-center justify-center rounded-md"
      // style={{
      //   overflow: 'hidden', // Hide overflow to create the slot machine effect
      // }}
    >
      <motion.div
        key={currentDigit}
        initial={{ y: DIGIT_HEIGHT }}
        animate={{ y: 0 }}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 20,
          delay: index * 0.2, // Stagger animation for each column
        }}
      >
        {currentDigit}
      </motion.div>
    </motion.div>
  );
};

const TestCode = () => {
  return (
    <div className="flex mt-[10rem] justify-center gap-4 py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-black">
      {/* Loop through each digit (e.g. 700) and animate each column */}
      {TARGET.split('').map((digit, index) => (
        <JackpotDigit key={index} finalDigit={digit} delay={index * STAGGER_DELAY} index={index} />
      ))}
    </div>
  );
};

export default TestCode;