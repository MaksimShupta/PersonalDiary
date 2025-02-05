import React, { useState, useEffect } from 'react';

const Home = () => {
  const [gradient, setGradient] = useState('');

  useEffect(() => {
    let currentIndex = 0;

    const fetchGradients = async () => {
      const response = await fetch(
        'https://raw.githubusercontent.com/webkul/coolhue/master/src/gradients.json'
      );
      const data = await response.json();

      const changeGradient = () => {
        const newGradient = data.gradients[currentIndex % data.gradients.length];
        setGradient(`linear-gradient(${newGradient.colors.join(', ')})`);
        currentIndex++;
      };

      changeGradient(); // Set initial gradient
      const interval = setInterval(changeGradient, 5000); // Change every 5 seconds

      return () => clearInterval(interval); // Clean up on unmount
    };

    fetchGradients();
  }, []);

  return (
    <div
      className="w-full h-screen transition-all duration-1000 ease-in-out"
      style={{ backgroundImage: gradient }}
    >
      <div className="flex items-center justify-center h-full text-white text-3xl font-bold">
        <h1>Empty your mind</h1>
        <h1>Fill your cup</h1>
      </div>
    </div>
  );
};

export default Home;