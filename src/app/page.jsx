"use client";
import React from "react";

function MainComponent() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Apple Watch Series 9",
      price: 399.99,
      image: "/watch1.jpg",
      description: "Latest smartwatch with health tracking features",
      category: "Electronics",
    },
    {
      id: 2,
      name: "iPhone 15 Pro",
      price: 999.99,
      image: "/phone1.jpg",
      description: "Premium smartphone with advanced camera system",
      category: "Electronics",
    },
    {
      id: 3,
      name: "Samsung Galaxy S24",
      price: 899.99,
      image: "/phone2.jpg",
      description: "Flagship Android phone with AI features",
      category: "Electronics",
    },
    {
      id: 4,
      name: "MacBook Pro 16",
      price: 2499.99,
      image: "/laptop1.jpg",
      description: "Powerful laptop for professionals",
      category: "Electronics",
    },
    {
      id: 5,
      name: "Samsung Galaxy Watch 6",
      price: 299.99,
      image: "/watch2.jpg",
      description: "Advanced fitness tracking and notifications",
      category: "Electronics",
    },
    {
      id: 6,
      name: "iPad Pro 12.9",
      price: 1099.99,
      image: "/tablet1.jpg",
      description: "Premium tablet for creativity",
      category: "Electronics",
    },
    {
      id: 7,
      name: "Google Pixel 8",
      price: 699.99,
      image: "/phone3.jpg",
      description: "Pure Android experience with great camera",
      category: "Electronics",
    },
    {
      id: 8,
      name: "AirPods Pro",
      price: 249.99,
      image: "/audio1.jpg",
      description: "Premium wireless earbuds with noise cancellation",
      category: "Electronics",
    },
    {
      id: 9,
      name: "Dell XPS 15",
      price: 1999.99,
      image: "/laptop2.jpg",
      description: "Premium Windows laptop with 4K display",
      category: "Electronics",
    },
    {
      id: 10,
      name: "Garmin Fenix 7",
      price: 699.99,
      image: "/watch3.jpg",
      description: "Advanced multisport GPS watch",
      category: "Electronics",
    },
  ]);
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showCart, setShowCart] = useState(false);
  const categories = ["All", "Electronics"];
  const filteredProducts = products.filter(
    (product) =>
      (selectedCategory === "All" || product.category === selectedCategory) &&
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const addToCart = (product) => {
    setCart([...cart, { ...product, quantity: 1 }]);
  };
  const cartTotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const [showProfile, setShowProfile] = useState(false);
  const [user] = useState({
    name: "John Doe",
    email: "john@example.com",
    orders: [],
    addresses: [],
    wishlist: [],
  });
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [selectedCountry, setSelectedCountry] = useState("us");
  const languages = [
    { code: "en", name: "English" },
    { code: "es", name: "Español" },
    { code: "fr", name: "Français" },
    { code: "de", name: "Deutsch" },
  ];
  const countries = [
    { code: "us", name: "United States" },
    { code: "uk", name: "United Kingdom" },
    { code: "ca", name: "Canada" },
    { code: "au", name: "Australia" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-[#131921] text-white p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold">ShopEasy</h1>
            <div className="flex gap-2">
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="bg-[#232f3e] text-white text-sm rounded-xl px-2 py-1"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.name}
                  </option>
                ))}
              </select>
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="bg-[#232f3e] text-white text-sm rounded-xl px-2 py-1"
              >
                {countries.map((country) => (
                  <option key={country.code} value={country.code}>
                    {country.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex-1 max-w-xl mx-4 relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full p-2 pl-10 rounded-xl text-black"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowProfile(true)}
              className="flex items-center gap-2"
            >
              <i className="fas fa-user"></i>
            </button>
            <button
              onClick={() => setShowCart(true)}
              className="flex items-center gap-2"
            >
              <i className="fas fa-shopping-cart"></i>
              <span>{cart.length}</span>
            </button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto p-4 rounded-b-3xl">
        <div className="flex overflow-x-auto gap-8 py-4 mb-6">
          <div className="flex flex-col items-center min-w-[100px] cursor-pointer hover:text-blue-500 transition-colors">
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-2">
              <i className="fas fa-film text-2xl text-blue-500"></i>
            </div>
            <span className="text-sm font-medium">Movies</span>
          </div>
          <div className="flex flex-col items-center min-w-[100px] cursor-pointer hover:text-blue-500 transition-colors">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-2">
              <i className="fas fa-cricket-bat-ball text-2xl text-green-500"></i>
            </div>
            <span className="text-sm font-medium">Cricket</span>
          </div>
          <div className="flex flex-col items-center min-w-[100px] cursor-pointer hover:text-blue-500 transition-colors">
            <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-2">
              <i className="fas fa-plane text-2xl text-purple-500"></i>
            </div>
            <span className="text-sm font-medium">Flights</span>
          </div>
          <div className="flex flex-col items-center min-w-[100px] cursor-pointer hover:text-blue-500 transition-colors">
            <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-2">
              <i className="fas fa-hotel text-2xl text-red-500"></i>
            </div>
            <span className="text-sm font-medium">Hotels</span>
          </div>
          <div className="flex flex-col items-center min-w-[100px] cursor-pointer hover:text-blue-500 transition-colors">
            <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center mb-2">
              <i className="fas fa-bus text-2xl text-yellow-500"></i>
            </div>
            <span className="text-sm font-medium">Bus</span>
          </div>
          <div className="flex flex-col items-center min-w-[100px] cursor-pointer hover:text-blue-500 transition-colors">
            <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center mb-2">
              <i className="fas fa-train text-2xl text-pink-500"></i>
            </div>
            <span className="text-sm font-medium">Trains</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="relative h-[200px] bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg overflow-hidden">
            <img
              src="/entertainment.jpg"
              alt="Entertainment booking banner"
              className="w-full h-full object-cover opacity-50"
            />
            <div className="absolute inset-0 flex flex-col justify-center p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">Book Shows</h3>
              <p className="mb-4">Movies, Cricket & More</p>
              <button className="bg-white text-black w-max px-6 py-2 rounded-full font-bold hover:bg-gray-100 transition-colors">
                Book Now
              </button>
            </div>
          </div>

          <div className="relative h-[200px] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg overflow-hidden">
            <img
              src="/flight.jpg"
              alt="Flight booking banner"
              className="w-full h-full object-cover opacity-50"
            />
            <div className="absolute inset-0 flex flex-col justify-center p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">Flight Tickets</h3>
              <p className="mb-4">Best deals on flights</p>
              <button className="bg-white text-black w-max px-6 py-2 rounded-full font-bold hover:bg-gray-100 transition-colors">
                Search Flights
              </button>
            </div>
          </div>
        </div>
        <div className="mb-6 overflow-hidden rounded-lg">
          <div className="relative w-full h-[300px] bg-gradient-to-r from-blue-600 to-purple-600">
            <img
              src="/banner1.jpg"
              alt="Special sale promotion banner featuring electronics"
              className="w-full h-full object-cover opacity-50"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-4">
              <h2 className="text-4xl font-bold mb-4">Summer Sale!</h2>
              <p className="text-xl mb-4">Up to 50% off on selected items</p>
              <button className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
                Shop Now
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="relative h-[200px] bg-gradient-to-r from-green-500 to-teal-500 rounded-lg overflow-hidden">
            <img
              src="/banner2.jpg"
              alt="Electronics category promotion banner"
              className="w-full h-full object-cover opacity-50"
            />
            <div className="absolute inset-0 flex flex-col justify-center p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">New Electronics</h3>
              <p className="mb-4">Latest gadgets and accessories</p>
              <button className="bg-white text-black w-max px-6 py-2 rounded-full font-bold hover:bg-gray-100 transition-colors">
                Explore
              </button>
            </div>
          </div>

          <div className="relative h-[200px] bg-gradient-to-r from-orange-500 to-red-500 rounded-lg overflow-hidden">
            <img
              src="/banner3.jpg"
              alt="Fashion category promotion banner"
              className="w-full h-full object-cover opacity-50"
            />
            <div className="absolute inset-0 flex flex-col justify-center p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">Fashion Deals</h3>
              <p className="mb-4">Get ready for summer</p>
              <button className="bg-white text-black w-max px-6 py-2 rounded-full font-bold hover:bg-gray-100 transition-colors">
                Shop Now
              </button>
            </div>
          </div>
        </div>
        <div className="flex gap-4 mb-6 overflow-x-auto">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-[#131921] text-white"
                  : "bg-white border border-gray-200 hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{ animation: "scaleUp 0.3s ease-out" }}
            >
              <img
                src={product.image}
                alt={`${product.name} product image`}
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex flex-col gap-2">
                  <span className="text-xl font-bold">${product.price}</span>
                  <button
                    onClick={() => addToCart(product)}
                    className="w-full bg-[#FFD814] text-black px-4 py-1 rounded-full border border-[#FCD200] hover:bg-[#F7CA00] text-sm font-semibold transition-colors duration-300"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => {
                      addToCart(product);
                      setShowCart(true);
                    }}
                    className="w-full bg-[#FFA41C] text-black px-4 py-1 rounded-full border border-[#FF8F00] hover:bg-[#FF8C00] text-sm font-semibold transition-colors duration-300"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showCart && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-end"
          style={{ animation: "fadeIn 0.3s ease-out" }}
        >
          <div
            className="bg-white w-full max-w-md p-6 overflow-y-auto rounded-2xl"
            style={{ animation: "slideIn 0.3s ease-out" }}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Your Cart</h2>
              <button
                onClick={() => setShowCart(false)}
                className="transition-transform hover:scale-110"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            {cart.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              <>
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 mb-4 border-b pb-4 transition-transform hover:scale-[1.02]"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-xl"
                    />
                    <div>
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-gray-600">${item.price}</p>
                    </div>
                  </div>
                ))}
                <div className="mt-4">
                  <div className="flex justify-between text-xl font-semibold mb-4">
                    <span>Total:</span>
                    <span>${cartTotal.toFixed(2)}</span>
                  </div>
                  <button className="w-full bg-[#131921] text-white py-2 rounded-xl transition-transform hover:scale-[1.02]">
                    Checkout
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {showProfile && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-end"
          style={{ animation: "fadeIn 0.3s ease-out" }}
        >
          <div
            className="bg-white w-full max-w-md p-6 overflow-y-auto rounded-2xl"
            style={{ animation: "slideIn 0.3s ease-out" }}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Your Profile</h2>
              <button
                onClick={() => setShowProfile(false)}
                className="transition-transform hover:scale-110"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="space-y-6">
              <div className="text-center">
                <div className="w-20 h-20 rounded-2xl bg-gray-200 mx-auto mb-3 flex items-center justify-center transition-transform hover:scale-110">
                  <i className="fas fa-user text-3xl text-gray-400"></i>
                </div>
                <h3 className="font-semibold text-xl">{user.name}</h3>
                <p className="text-gray-600">{user.email}</p>
              </div>
              <div className="border-t pt-6">
                <h4 className="font-semibold mb-3">My Orders</h4>
                {user.orders.length === 0 ? (
                  <p className="text-gray-500">No orders yet</p>
                ) : null}
              </div>
              <div className="border-t pt-6">
                <h4 className="font-semibold mb-3">Saved Addresses</h4>
                {user.addresses.length === 0 ? (
                  <p className="text-gray-500">No addresses saved</p>
                ) : null}
              </div>
              <div className="border-t pt-6">
                <h4 className="font-semibold mb-3">Wishlist</h4>
                {user.wishlist.length === 0 ? (
                  <p className="text-gray-500">Your wishlist is empty</p>
                ) : null}
              </div>
              <button className="w-full bg-[#131921] text-white py-2 rounded-xl transition-transform hover:scale-[1.02]">
                Sign Out
              </button>
            </div>
          </div>
        </div>
      )}
      <style jsx global>{`
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleUp {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
}

export default MainComponent;