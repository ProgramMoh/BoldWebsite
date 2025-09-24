import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import sliderimage from "../assets/slider-1v2.png";

// Icons (unchanged)
const LeafIcon = () => (
  <svg className="h-12 w-12 text-blue-600 dark:text-brand-accent" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
const GlobeIcon = () => (
  <svg className="h-12 w-12 text-blue-600 dark:text-brand-accent" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h1a2 2 0 002-2v-1a2 2 0 012-2h1.945M12 4.5v.01M12 8.5v.01M12 12.5v.01M12 16.5v.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
const BeakerIcon = () => (
  <svg className="h-14 w-12 text-blue-600 dark:text-brand-accent" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547a2 2 0 00-.547 1.806l.443 2.387a6 6 0 00.517 3.86l.158.318a6 6 0 003.86.517l2.387.443a2 2 0 001.806-.547a2 2 0 00.547-1.806l-.443-2.387a6 6 0 00-.517-3.86l-.158-.318a6 6 0 00-3.86-.517z" />
  </svg>
);

function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div>
      {/* --- Hero Section --- */}
      <section 
        className="relative min-h-[85vh] bg-cover bg-center transition-opacity duration-1000 ease-in"
        style={{ backgroundImage: `url(${sliderimage})`, opacity: isLoaded ? 1 : 0 }}
      >
        {/* --- THIS IS THE UPDATED OVERLAY --- */}
        <div className="absolute inset-0 bg-black/45 md:bg-gradient-to-r md:from-black/90 md:to-transparent"></div>
        
        <div className="relative z-10 mx-auto flex h-full min-h-[85vh] max-w-screen-2xl items-center px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-xl text-center md:text-left">
            <h1 
              className={`text-8xl font-bold leading-tight text-white transition-all duration-700 ease-out md:text-7xl ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
            >
              Energy, Rooted in <span className="text-blue-500 dark:text-brand-accent">Nature</span>.
            </h1>
            <p 
              className={`mt-8 max-w-lg text-gray-200 transition-all duration-700 ease-out md:text-lg ${isLoaded ? 'translate-y-0 opacity-100 delay-200' : 'translate-y-4 opacity-0'}`}
            >
              Tired of artificial stimulants and sugary drinks? Discover our all-natural herbal blends crafted to provide you with razor-sharp focus, sustained energy, and heart-healthy vitality in every 2 oz serving.
            </p>
            <div 
              className={`mt-12 transition-all duration-700 ease-out ${isLoaded ? 'translate-y-0 opacity-100 delay-300' : 'translate-y-4 opacity-0'}`}
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
      
      <section className="bg-blue-50 py-20 px-4 dark:bg-gray-800">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold">Ready to Revitalize Your Day?</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Stop settling for artificial energy. Embrace the power of nature and find the perfect blend to support your wellness journey.
          </p>
          <div className="mt-8">
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