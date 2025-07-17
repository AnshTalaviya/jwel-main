import React, { useEffect } from 'react'
import home from '../../public/images/homeImage.jpg'
import Collection from './Collection'
import ViewAll from '../components/ViewAll'
import { useNavigate } from 'react-router-dom'
import AOS from "aos";
import "aos/dist/aos.css";
import Ring from '../components/Ring'
import Necklace from '../components/Necklace'
import Earing from '../components/Earing'
import Guide from '../components/Guide'
import InstagramContent from '../components/InstagramContent'
import ReviewSlider from '../components/ReviewSlider'
import CategorySection from '../components/CategorySection'

const Home = () => {
  const navigate = useNavigate();
  const handleViewAllClick = () => {
    navigate("/viewAllJewellary");
  };

  // Animation
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
      delay: 2000, 
    });
  }, []);


  return (
    <div className='w-full'>
      <img src={home} className='w-full' />

      <div className='mt-9 mx-auto  text-center'>
        <h1 className='text-4xl ' data-aos="fade-up">Maverick Jewellery</h1>

        <p data-aos="fade-up" className='text-center text-textGreyColor py-6 m-auto w-1/2' >



        Explore the Enchanting Realm of Lab-Grown Diamonds!
        Lab-grown diamonds bring a fresh perspective to fine jewellery — blending classic brilliance with modern technology. These exquisite stones serve as a remarkable alternative to mined diamonds, offering the same radiant beauty while embracing sustainability and innovation. Step into a world where elegance meets ethical craftsmanship.</p>





      </div>
      <div>
        <CategorySection/>
      </div>

      <div  data-aos="fade-up">

        <Collection />
        <ViewAll  onClick={handleViewAllClick}  />
      </div>

      <div>
        <Ring />

      </div>
      <div>
        <Necklace />

      </div>
      <div>
        <Earing />

      </div>
      <div>
        <Guide />
      </div>
      <div>
        <InstagramContent/>
      </div>
      {/* <div>
        <ReviewSlider/>
      </div> */}

    </div>
  )
}

export default Home
