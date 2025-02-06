import React, { useState, useEffect } from 'react';
import { Link } from 'react-router'; 
import Lottie from 'lottie-react';  
import glassAnimation from '../assets/glass.json'; 

const Home = () => {
  const [gradient, setGradient] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    let gradients = [];

    const fetchGradients = async () => {
      try {
        const response = await fetch("/gradients.json");
        const data = await response.json();
        gradients = data.gradients;

        setGradient(
          `linear-gradient(to bottom, ${gradients[currentIndex].colors.join(
            ", "
          )})`
        );

        const interval = setInterval(() => {
          currentIndex = (currentIndex + 1) % gradients.length;

          setGradient(
            `linear-gradient(to bottom, ${gradients[currentIndex].colors.join(
              ", "
            )})`
          );
        }, 5000);

        return () => clearInterval(interval);
      } catch (error) {
        console.error("Failed to fetch gradients:", error);
      }
    };

    fetchGradients();
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-full h-full transition-all duration-[2000ms] ease-in-out"
      style={{
        backgroundImage: gradient,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col items-center justify-center h-full text-white text-4xl font-extrabold space-y-4">
        <h1>Empty your mind</h1>    
        <Link to="/myjournal">
          <Lottie animationData={glassAnimation} loop={true} autoplay={true} className="w-48 h-48" />

        </Link>

        <h1>Fill your cup</h1>
      </div>
    </div>
  );
};

export default Home;
