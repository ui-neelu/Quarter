import './App.css';
import { BrowserRouter } from 'react-router-dom'; 
import Slider from './Pages/Slider';
import Announcement from './Components/Header/Announcement';
import Menu from './Components/Header/Menu';
import  Findnow from './Components/FindNow/Findnow';
import About from './Components/About/About';
import Properties from './Components/Properties/Properties';
import { Count } from './Pages/Count';
import { Service } from './Components/Services/Service';
import { Feature } from './Components/Feature/Feature';
import { Parallax } from './Components/Parallax/Parallax';
import Tabs from './Components/TabComponent/Tabs';
import { Building } from './Components/BuildingAminities/Building';
import Footer from './Components/Footer/Footer';
import Loop from './Pages/Loop';
import { Testimonial } from './Components/Testimonial/Testimonial';
import { Blog } from './Components/Blog/Blog';
import Newsletter from './Components/Newslatter/Newslatter';
function App() {
  return (
     <BrowserRouter>
        <Announcement/>
        <Menu/>
        <Slider/>
        <Findnow/>
        <About/>
        <Count/>
        <Properties/>
        <Service/>
        <Feature/>
        <Tabs/>
        <Parallax/>
        <Building/>
        <Testimonial/>
        <Blog/>
        {/* <Loop/> */}
        <Newsletter heading="Looking for a dream home?" para="We can help you realize your dream of a new home"/>
        <Footer/>
      </BrowserRouter>
  );
}

export default App;
