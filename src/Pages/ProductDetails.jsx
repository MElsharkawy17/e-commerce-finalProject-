import { useParams } from "react-router-dom";
import { products } from "../productsData";
import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-xl text-gray-600">Product not found</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    navigate("/login");
  };

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1);

  const totalPrice = product.price * quantity;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex">
            {/* Product Image - مصغرة ومركزة */}
            <div className="md:w-1/2 p-8 flex items-center justify-center">
              <div className="w-full max-w-md">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-auto object-contain max-h-[400px] mx-auto"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/400x400?text=Product+Image";
                  }}
                />
              </div>
            </div>
            
            {/* Product Info */}
            <div className="md:w-1/2 p-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm mr-2">
                    {product.category}
                  </span>
                  <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                    {product.brand}
                  </span>
                </div>
                <button
                  onClick={handleLikeClick}
                  className={`p-2 rounded-full transition-all duration-300 ${
                    liked 
                      ? 'bg-red-50 text-red-500 shadow' 
                      : 'bg-gray-100 text-gray-600 hover:text-red-400'
                  }`}
                  aria-label={liked ? "Remove from favorites" : "Add to favorites"}
                >
                  {liked ? (
                    <AiFillHeart className="text-xl" />
                  ) : (
                    <AiOutlineHeart className="text-xl" />
                  )}
                </button>
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.title}</h1>
              
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"}>
                      ★
                    </span>
                  ))}
                </div>
                <span className="ml-2 text-gray-600">({product.rating}/5)</span>
              </div>
              
              <div className="mb-6">
                <p className="text-3xl font-bold text-gray-900">EGP {product.price}</p>
                <p className="text-sm text-gray-500 mt-1">Inclusive of all taxes</p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-2">Description</h3>
                <p className="text-gray-700">{product.description}</p>
              </div>
              
              <div className="mb-8">
                <h4 className="font-semibold mb-3">Quantity</h4>
                <div className="flex items-center">
                  <button 
                    onClick={decrementQuantity}
                    className="border border-gray-300 px-4 py-2 rounded-l hover:bg-gray-50"
                  >
                    -
                  </button>
                  <span className="border-y border-gray-300 px-6 py-2">{quantity}</span>
                  <button 
                    onClick={incrementQuantity}
                    className="border border-gray-300 px-4 py-2 rounded-r hover:bg-gray-50"
                  >
                    +
                  </button>
                  <span className="ml-4 text-gray-600">
                    Total: <strong className="text-lg">EGP {totalPrice}</strong>
                  </span>
                </div>
              </div>
              
              <div className="space-y-4">
                <button 
                  onClick={handleAddToCart}
                  className="w-full bg-black text-white py-4 rounded-lg font-medium hover:bg-gray-800 transition duration-200 text-lg"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}