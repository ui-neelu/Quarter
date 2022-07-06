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
      </BrowserRouter>
  );
}

export default App;
