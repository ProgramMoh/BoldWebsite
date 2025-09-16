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
    // Modal Backdrop
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 transition-opacity duration-300 ease-in-out ${isShowing ? 'opacity-100' : 'opacity-0'}`}
      onClick={handleClose}
    >
      {/* Modal Content - UPDATED */}
      <div
        className={`relative w-11/12 max-w-3xl transform rounded-lg bg-white p-6 shadow-xl transition-all duration-300 ease-in-out sm:p-8 ${isShowing ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="absolute top-3 left-3 flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-xl font-semibold text-gray-700 transition-all duration-200 ease-in-out hover:rotate-90 hover:bg-red-500 hover:text-white"
          onClick={handleClose}
          aria-label="Close modal"
        >
          &times;
        </button>
        
        {/* Modal Body */}
        <img src={product.img} alt={product.name} className="mb-4 h-[32rem] w-full rounded-lg" />
        <h2 className="mb-2 text-2xl font-bold text-gray-800">{product.name}</h2>
        <p className="mb-2 text-md text-gray-700">{product.details}</p>
        <div className="flex items-center justify-between">
            <p className="text-2xl font-semibold text-green-600">{product.price}</p>
            <button
                className="rounded-md bg-green-600 px-6 py-3 font-semibold text-white transition-transform duration-200 hover:bg-green-700 active:scale-95"
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