//import components
import NavIntro from './Intro-components/NavIntro'
import Bg from './Intro-components/Bg'
//import imgs

import Forest from '../../Assets/forest.jpg'
import Birds from '../../Assets/birds.png'
import Nightfall from '../../Assets/nightfall.jpg'

//import styles
import './Intro.css'
import FooterIntro from './Intro-components/FooterIntro';

const Intro = () => {
    return ( 
        <div className="Intro font-bold">
            <NavIntro/>
            <h1 className='text-center xl-[0] xl:text-left xl:ml-[230px] text-white font-bold mt-[50px] text-[20px] md:text-[30px]'>Over <span className='text-primary'>2000+</span> relaxing nature sounds...</h1>
            
                <div className="cards flex justify-center item-center mt-[70px] lg:flex-row flex-col">

                    <div className='mx-[50px] bg-darkOpacity flex flex-col flex flex-col justify-center items-center px-[30px] py-[30px] rounded-xl'>
                        <div className="bg-[url('./src/Assets/forest.jpg')] bg-auto bg-no-repeat bg-cover bg-center w-[170px] h-[120px] rounded-xl"></div>
                        <h2 className='text-white font-bold m-3'>Forest Sounds</h2>
                        <p className='w-[160px] text-[14px] text-gray-300'>Relax to calming voice of forest life</p>
                    </div>
                    <div className='mx-[50px] bg-darkOpacity flex flex-col flex flex-col justify-center items-center px-[30px] py-[30px] rounded-xl'>
                        <div className="bg-[url('./src/Assets/birds.png')] bg-auto bg-no-repeat bg-cover bg-center w-[170px] h-[120px] rounded-xl"></div>
                        <h2 className='text-white font-bold m-3'>Singing Birds</h2>
                        <p className='w-[160px] text-[14px] text-gray-300'>Relax to calming voice of forest life</p>
                    </div>
                    <div className='mx-[50px] bg-darkOpacity flex flex-col flex flex-col justify-center items-center px-[30px] py-[30px] rounded-xl'>
                        <div className="bg-[url('./src/Assets/nightfall.jpg')] bg-auto bg-no-repeat bg-cover bg-center w-[170px] h-[120px] rounded-xl"></div>
                        <h2 className='text-white font-bold m-3'>Nightfall</h2>
                        <p className='w-[160px] text-[14px] text-gray-300'>Relax to calming voice of forest life</p>
                    </div>
        
                </div>

            <FooterIntro/>
            <Bg></Bg>
        </div>
     );
}
 
export default Intro;