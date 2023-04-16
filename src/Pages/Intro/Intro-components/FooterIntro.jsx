import './FooterIntro.css'
import logo from '../../../Assets/logo3.png'

const FooterIntro = () => {
    return ( 
        <div className="bg-darkOpacity absolute bottom-[0px] w-[100%]">
            <div className="FooterIntro flex text-white items-center lg:flex-row flex-col py-[10px]  w-[92%] m-auto">
                <div className="flex justify-center items-center">
                    <h2>All rights reserved Naturify © 2023</h2>
                </div>
                <div className="flex justify-center items-center">
                    <div className="">
                        <p>FAQ</p>
                        <p>Download</p>
                        <p>Try in browser</p>
                    </div>
                    <div className="flex justify-center items-center">
                        <img src={logo} alt="logo" className='w-[120px] grayscale'/>
                        <h2>Naturify</h2>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default FooterIntro;