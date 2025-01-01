import HalfScreenLayout from "../components/HalfScreenLayout";
import ImageGrid from "../components/ImageGrid";


function Maternity() {
  const imageUrl = 'https://images.unsplash.com/photo-1493101670003-a9c7db5858b2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWF0ZXJuaXR5fGVufDB8MHwwfHx8MA%3D%3D'; // Replace with your image URL
  const text = 'This is some example text. It can be as long as you need it to be. This layout will ensure that the image and text always take up half the screen, regardless of the screen size.';
  const images = [
    {
      imageUrl: 'https://images.unsplash.com/photo-1501510920781-55fe4e2a2c84?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWF0ZXJuaXR5fGVufDB8MHwwfHx8MA%3D%3D',
      title: 'Image 1',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1503375572039-45409a68d5f1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWF0ZXJuaXR5fGVufDB8MHwwfHx8MA%3D%3D',
      title: 'Image 2',
    },
      {
      imageUrl: 'https://images.unsplash.com/photo-1555961064-4bc7ec634bbc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hdGVybml0eXxlbnwwfDB8MHx8fDA%3D',
      title: 'Image 3',
    },
      {
      imageUrl: 'https://images.unsplash.com/flagged/photo-1560690998-51cc5edbe1f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG1hdGVybml0eXxlbnwwfDB8MHx8fDA%3D',
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

export default Maternity;