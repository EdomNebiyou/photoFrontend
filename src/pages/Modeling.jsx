import HalfScreenLayout from "../components/HalfScreenLayout";
import ImageGrid from "../components/ImageGrid";


function Modeling() {
  const imageUrl = 'https://images.unsplash.com/photo-1494260629490-28c1e8e6f388?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9kZWxpbmd8ZW58MHx8MHx8fDA%3D'; // Replace with your image URL
  const text = 'This is some example text. It can be as long as you need it to be. This layout will ensure that the image and text always take up half the screen, regardless of the screen size.';
  const images = [
    {
      imageUrl: 'https://images.unsplash.com/photo-1730296409897-bd0100d418a1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vZGVsaW5nfGVufDB8fDB8fHww',
      title: 'Image 1',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1649219027775-d32e6b14ff4a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vZGVsaW5nfGVufDB8fDB8fHww',
      title: 'Image 2',
    },
      {
      imageUrl: 'https://images.unsplash.com/photo-1679690028701-ceb79f163ab8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vZGVsaW5nfGVufDB8MHwwfHx8MA%3D%3D',
      title: 'Image 3',
    },
      {
      imageUrl: 'https://images.unsplash.com/photo-1643490745743-76d2d1f2d1b5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vZGVsaW5nfGVufDB8MHwwfHx8MA%3D%3D',
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

export default Modeling;