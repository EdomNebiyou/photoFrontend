import HalfScreenLayout from "../components/HalfScreenLayout";
import ImageGrid from "../components/ImageGrid";


function Mels() {
  const imageUrl = 'https://anjelopictures.com/wp-content/uploads/2024/05/CY5A8135-scaled.jpg'; // Replace with your image URL
  const text = 'This is some example text. It can be as long as you need it to be. This layout will ensure that the image and text always take up half the screen, regardless of the screen size.';
  const images = [
    {
      imageUrl: 'https://anjelopictures.com/wp-content/uploads/2024/05/CY5A8132-scaled.jpg',
      title: 'Image 1',
    },
    {
      imageUrl: 'https://anjelopictures.com/wp-content/uploads/2024/05/CY5A8123-scaled.jpg',
      title: 'Image 2',
    },
      {
      imageUrl: 'https://anjelopictures.com/wp-content/uploads/2024/05/CY5A8126-scaled.jpg',
      title: 'Image 3',
    },
      {
      imageUrl: 'https://anjelopictures.com/wp-content/uploads/2024/05/CY5A8081-scaled.jpg',
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

export default Mels;