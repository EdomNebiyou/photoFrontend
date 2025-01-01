import React from 'react';

const HeroSection = ({ imageUrl, title, subtitle }) => {
  return (
    <div className="relative h-screen w-full bg-cover bg-center" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Optional overlay for better text readability */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center">{title}</h1>
        <p className="text-xl md:text-2xl text-center max-w-2xl">{subtitle}</p>
        {/* You can add more content here, like buttons */}
      </div>
    </div>
  );
};

export default HeroSection;