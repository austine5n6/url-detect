import React from 'react'
import HeroImage from '../assets/check_url.png';
// import { MdKeyboardArrowRight} from 'react-icons/md';
import { Link } from 'react-router-dom';
// import { Link } from 'react-scroll'

const Home = () => {

  return <div className="h-screen w-full bg-gradient-to-b from-black to-gray-800">
    
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
            <div className="flex flex-col justify-center h-full">
                <h3 className="text-5xl sm:text-7xl font-bold text-white pt-60">
                    Secure Url Shield
                </h3>
                {/* <p className="text-gray-500 py-4 max-w-md">
                I have <b>3 years</b> experience building web applications using front-end 
                frameworks such as Reactjs and Vuejs, and ExpressJs for backend development and custom api development.
               .
                </p> */}

                <div>
                    <Link to="/dataset" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from bg-white to to-gray-400 cursor-pointer hover:scale-105">
                        Upload dataset 
                        <span className="group-hover:rotate-90 duration-300">
                        {/* <MdKeyboardArrowRight size={25} className="ml-1"/> */}
                        </span>
                    </Link>
                </div>
            </div>

            <div>
                <img src={HeroImage} alt="my profile" className="rounded-2xl mx-auto w-2/3 md:w-full" />
            </div>
        </div>
    </div>;
        
};

export default Home;