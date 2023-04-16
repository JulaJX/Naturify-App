import { Link } from 'react-router-dom';
import './NavIntro.css';
import logo from '../../../Assets/logo.png';


const NavIntro = () => {
    return ( 
        <div className="NavIntro px-9 py-5 flex justify-items-stretch items-center flex-col lg:flex-row">

            <div className="logo-box flex items-center">
                <img src={logo} alt="Naturify Tree Logo" className='logo w-28'/>
                <h1 className='title text-2xl font-bold tracking-wider'>Natu<span className='text-primary'>rify</span></h1>
            </div>

            <div className="button-box flex justify-center align-center flex-col md:flex-row lg:mt-0 mt-[40px]">
                <Link to='/App/home'><button className='px-9 py-2 text-[13px] my-2 mx-10 bg-opacity rounded-full font-bold text-white tracking-wider'>Try in Browser</button></Link>
                <button className='px-9 py-2 text-[13px]  my-2 mx-10 bg-primary rounded-full font-bold text-white tracking-wider'>Download Desktop</button>
            </div>
      
        </div>
     );
}
 
export default NavIntro;