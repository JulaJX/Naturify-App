import './LeftPanel.css';
import logo from '../../../Assets/logo.png';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react' 

const LeftPanel = (props) => {
   
    const location = useLocation();
    const pathname = location.pathname;
    const [path, setPath] = useState('');
    const [check, setCheck] = useState(null);
    useEffect( () => {
 
        
    });
    
    return ( 
        <div className="LeftPanel">
         
            <div className="logo-box flex items-center justify-center gap-[25px] my-9">
                <img src={logo} alt="Naturify Tree Logo" className='logo w-[83px]'/>
                <h1 className='title text-2xl font-bold tracking-wider text-white'>Natu<span className='text-primary'>rify</span></h1>
            </div>
            <div className="nav flex items-center justify-center flex-col text-white text-md tracking-wider">
                
                <Link to='/App/home'className='my-4'>Home</Link>
                <Link to='/App/sounds' className='my-4'>Sounds</Link>
                <Link to='/App/saved' className='my-4'>Saved</Link>
            </div>

        </div>
     );
}
 
export default LeftPanel;