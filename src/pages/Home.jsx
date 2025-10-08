import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import sliderimage from "../assets/slider-1v2.png";

function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div>
      {/* --- Hero Section --- */}
      <section 
        className="relative h-[68vh] md:min-h-[85vh] bg-cover bg-center transition-opacity duration-1000 ease-in"
        style={{ backgroundImage: `url(${sliderimage})`, opacity: isLoaded ? 1 : 0 }}
      >
        {/* --- THIS IS THE UPDATED OVERLAY --- */}
        <div className="absolute inset-0 bg-black/40 bg-gradient-to-b from-black/80 to-transparent md:bg-gradient-to-r md:from-black/90 md:to-transparent"></div>
        
        <div className="relative z-10 mx-auto flex h-full h-[72vh] md:min-h-[85vh] max-w-screen-2xl items-center px-4 py-8 sm:px-6 md:py-24 lg:px-8">
          <div className="max-w-xl text-center md:text-left">
            <h1 
              className={`text-4xl font-bold leading-tight text-white transition-all duration-700 ease-out sm:text-6xl md:text-7xl ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
            >
              Energy, Rooted in <span className="text-blue-500 dark:text-brand-accent">Nature</span>.
            </h1>
            <p 
              className={`mt-12 max-w-lg text-gray-200 transition-all duration-700 ease-out text-base sm:text-lg ${isLoaded ? 'translate-y-0 opacity-100 delay-200' : 'translate-y-4 opacity-0'}`}
            >
              Tired of artificial stimulants and sugary drinks? Discover our all-natural herbal blends crafted to provide you with razor-sharp focus, sustained energy, and heart-healthy vitality in every 2 oz serving.
            </p>
            <div 
              className={`mt-8 transition-all duration-700 ease-out ${isLoaded ? 'translate-y-0 opacity-100 delay-300' : 'translate-y-4 opacity-0'}`}
            >
              <Link
                to="/products"
                className="rounded-lg bg-orange-600 px-8 py-3 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-orange-500 active:scale-95 dark:bg-brand-accent dark:text-brand-dark dark:hover:bg-yellow-300"
              >
                Explore Our Products
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* --- Final CTA Section --- */}
      <section className="bg-blue-50 py-12 px-4 md:py-20 dark:bg-gray-800">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold md:text-3xl">Ready to Revitalize Your Day?</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 sm:text-lg">
            Stop settling for artificial energy. Embrace the power of nature and find the perfect blend to support your wellness journey.
          </p>
          <div className=" mt-6 md:mt-8">
            <Link
              to="/products"
              className="rounded-lg bg-orange-600 px-8 py-3 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-orange-500 active:scale-95 dark:bg-brand-accent dark:text-brand-dark dark:hover:bg-yellow-300"
            >
              Shop All Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;