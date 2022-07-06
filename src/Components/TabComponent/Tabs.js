import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Garden } from "./Tabcontent/Garden";
import { Height } from "./Tabcontent/Height";
import { Penthouse } from "./Tabcontent/Penthouse"
import { Portion } from "./Tabcontent/Portion";
import { Studio } from "./Tabcontent/Studio";
import "./Tabs.scss";
 
function Tabss() {
 return (
   <div className="container mt-90">
        <div className='header-section'>
            <div className='subtitle'>
                <span>Apartment Sketch</span>
                </div>
                <h2>Apartments Plan</h2>
         </div>

   <div className="Tbas-section">
     <Tabs className="Tabs">
          <TabList>
            <Tab>The Studio</Tab>
            <Tab>Deluxe Portion</Tab>
            <Tab>Penthouse </Tab>
            <Tab>Top Garden</Tab>
            <Tab>Double Height</Tab>
          </TabList>

          <TabPanel><Studio/></TabPanel>

          <TabPanel><Portion/></TabPanel>

          <TabPanel><Penthouse/></TabPanel>

          <TabPanel><Garden/></TabPanel>

          <TabPanel><Height/></TabPanel>
     </Tabs>
   </div>
   </div>
 );
}
 
export default Tabss;