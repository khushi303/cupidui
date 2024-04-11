import './App.css';
import Crm from './components/Crm';
import DashBoard from './components/DashBoard';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Header from './components/Header';
import Priceing from './components/Priceing';
import Services from './components/Services';
import TrustedSlider from './components/TrustedSlider';
import { HeaderBg, Logo } from './components/common/Icons';
import { useEffect, useState } from 'react';
import TopBtn from './assets/images/webp/topbtn.webp'

function App() {
  // ------------Back-to-Top----------//
  const top = () => {
    document.documentElement.scrollTop = 0;
  };
  const [backToTop, setbackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 300) {
        setbackToTop(true);
      } else {
        setbackToTop(false);
      }
    });
  }, []);
  const [screenLoading, setScreenLoading] = useState(false);

  useEffect(() => {
    setScreenLoading(true);
    setTimeout(() => {
      setScreenLoading(false);
    }, 3000);
  }, []);
  return (<>
    {screenLoading ? (<>
      <div className='fixed min-h-scree top-0 left-0 right-0 bottom-0 flex items-center justify-center'>
        <div className='sm:w-[167px] max-w-[140px] w-full animate-bounce'>
          <Logo />
        </div>
      </div> </>) : (
      <>
        <div className='relative max-w-[1920px] mx-auto overflow-y-hidden lg:min-h-[782px] md:h-[768px] sm:h-[610px] h-[545px]'>
          <Header />
          <div className='absolute sm:top-0 left-0 right-0 sm:bottom-0 bottom-[-10%] md:opacity-100 opacity-85'>
            <HeaderBg />
          </div>
        </div>
        <DashBoard />
        <TrustedSlider />
        <Crm />
        <Services />
        <Priceing />
        <Faq />
        <Footer />
          <div className={`${backToTop ? '' : 'hidden'} rounded-[50%] bg-cardgradient sm:w-[50px] sm:h-[50px] w-[40px] h-[40px] animate-[mover_2500ms_ease-in-out_infinite] flex items-center justify-center fixed bottom-7 right-7 z-40 cursor-pointer hover:shadow-gradientRed transition-all duration-300 ease-linear`} onClick={() => top()}>
          <img src={TopBtn} alt="TopBtn" className='sm:max-w-[40px] max-w-[30px]' />
        </div>
      </>
    )
    }</>
  );
}

export default App;
