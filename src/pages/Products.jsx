import { useContext, useState, useEffect } from "react";
import { CartContext } from "../cartContext.jsx";
import energy from "../assets/energy.png";
import herbal from "../assets/herbal.png";
import focus from "../assets/focus.png";
import recovery from "../assets/recovery.png";
import Modal from "../components/Modal.jsx";

const products = [
  { 
    id: 1, 
    name: "Energy Shot", 
    category: "Drinks", 
    price: "$5", 
    img: energy, 
    description: "Your natural path to sustained energy.",
    details: "Tired of the jitters and crash from artificial energy drinks? Discover Root & Revive, our powerful herbal energy elixir crafted for those who demand sustained focus and vitality the natural way. This potent shot combines time-honored botanicals like energizing Green Tea Extract, adaptogenic Rhodiola Rosea and Ginseng, stimulating Guarana, invigorating Ginger, and the clarity-boosting Schisandra Berry. Enhanced with essential B Vitamins, Root & Revive offers a clean, balanced uplift without artificial additives. Perfect for kickstarting your day, beating the midday slump, or powering through your workout, it’s energy rooted in nature, designed for your well-being. Feel the difference with every sip!"
  },
  { 
    id: 2, 
    name: "Herbal Drink", 
    category: "Drinks", 
    price: "$7", 
    img: herbal, 
    description: "Savor the serenity of nature's brew.",
    details: "Unwind and rejuvenate with Botanical Bliss, a comforting herbal wellness brew designed to soothe your senses and nourish your body. More than just a drink, it's a moment of tranquility in a bottle, expertly blended with nature's most calming herbs. Drift into relaxation with Chamomile and Lavender, clear your mind with Lemon Balm and Peppermint, and find balance with the ancient wisdom of Holy Basil and Ashwagandha. Each sip is a gentle invitation to de-stress, re-center, and restore your inner harmony. Made with 100% natural, caffeine-free ingredients, Botanical Bliss is your perfect companion for a peaceful evening or a calm moment anytime you need it."
  },
  { 
    id: 3, 
    name: "Focus Capsules", 
    category: "Capsules", 
    price: "$15", 
    img: focus, 
    description: "Sharpen your mind, naturally.",
    details: "Unlock your cognitive potential with Focus Clarity Herbal Capsules, meticulously formulated to enhance mental performance and concentration. In today's demanding world, a clear and sharp mind is your greatest asset. Our capsules combine revered nootropics like Lion's Mane mushroom for neural support, Ginkgo Biloba for improved circulation, Bacopa Monnieri for memory enhancement, and Rhodiola Rosea to combat mental fatigue. Boosted with vital B-Vitamins and L-Theanine, Focus Clarity provides a sustained, smooth mental lift, helping you stay on task, absorb information, and maintain unwavering focus. Experience heightened alertness and clarity without the overstimulation – just pure, natural cognitive power."
  },
  { 
    id: 4, 
    name: "Recovery Mix", 
    category: "Powders", 
    price: "$20", 
    img: recovery, 
    description: "Rejuvenate your body, naturally.",
    details: "Bounce back stronger and faster with Root & Recover, your ultimate herbal recovery mix in a convenient can. Whether you've pushed hard at the gym, had a long day, or simply need to restore your body's balance, this powerful blend is designed for rapid and effective replenishment. Harness the anti-inflammatory power of Turmeric and Ginger, replenish vital electrolytes and Magnesium, support muscle repair with BCAAs, and boost overall resilience with adaptogenic Reishi Mushroom. Root & Recover is more than just a drink; it's a holistic approach to recovery, providing your body with the natural ingredients it needs to heal, rehydrate, and feel your best. Grab a can and get back in the game!"
  },
];

function Products() {
  const { addToCart } = useContext(CartContext);
  const [filter, setFilter] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animations after the component mounts
    setIsLoaded(true);
  }, []);

  const categories = ["All", ...new Set(products.map(p => p.category))];
  const filteredProducts = filter === "All" ? products : products.filter(p => p.category === filter);

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-[85vh] bg-blue-50 p-4 dark:bg-gray-900 sm:p-8">
      {/* --- Page Header --- */}
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
      
      {/* --- Category Filter --- */}
      <div 
        className={`mb-8 flex flex-wrap justify-center gap-4 transition-all duration-700 ease-out ${isLoaded ? 'translate-y-0 opacity-100 delay-200' : 'translate-y-4 opacity-0'}`}
      >
        {categories.map((cat) => (
          <button
            key={cat}
            className={`rounded-md px-4 py-2 font-semibold transition-all duration-300 ${filter === cat ? "bg-blue-600 text-white shadow-md" : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* --- Product Grid --- */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {filteredProducts.map((p, index) => (
          <div
            key={p.id}
            className={`group flex cursor-pointer flex-col items-center overflow-hidden rounded-lg border bg-white shadow-md transition-all duration-500 ease-in-out hover:shadow-xl hover:-translate-y-2 dark:border-gray-700 dark:bg-gray-800 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}
            style={{ transitionDelay: `${200 + index * 75}ms` }} // Staggered delay
            onClick={() => openModal(p)}
          >
            <img src={p.img} alt={p.name} className="h-48 w-full object-cover" />
            <div className="w-full p-4 text-center">
              <h2 className="text-xl font-bold text-gray-800 dark:text-white">{p.name}</h2>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">{p.description}</p>
              <p className="text-lg font-semibold text-blue-600">{p.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Product Modal */}
      <Modal 
        product={selectedProduct} 
        onClose={closeModal} 
        onAddToCart={addToCart} 
      />
    </div>
  );
}

export default Products;