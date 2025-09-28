import { useEffect, useState } from 'react';

function Modal({ product, onClose, onAddToCart }) {
  const [isShowing, setIsShowing] = useState(false);

  useEffect(() => {
    if (product) {
      const timer = setTimeout(() => setIsShowing(true), 10);
      return () => clearTimeout(timer);
    }
  }, [product]);

  const handleClose = () => {
    setIsShowing(false);
    setTimeout(onClose, 300);
  };

  const handleAddToCart = () => {
    onAddToCart(product);
    handleClose();
  };

  if (!product) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 transition-opacity duration-300 ease-in-out ${isShowing ? 'opacity-100' : 'opacity-0'}`}
      onClick={handleClose}
    >
      <div
        className={`relative w-11/12 max-w-xl transform rounded-lg bg-white p-6 shadow-xl transition-all duration-300 ease-in-out dark:bg-gray-800 sm:p-8 ${isShowing ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-3 left-3 flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-xl font-semibold text-gray-700 transition-all duration-200 ease-in-out hover:rotate-90 hover:bg-red-500 hover:text-white dark:bg-gray-600 dark:text-brand-light"
          onClick={handleClose}
          aria-label="Close modal"
        >
          &times;
        </button>
        
        {/* --- UPDATED MODAL BODY --- */}
        <div className="mb-4">
          <img 
            src={product.img} 
            alt={product.name} 
            className={`mx-auto h-auto w-full max-h-80 transform object-contain transition-all duration-500 ease-in-out
              ${isShowing ? 'rotate-90 scale-150' : 'rotate-0 scale-75'}`
            }
          />
        </div>
        
        <h2 className="mb-2 text-center text-2xl font-bold text-gray-800 dark:text-white">{product.name}</h2>
        <p className="mb-4 text-md text-gray-700 dark:text-gray-300">{product.details}</p>
        <div className="mt-6 flex items-center justify-between">
            <p className="text-2xl font-semibold text-blue-600 dark:text-brand-accent">{product.price}</p>
            <button
                className="rounded-md bg-orange-600 px-6 py-3 z-10 font-semibold text-white transition-transform duration-200 hover:bg-orange-500 active:scale-95 dark:bg-brand-accent dark:text-brand-dark dark:hover:bg-yellow-300"
                onClick={handleAddToCart}
            >
                Add to Cart
            </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;