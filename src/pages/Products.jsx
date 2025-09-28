import { useContext, useState, useEffect } from "react";
import { CartContext } from "../cartContext.jsx";
import energy from "../assets/boldog.png"; 
import focus from "../assets/boldroyal.png"; 
import libido from "../assets/boldx.png";
import Modal from "../components/Modal.jsx";

const products = [
  { 
    id: 1, 
    name: "Bold Nootropic Energy", 
    price: "$3.99", 
    img: energy, 
    description: "For mood, focus, and clarity.",
    details: "This cutting-edge blend includes Alpha-GPC, DMAE L-Bitartrate, Huperzine-A, and more, designed to support cognitive function, memory, and overall brain health."
  },
  { 
    id: 2, 
    name: "Bold [B]", 
    price: "$6.99", 
    img: focus, 
    description: "For enhanced nutrients.",
    details: "Boost your energy and vitality with our powerful B Vitamin and Royal Jelly Blend. Packed with Vitamin B3 (Niacin) to support healthy blood flow and energy metabolism, and Vitamin B12 to fuel brain, nerve, and muscle function."
  },
  { 
    id: 3, 
    name: "Bold [X]", 
    price: "$4.99", 
    img: libido, 
    description: "For stamina and endurance.",
    details: "Boost your vitality and libido with Korean Panax Ginseng, DMAE Bitartrate, and Agmatine Sulfate. Ginseng energizes and balances hormones, while DMAE enhances mood and focus. Agmatine improves blood flow and circulation, amplifying performance and satisfaction."
  },
];

function Products() {
  const { addToCart } = useContext(CartContext);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-[85vh] bg-blue-50 p-4 dark:bg-gray-900 sm:p-8">
      {/* Page Header */}
      <div className="mb-12 text-center">
        <h1 
          className={`text-4xl font-bold text-gray-800 transition-all duration-700 ease-out dark:text-white sm:text-5xl ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
        >
          Our Collection
        </h1>
        <p 
          className={`mx-auto mt-4 max-w-2xl text-lg text-gray-600 transition-all duration-700 ease-out dark:text-gray-300 ${isLoaded ? 'translate-y-0 opacity-100 delay-100' : 'translate-y-4 opacity-0'}`}
        >
          Find the perfect natural blend to power your day.
        </p>
      </div>
      
      {/* Product Grid - Centered for 3 items */}
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p, index) => (
          <div
            key={p.id}
            className={`group flex cursor-pointer flex-col items-center overflow-hidden rounded-lg border bg-white shadow-md transition-all duration-500 ease-in-out hover:shadow-xl hover:-translate-y-2  hover:scale-[1.06] dark:hover:border-brand-accent dark:hover:bg-gray-700 dark:border-gray-700 dark:bg-gray-800 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}
            style={{ transitionDelay: `${200 + index * 100}ms` }}
            onClick={() => openModal(p)}
          >
            <img src={p.img} alt={p.name} className="h-56 w-full object-contain" />
            <div className="w-full p-4 text-center">
              <h2 className="text-xl font-bold text-gray-800 dark:text-white">{p.name}</h2>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">{p.description}</p>
              <p className="text-lg font-semibold text-blue-600 dark:text-brand-accent">{p.price}</p>
            </div>
          </div>
        ))}
      </div>

      <Modal 
        product={selectedProduct} 
        onClose={closeModal} 
        onAddToCart={addToCart} 
      />
    </div>
  );
}

export default Products;