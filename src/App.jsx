import { Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Header_ad from './components/Header_ad'
import Home from './pages/Home'
import About from './pages/About';
import Contact from './pages/Contact';
import ViewAllJewellary from './pages/ViewAllJewellary';
import Footer from './components/Footer';
import ChatBubble from './components/ChatBubble';
import RingSizeGuide from './pages/RingSizeGuide';
import FilterProducts from './components/FilterProducts';
import SingleProduct from './components/SingleProduct';
import { useState, useEffect } from 'react';
import Loader from './components/Loader';
import BackToTopButton from './components/BackToTopButton';
import ScrollToTop from './components/ScrollToTop';
import AddToWishlist from './components/AddToWishlist';

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate loading delay (e.g. fetching data)
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>


      {loading ? (
        <Loader />
      ) : (
        <div className="p-0">
          <ScrollToTop />
          <Header_ad />
          <Header />


          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/viewAllJewellary" element={<ViewAllJewellary />} />
            <Route path="/ring-guide" element={<RingSizeGuide />} />
            <Route path="/collection" element={<FilterProducts />} />
            <Route path="/product/:id" element={<SingleProduct />} />
            <Route path="/wishlist" element={<AddToWishlist />} />
            {/* <Route path="/filterProduct/:category" element={<FilterProducts />} /> */}



            <Route path="/contact" element={<Contact />} />

          </Routes>
          <Footer />
          <ChatBubble />
          <BackToTopButton />

        </div>
      )}


    </>
  )
}

export default App
