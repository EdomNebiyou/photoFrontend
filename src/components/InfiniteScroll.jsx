import { Link } from "react-router-dom";
import "./InfiniteScroll.css";
export default function InfiniteScroll() {
  const containents = [
    {
      title: "wedding",
      img: "https://images.unsplash.com/photo-1504993945773-3f38e1b6a626?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdlZGRpbmd8ZW58MHwwfDB8fHww",
      link:"/wedding"
    },
    {
      title: "kids",
      img: "https://images.unsplash.com/photo-1534982841079-afde227ada8f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8a2lkc3xlbnwwfDB8MHx8fDA%3D",
      link:"/kids"
    },
    {
      title: "family",
      img: "https://images.unsplash.com/photo-1597524678053-5e6fef52d8a3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGZhbWlseXxlbnwwfDB8MHx8fDA%3D",
      link:"/family"
    },
    {
      title: "modeling",
      img: "https://images.unsplash.com/photo-1494260629490-28c1e8e6f388?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9kZWxpbmd8ZW58MHx8MHx8fDA%3D'",
      link:"/modeling"
    },
    {
      title: "kiristina",
      img: "https://anjelopictures.com/wp-content/uploads/2024/05/438A2212-scaled.jpg",
      link:"/kiristina"
    },
        {
      title: "maternity",
      img: "https://images.unsplash.com/photo-1493101670003-a9c7db5858b2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWF0ZXJuaXR5fGVufDB8MHwwfHx8MA%3D%3D",
      link:"/maternity"
    },
    {
      title: "mels",
      img: "https://anjelopictures.com/wp-content/uploads/2024/05/CY5A8135-scaled.jpg",
      link:"/mels"
    },
    {
      title: "teklil",
      img: "https://anjelopictures.com/wp-content/uploads/2024/05/CY5A0664-scaled.jpg",
      link:"/teklil"
    },
  ];
  return (
    <>
    <div className="dark:bg-[#030712] dark:text-white">
      <h1 className="text-center text-3xl">Services</h1>
        <div className="wrapper">
          {containents.map((c, i) => (
            <Link key={c.title} to={c.link}>
                <div
                  className={`itemLeft cursor-pointer item${i + 1}`}
                  style={{
                    backgroundImage: `url(${c.img})`,
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center capitalize">
                      {c.title}
                    </h1>
                    <button className="opacity-70 hover:bg-gray-800 bg-black text-2xl p-2 rounded ">more</button>
                  </div>
                </div>
            </Link>
          ))}
        </div>
        <div className="wrapper">
          {containents.map((c, i) => (
            <Link key={c.title} to={c.link}>
                <div
                  className={`itemRight cursor-pointer item${i + 1}`}
                  style={{
                    backgroundImage: `url(${c.img})`,
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center capitalize">
                      {c.title}
                    </h1>
                    <button className="opacity-70 hover:bg-gray-800 bg-black text-2xl p-2 rounded ">more</button>
                  </div>
                </div>
            </Link>
          ))}
        </div>
    </div>
    </>
  );
}
