import Controls from '../App-components/Controls';
import LeftPanel from '../App-components/LeftPanel';
import FooterApp from '../App-components/FooterApp';

import Home from './pages/Home';
import Sounds from './pages/Sounds';
import Saved from './pages/Saved';
//React Router
import {Routes, Route, Outlet} from 'react-router-dom'

import './Napp.css'

const Napp = () => {
    return ( 
        <div className="Napp">
            <div className="grid grid-cols-10 grid-rows-1">
           
            <div className="LeftPanel bg-dark2 row-span-2 col-span-2 h-[800px]">
            <LeftPanel/>
            </div>

            <div className="item bg-dark1 col-span-8">
                <Outlet></Outlet>
            </div>

            <div className="item bg-darkOpacity col-span-8 py-[30px]">
            <Controls/>
            </div>
            
            <div className="item bg-dark2 col-span-10 py-[60px]">
            <FooterApp/>
            </div>
            </div>
      
        </div>
        
     );
}
 
export default Napp;