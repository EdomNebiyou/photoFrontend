import HalfScreenLayout from "../components/HalfScreenLayout";
import ImageGrid from "../components/ImageGrid";


function Teklil() {
  const imageUrl = 'https://anjelopictures.com/wp-content/uploads/2024/05/CY5A0664-scaled.jpg'; // Replace with your image URL
  const text = 'This is some example text. It can be as long as you need it to be. This layout will ensure that the image and text always take up half the screen, regardless of the screen size.';
  const images = [
    {
      imageUrl: 'https://anjelopictures.com/wp-content/uploads/2024/05/CY5A9587-scaled.jpg',
      title: 'Image 1',
    },
    {
      imageUrl: 'https://th.bing.com/th?id=OIP.5JpDHP4zxUxpgdMcxb0JxgHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2',
      title: 'Image 2',
    },
      {
      imageUrl: 'https://th.bing.com/th?id=OIP.hta5sCCVKZVmOvMqhLc9RwHaJM&w=224&h=278&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2',
      title: 'Image 3',
    },
      {
      imageUrl: 'https://th.bing.com/th?id=OIP.hRKYnV-Zhez2R2R59bur8wHaFW&w=293&h=212&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2',
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

export default Teklil;