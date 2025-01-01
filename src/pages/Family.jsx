import HalfScreenLayout from "../components/HalfScreenLayout";
import ImageGrid from "../components/ImageGrid";


function Family() {
  const imageUrl = 'https://images.unsplash.com/photo-1597524678053-5e6fef52d8a3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGZhbWlseXxlbnwwfDB8MHx8fDA%3D'; // Replace with your image URL
  const text = 'This is some example text. It can be as long as you need it to be. This layout will ensure that the image and text always take up half the screen, regardless of the screen size.';
  const images = [
    {
      imageUrl: 'https://images.unsplash.com/photo-1475503572774-15a45e5d60b9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZhbWlseXxlbnwwfDB8MHx8fDA%3D',
      title: 'Image 1',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1437913135140-944c1ee62782?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGZhbWlseXxlbnwwfDB8MHx8fDA%3D',
      title: 'Image 2',
    },
      {
      imageUrl: 'https://images.unsplash.com/photo-1560328055-e938bb2ed50a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGZhbWlseXxlbnwwfDB8MHx8fDA%3D',
      title: 'Image 3',
    },
      {
      imageUrl: 'https://images.unsplash.com/photo-1484665754804-74b091211472?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGZhbWlseXxlbnwwfDB8MHx8fDA%3D',
      title: 'Image 4',
    },
  ];
  return (
      <>
      <HalfScreenLayout imageUrl={imageUrl} text={text} />
      <ImageGrid images={images} />
      </>
  );
}

export default Family;