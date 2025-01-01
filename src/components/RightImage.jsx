import { Link } from "react-router-dom";

export default function RightImage({ img1, img2,title,link }) {
    return (
      <>
        <div className="dark:bg-[#030712] dark:text-white grid sm:grid-cols-2 grid-cols-1 items-center my-4">
          <div className="sm:order-[-1] order-[2] text-center">
            <h2 className="text-4xl md:text-6xl  font-semibold">{title}</h2>
            <Link className=" p-2 md:p-4 border-2" to={link}>
          <button className="m-4 md:m-6 text-2xl mx-auto w-fit text-center font-semibold">view more...</button>
          </Link>
          </div>
          <div className="flex md:w-1/2 w-full">
            <img src={img1} alt="" className="flex-1 object-cover rounded"/>
            <img src={img2} alt="" className="flex-1 object-cover rounded hidden md:block"/>
          </div>
        </div>
      </>
    );
  }
  