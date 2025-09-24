// src/Navbar.jsx

import { Link, NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../cartContext.jsx";
import CartOverlay from "../components/CartOverlay.jsx";
import brandLogo from '../assets/BOLD-LOGO.png';


const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
  </svg>
);
const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

function Navbar() {
  const { cart } = useContext(CartContext);
  const [cartOpen, setCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dark, setDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  const closeMobileMenu = () => setIsMenuOpen(false);

  const navLinkClass = "relative transform transition-transform duration-300 hover:-translate-y-0.5";
  const activeNavLinkClass = "font-bold after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-full after:bg-brand-accent text-brand-accent dark:after:bg-brand-accent";

  return (
    <>
      <nav className="sticky top-0 z-40 flex h-32 items-center justify-between bg-blue-900 p-4 px-6 text-white shadow-md dark:bg-brand-dark">
        <Link 
          to="/" 
          className="transition-transform duration-300 hover:scale-105"
        >
          <img src={brandLogo} alt="MyBrand logo" className="h-28 w-56" />
        </Link>

        <div className={`
          fixed top-0 right-0 z-50 flex h-full w-3/4 transform flex-col items-center justify-center gap-10 bg-blue-600 text-lg transition-transform duration-300 ease-in-out
          dark:bg-brand-dark md:relative md:h-auto md:w-auto md:flex-row md:gap-8 md:bg-transparent md:text-base md:transform-none md:transition-none
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}
        `}>
          <button onClick={closeMobileMenu} className="absolute top-7 right-5 md:hidden">
            <CloseIcon />
          </button>
          
          <NavLink to="/" onClick={closeMobileMenu} className={({isActive}) => `${navLinkClass} ${isActive ? activeNavLinkClass : 'dark:hover:text-brand-accent'}`}>Home</NavLink>
          <NavLink to="/products" onClick={closeMobileMenu} className={({isActive}) => `${navLinkClass} ${isActive ? activeNavLinkClass : 'dark:hover:text-brand-accent'}`}>Products</NavLink>
          <NavLink to="/why-choose-us" onClick={closeMobileMenu} className={({isActive}) => `${navLinkClass} ${isActive ? activeNavLinkClass : 'dark:hover:text-brand-accent'}`}>Why Choose Us?</NavLink>
          <NavLink to="/contact" onClick={closeMobileMenu} className={({isActive}) => `${navLinkClass} ${isActive ? activeNavLinkClass : 'dark:hover:text-brand-accent'}`}>Contact</NavLink>
          
          <div className="flex items-center gap-5 pt-6 md:pt-0 md:pl-4">
             <button onClick={() => setDark(!dark)} className="rounded-full bg-gray-200 p-2 text-xl text-black transition-transform hover:scale-110">
               {dark ? "☀️" : "🌙"}
             </button>
             <button
               onClick={() => {
                closeMobileMenu();
                setCartOpen(true);
               }}
               className="rounded bg-white px-4 py-2 font-semibold text-blue-600 transition-all duration-300 hover:scale-105 hover:bg-gray-100 dark:bg-brand-accent dark:text-brand-dark dark:hover:bg-yellow-300"
             >
               Cart ({cart.length})
             </button>
          </div>
        </div>
        
        <button className="z-50 md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <MenuIcon />
        </button>
      </nav>

      {cartOpen && <CartOverlay onClose={() => setCartOpen(false)} />}
    </>
  );
}

export default Navbar;