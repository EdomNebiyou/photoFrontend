import React from 'react';

const ImageCard = ({ imageUrl, title}) => {
  return (
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 md:h-72 object-cover"
      />
  );
};

const ImageGrid = ({ images }) => {
  return (
    <div className='grid grid-cols-auto gap-4 grid-auto-flow-dense'>
      {images.map((image, index) => (
        <div key={index} className="w-full h-auto"> {/* Added wrapper div with w-full and h-auto */}
            <ImageCard {...image} />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;