import React from "react";
import {Routes, Route, } from "react-router-dom";
import Announcement from "./Components/Header/Announcement";
import Menu from "./Components/Header/Menu";
import Slider from "./Pages/Slider";
import Findnow from "./Components/FindNow/Findnow";
import About from "./Components/About/About";
import Properties from "./Components/Properties/Properties";
import { Count } from "./Pages/Count";
import { Service } from "./Components/Services/Service";
import {Feature} from "./Components/Feature/Feature";
import { Parallax } from "./Components/Parallax/Parallax";
import Tabs from "./Components/TabComponent/Tabs";
import { Building } from "./Components/BuildingAminities/Building";
import Footer from "./Components/Footer/Footer";
import Loop from "./Pages/Loop";
import { Testimonial } from "./Components/Testimonial/Testimonial";
import { Blog } from "./Components/Blog/Blog";
import Newsletter from "./Components/Newslatter/Newslatter";
function AppRoutes() {
  return (
    <Routes>
        <Route path="/"  element={<Announcement/>} />
        <Route path="/"  element={<Menu/>} />
        <Route path="/"  element={<Slider/>} />
        <Route path="/" element={<Findnow/>}/>
        <Route path="/" element={<About/>}/>
        <Route path="/" element={<Properties/>}/>
        <Route path="/" element={<Count/>}/>
        <Route path="/" element={<Service/>}/>
        <Route path="/" element={<Feature/>}/>
        <Route path="/" element={<Parallax/>}/>
        <Route path="/" element={<Tabs/>}/>
        <Route path="/" element={<Building/>}/>
        <Route path="/" element={<Loop/>}/>
        <Route path="/" element={<Footer/>}/>
        <Route path="/" element={<Testimonial/>}/>
        <Route path="/" element={<Blog/>}/>
        <Route path="/" element={<Newsletter/>}/>
    </Routes>
  );
}

export default AppRoutes;