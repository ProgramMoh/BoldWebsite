import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

// You can create a separate file for icons or keep them here
const LeafIcon = () => (
  <svg className="h-12 w-12 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const GlobeIcon = () => (
  <svg className="h-12 w-12 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h1a2 2 0 002-2v-1a2 2 0 012-2h1.945M12 4.5v.01M12 8.5v.01M12 12.5v.01M12 16.5v.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const BeakerIcon = () => (
  <svg className="h-12 w-12 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547a2 2 0 00-.547 1.806l.443 2.387a6 6 0 00.517 3.86l.158.318a6 6 0 003.86.517l2.387.443a2 2 0 001.806-.547a2 2 0 00.547-1.806l-.443-2.387a6 6 0 00-.517-3.86l-.158-.318a6 6 0 00-3.86-.517z" />
  </svg>
);


function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animations after the component mounts
    setIsLoaded(true);
  }, []);

  return (
    <div className="dark:bg-gray-900 dark:text-gray-200">
      {/* --- Hero Section --- */}
      <section className="flex min-h-[85vh] flex-col items-center justify-center bg-green-50 px-4 pt-24 pb-12 dark:bg-gray-800 md:flex-row md:px-12">
        <div className="max-w-xl text-center md:text-left">
          <h1 
            className={`text-4xl font-bold leading-tight text-gray-800 transition-all duration-700 ease-out dark:text-white md:text-6xl ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
          >
            Energy, Rooted in <span className="text-green-600">Nature</span>.
          </h1>
          <p 
            className={`mt-6 max-w-lg text-gray-600 transition-all duration-700 ease-out dark:text-gray-300 md:text-lg ${isLoaded ? 'translate-y-0 opacity-100 delay-200' : 'translate-y-4 opacity-0'}`}
          >
            Tired of artificial stimulants and sugary drinks? Discover our potent, all-natural herbal blends crafted to provide sustained energy and focus for your modern life.
          </p>
          <div 
            className={`mt-8 transition-all duration-700 ease-out ${isLoaded ? 'translate-y-0 opacity-100 delay-300' : 'translate-y-4 opacity-0'}`}
          >
            <Link
              to="/products"
              className="rounded-md bg-green-600 px-8 py-3 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-green-700 active:scale-95"
            >
              Explore Our Products
            </Link>
          </div>
        </div>
        <div className="mt-12 w-full max-w-lg md:mt-0 md:w-1/2">
          <img 
            src="https://images.unsplash.com/photo-1596005333633-54522a15a0b5?q=80&w=1887&auto=format&fit=crop" 
            alt="Natural herbal products in a modern setting" 
            className={`w-full rounded-lg object-cover shadow-2xl transition-all duration-1000 ease-out ${isLoaded ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
          />
        </div>
      </section>

      {/* --- Features Section --- */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold text-gray-800 dark:text-white">Why Choose Us?</h2>
          <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-3">
            {/* Feature 1 */}
            <div className="transform rounded-lg bg-white p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:bg-gray-800">
              <LeafIcon />
              <h3 className="mt-4 text-xl font-semibold">100% Natural Ingredients</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">We use only the highest quality, non-GMO herbs and botanicals. No artificial fillers, ever.</p>
            </div>
            {/* Feature 2 */}
            <div className="transform rounded-lg bg-white p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:bg-gray-800">
              <GlobeIcon />
              <h3 className="mt-4 text-xl font-semibold">Sustainably Sourced</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">Our ingredients are ethically sourced from farms that prioritize environmental health and sustainability.</p>
            </div>
            {/* Feature 3 */}
            <div className="transform rounded-lg bg-white p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:bg-gray-800">
              <BeakerIcon />
              <h3 className="mt-4 text-xl font-semibold">Scientifically Formulated</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">Our blends are crafted by experts and backed by research to ensure effectiveness and safety.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* --- Final CTA Section --- */}
      <section className="bg-green-50 py-20 px-4 dark:bg-gray-800">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Ready to Revitalize Your Day?</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Stop settling for artificial energy. Embrace the power of nature and find the perfect blend to support your wellness journey.
          </p>
          <div className="mt-8">
            <Link
              to="/products"
              className="rounded-md bg-green-600 px-8 py-3 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-green-700 active:scale-95"
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