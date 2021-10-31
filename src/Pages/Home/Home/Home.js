import React from 'react';
import AboutUs from '../../AboutUs/AboutUs.js';
import Locations from '../../Locations/Locations.js';
// import Doctors from '../../Doctors/Doctors.js';
// import Awards from '../Awards/Awards.js';
import Services from '../Services/Services.js';
import Slider from '../Slider/Slider.js';



const Home = () => {
    return (
        <div>

            <Slider></Slider>
            <AboutUs></AboutUs>
            <Services></Services>
            <Locations></Locations>
            {/* <Awards></Awards> */}
            {/* <Doctors></Doctors> */}
        </div>
    );
};

export default Home;