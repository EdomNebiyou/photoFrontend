import React from 'react';

const HalfScreenLayout = ({ imageUrl, text }) => {
  return (
    <div className="flex flex-col md:flex-row h-screen dark:bg-[#030712] dark:text-white"> {/* h-screen for full viewport height */}
      <div className="md:w-1/2 h-1/2 md:h-full"> {/* Half width on medium screens and up, half height on smaller screens */}
        <img src={imageUrl} alt="Description" className="object-cover w-full h-full" /> {/* object-cover to maintain aspect ratio */}
      </div>
      <div className="md:w-1/2 h-1/2 md:h-full p-8 flex items-center justify-center"> {/* Half width on medium screens and up, half height on smaller screens, padding and centering */}
        <div> {/* Added a div to contain the text and prevent it from stretching full width */}
          <p className="text-lg">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default HalfScreenLayout;