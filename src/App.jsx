import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import InfiniteScroll from "./components/InfiniteScroll";
import Navbar from "./components/Navbar";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import Modeling from "./pages/Modeling";
import Wedding from "./pages/Wedding";
import Kids from "./pages/Kids";
import Maternity from "./pages/Maternity";
import Family from "./pages/Family";
import Mels from "./pages/Mels";
import Kiristina from "./pages/Kiristina";
import Teklil from "./pages/Teklil";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function App() {
  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout/>}>
        <Route index element={<Home/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="register" element={<Register/>}/>
        <Route path="modeling" element={<Modeling/>}/>
        <Route path="wedding" element={<Wedding/>}/>
        <Route path="kids" element={<Kids/>}/>
        <Route path="maternity" element={<Maternity/>}/>
        <Route path="family" element={<Family/>}/>
        <Route path="mels" element={<Mels/>}/>
        <Route path="kiristina" element={<Kiristina/>}/>
        <Route path="teklil" element={<Teklil/>}/>
      </Route>
    )
  )
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}