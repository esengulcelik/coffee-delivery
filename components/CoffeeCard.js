import { useState } from 'react';
import { useRouter } from 'next/router';
import { IoCartOutline, IoAddOutline, IoRemoveOutline } from "react-icons/io5";

const CoffeeCard = () => {
  const [quantity, setQuantity] = useState(1);
  const router = useRouter(); // useRouter'ı burada tanımlayın

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleCartClick = () => {
    router.push('/cart');
  };

  return (
    <div className="max-w-xs mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative">
        <img
          className="w-full h-32 object-cover"
          src="/coffee.jpg"
          alt="Coffee"
        />
        <span className="absolute top-2 left-2 bg-yellow-200 text-yellow-800 text-xs font-semibold px-2 py-1 rounded">
          TRADICIONAL
        </span>
      </div>
      <div className="p-4">
        <h2 className="text-lg font-bold">Expresso Tradicional</h2>
        <p className="text-gray-600">O tradicional café feito com água quente e grãos moídos</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold">R$ 9,90</span>
          <div className="flex items-center">
            <button onClick={handleDecrement} className="bg-gray-200 p-1 rounded">
              <IoRemoveOutline size={16} />
            </button>
            <span className="mx-2">{quantity}</span>
            <button onClick={handleIncrement} className="bg-gray-200 p-1 rounded">
              <IoAddOutline size={16} />
            </button>
            <button onClick={handleCartClick} className="ml-4 bg-purple-500 text-white p-2 rounded">
              <IoCartOutline size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
