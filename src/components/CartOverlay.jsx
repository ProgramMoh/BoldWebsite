import { useContext, useState, useRef, useEffect } from "react";
import { CartContext } from "../cartContext.jsx";

function CartOverlay({ onClose }) {
  const { cart, removeFromCart } = useContext(CartContext);
  const [closing, setClosing] = useState(false);
  const overlayRef = useRef(null);

  function handleClose() {
    setClosing(true);
    setTimeout(() => {
      onClose();
      setClosing(false);
    }, 300);
  }

  // Close on background click
  useEffect(() => {
    function handleClickOutside(e) {
      if (overlayRef.current && !overlayRef.current.contains(e.target)) {
        handleClose();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50">
      <div
        ref={overlayRef}
        className={`
          w-full sm:w-96 bg-white h-full shadow-xl flex flex-col
          transform transition-transform duration-300 ease-in-out
          ${closing ? "sm:animate-slideOut animate-slideDown" : "sm:animate-slideIn animate-slideUp"}
        `}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold">Your Cart</h2>
          <button
            onClick={handleClose}
            className="text-gray-600 hover:text-black"
          >
            ✕
          </button>
        </div>

        {/* Items */}
        <div className="flex-grow overflow-y-auto p-4 space-y-4">
          {cart.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            cart.map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between border-b pb-2"
              >
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-green-600">{item.price}</p>
                </div>
                <button
                  onClick={() => removeFromCart(i)}
                  className="text-red-500 hover:underline"
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t">
          <button
            className="w-full bg-green-600 text-white px-4 py-2 rounded"
            onClick={() => alert("Checkout flow coming soon!")}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartOverlay;
