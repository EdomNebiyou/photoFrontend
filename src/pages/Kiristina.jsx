import HalfScreenLayout from "../components/HalfScreenLayout";
import ImageGrid from "../components/ImageGrid";


function Kiristina() {
  const imageUrl = 'https://anjelopictures.com/wp-content/uploads/2024/05/438A2212-scaled.jpg'; // Replace with your image URL
  const text = 'This is some example text. It can be as long as you need it to be. This layout will ensure that the image and text always take up half the screen, regardless of the screen size.';
  const images = [
    {
      imageUrl: 'https://anjelopictures.com/wp-content/uploads/2024/05/3D3A2193-scaled.jpg',
      title: 'Image 1',
    },
    {
      imageUrl: 'https://anjelopictures.com/wp-content/uploads/2024/05/3D3A2159-1-scaled.jpg',
      title: 'Image 2',
    },
      {
      imageUrl: 'https://anjelopictures.com/wp-content/uploads/2024/05/kirstena-6-2-scaled.jpg',
      title: 'Image 3',
    },
      {
      imageUrl: 'https://anjelopictures.com/wp-content/uploads/2024/05/438A2210-1-scaled.jpg',
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

export default Kiristina;