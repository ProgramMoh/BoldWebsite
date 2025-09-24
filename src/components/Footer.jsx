import { Link } from 'react-router-dom';

// Simple SVG Icons for the Footer
const MailIcon = () => (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
);
const PhoneIcon = () => (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
);
const LocationIcon = () => (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
);


function Footer() {
  return (
    <footer className="bg-brand-dark px-4 pt-8 pb-4 text-brand-light sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-8">
          
          {/* Brand Info */}
          <div className="md:col-span-3">
            <h3 className="font-sora text-xl font-bold">Bold Beverage Co.</h3>
            <p className="mt-4 text-md text-gray-400">
              Nanotechnology-enhanced supplements focused on nutrient delivery for peak performance.
            </p>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-2">
            <h4 className="font-sora text-lg font-semibold">Contact Us</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <LocationIcon />
                <span className="text-gray-400">6101 N Hollywood Blvd, Ste 120 Las Vegas, Nv. 89115</span>
              </li>
              <li className="flex items-center gap-3">
                <PhoneIcon />
                <a href="tel:+17028869309" className="text-gray-400 hover:text-white">+1 702-886-9309</a>
              </li>
              <li className="flex items-center gap-3">
                <MailIcon />
                <a href="mailto:support@boldisbest.com" className="text-gray-400 hover:text-white">support@boldisbest.com</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-2 mr-3">
            <h4 className="font-sora text-lg font-semibold">Join The Club</h4>
            <p className="mt-4 text-sm text-gray-400">Get updates on special events and new products!</p>
            <form className="mt-4 flex text-sm">
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full rounded-l-md border-0 bg-gray-800 px-3 py-2 text-white placeholder-gray-500 focus:ring-2 focus:ring-brand-accent"
              />
              <button 
                type="submit" 
                className="rounded-r-md bg-brand-accent px-3 font-bold text-brand-dark transition-colors hover:bg-yellow-300"
              >
                Go
              </button>
            </form>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-sora text-lg font-semibold">Links</h4>
            <ul className="mt-4 space-y-2 text-md">
              <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white">Products</Link></li>
              <li><Link to="/why-choose-us" className="text-gray-400 hover:text-white">Why Choose Us?</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          
        </div>

        <div className="mt-6 border-t border-gray-800 pt-4 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} BOLD. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;