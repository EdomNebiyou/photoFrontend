import HalfScreenLayout from "../components/HalfScreenLayout";
import ImageGrid from "../components/ImageGrid";


function Kids() {
  const imageUrl = 'https://images.unsplash.com/photo-1534982841079-afde227ada8f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8a2lkc3xlbnwwfDB8MHx8fDA%3D'; // Replace with your image URL
  const text = 'This is some example text. It can be as long as you need it to be. This layout will ensure that the image and text always take up half the screen, regardless of the screen size.';
  const images = [
    {
      imageUrl: 'https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8a2lkc3xlbnwwfDB8MHx8fDA%3D',
      title: 'Image 1',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1617817376017-3de702f0c35f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGtpZHN8ZW58MHwwfDB8fHww',
      title: 'Image 2',
    },
      {
      imageUrl: 'https://images.unsplash.com/photo-1524503033411-c9566986fc8f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8a2lkc3xlbnwwfDB8MHx8fDA%3D',
      title: 'Image 3',
    },
      {
      imageUrl: 'https://images.unsplash.com/photo-1469406396016-013bfae5d83e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGtpZHN8ZW58MHwwfDB8fHww',
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

export default Kids;