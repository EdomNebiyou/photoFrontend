import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import InfiniteScroll from "../components/InfiniteScroll";
import LeftImage from "../components/LeftImage";
import RightImage from "../components/RightImage";

export default function Home() {
  return (
    <>
      <HeroSection
        imageUrl="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNhbWVyYXxlbnwwfHwwfHx8MA%3D%3D"
        title="Welcome to My Website"
        subtitle="This is a brief description of what I do. You can add more details here."
      />
      <InfiniteScroll />
      <div className="dark:bg-[#030712] dark:text-white">
        <LeftImage
          img1={
            "https://images.unsplash.com/photo-1504993945773-3f38e1b6a626?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdlZGRpbmd8ZW58MHwwfDB8fHww"
          }
          img2={"https://images.unsplash.com/photo-1470081833024-ea74fc435177?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdlZGRpbmd8ZW58MHwwfDB8fHww"}
          title={`wedding`}
          link={`/wedding`}
        />
        <RightImage
          img1={
            "https://images.unsplash.com/photo-1534982841079-afde227ada8f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8a2lkc3xlbnwwfDB8MHx8fDA%3D"
          }
          img2={"https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8a2lkc3xlbnwwfDB8MHx8fDA%3D"}
          title={`kids`}
          link={`/kids`}
        />
        <LeftImage
          img1={
            "https://images.unsplash.com/photo-1597524678053-5e6fef52d8a3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGZhbWlseXxlbnwwfDB8MHx8fDA%3D"
          }
          img2={"https://images.unsplash.com/photo-1475503572774-15a45e5d60b9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZhbWlseXxlbnwwfDB8MHx8fDA%3D"}
          title={`family`}
          link={`/family`}
        />
        <RightImage
          img1={
            "https://images.unsplash.com/photo-1494260629490-28c1e8e6f388?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9kZWxpbmd8ZW58MHx8MHx8fDA%3D"
          }
          img2={"https://images.unsplash.com/photo-1730296409897-bd0100d418a1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vZGVsaW5nfGVufDB8fDB8fHww"}
          title={`modeling`}
          link={`/modeling`}
        />
        <LeftImage
          img1={
            "https://anjelopictures.com/wp-content/uploads/2024/05/438A2212-scaled.jpg"
          }
          img2={"https://anjelopictures.com/wp-content/uploads/2024/05/3D3A2193-scaled.jpg"}
          title={`kiristina`}
          link={`/kiristina`}
        />
        <RightImage
          img1={
            "https://images.unsplash.com/photo-1493101670003-a9c7db5858b2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWF0ZXJuaXR5fGVufDB8MHwwfHx8MA%3D%3D"
          }
          img2={"https://images.unsplash.com/photo-1501510920781-55fe4e2a2c84?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWF0ZXJuaXR5fGVufDB8MHwwfHx8MA%3D%3D"}
          title={`maternity`}
          link={`/maternity`}
        />
        <LeftImage
          img1={
            "https://anjelopictures.com/wp-content/uploads/2024/05/CY5A8135-scaled.jpg"
          }
          img2={"https://anjelopictures.com/wp-content/uploads/2024/05/CY5A8132-scaled.jpg"}
          title={`mels`}
          link={`/mels`}
        />
        <RightImage
          img1={
            "https://anjelopictures.com/wp-content/uploads/2024/05/CY5A0664-scaled.jpg"
          }
          img2={"https://anjelopictures.com/wp-content/uploads/2024/05/CY5A9587-scaled.jpg"}
          title={`teklil`}
          link={`/teklil`}
        />
      </div>
    </>
  );
}
