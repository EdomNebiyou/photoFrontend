import HalfScreenLayout from "../components/HalfScreenLayout";
import ImageGrid from "../components/ImageGrid";


function Wedding() {
  const imageUrl = 'https://images.unsplash.com/photo-1504993945773-3f38e1b6a626?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdlZGRpbmd8ZW58MHwwfDB8fHww'; // Replace with your image URL
  const text = 'This is some example text. It can be as long as you need it to be. This layout will ensure that the image and text always take up half the screen, regardless of the screen size.';
  const images = [
    {
      imageUrl: 'https://images.unsplash.com/photo-1470081833024-ea74fc435177?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdlZGRpbmd8ZW58MHwwfDB8fHww',
      title: 'Image 1',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1516536900061-d881b27e8ff8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHdlZGRpbmd8ZW58MHwwfDB8fHww',
      title: 'Image 2',
    },
      {
      imageUrl: 'https://images.unsplash.com/photo-1445117627052-274425469152?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHdlZGRpbmd8ZW58MHwwfDB8fHww',
      title: 'Image 3',
    },
      {
      imageUrl: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHdlZGRpbmd8ZW58MHwwfDB8fHww',
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

export default Wedding;