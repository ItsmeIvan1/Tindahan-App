import React, { useState } from 'react';
import 'typeface-inter';
import { RiAddFill } from "react-icons/ri";
import { AiOutlineLine } from "react-icons/ai";

const ButtonWithPrice = ({
  id,
  image,
  size,
  name,
  price,
  activeCategory,
  onAddToCart,
  onRemoveFromCart,
}) => {
  const [quantity, setQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = () => {
    const newQuantity = quantity + 1;
    const newTotalPrice = totalPrice + price;
    setQuantity(newQuantity);
    setTotalPrice(newTotalPrice);
    onAddToCart({
      id,
      image,
      size,
      name,
      price,
      quantity: newQuantity,
      totalPrice: newTotalPrice,
    });
  };

  const removeFromCart = () => {
    const newQuantity = quantity - 1;
    const newTotalPrice = totalPrice - price;
    setQuantity(newQuantity);
    setTotalPrice(newTotalPrice);
    onRemoveFromCart(id);
  };

  const isActive = activeCategory !== null;

  return (
    <div className={`container mx-auto p-3 ${isActive ? '' : ''}`}>
      <div className='p-3 shadow-xl'>
        <div className='flex justify-center items-center'>
        <img src={image} className='w-28 h-28 md:w-40 md:h-40' alt={name} />
        </div>
        <p className='font-semibold text-sm md:font-bold md:text-lg' style={{ fontFamily: 'Inter, sans-serif' }}>
          {name}
        </p>
        <p className='text-sm font-medium md:font-semibold' style={{ fontFamily: 'Inter, sans-serif' }}>
          Price: {price}
        </p>
        <p className='text-sm font-medium md:font-semibold' style={{ fontFamily: 'Inter, sans-serif' }}>
          Quantity: {quantity}
        </p>

        <div className='flex justify-center items-center gap-3 pt-3'>
          <button
            className='p-3 bg-cyan-600 text-sm md:text-sm md:font-medium rounded-md  text-white'
            style={{ fontFamily: 'Inter, sans-serif' }}
            onClick={addToCart}
          >
          <RiAddFill className='h-4 w-4 icons'/>
          </button>
          <button
            className='p-3 bg-red-600 text-sm font-medium rounded-md  text-white'
            style={{ fontFamily: 'Inter, sans-serif' }}
            onClick={removeFromCart}
            disabled={quantity === 0}
          >
            <AiOutlineLine className='h-4 w-4 icons'/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ButtonWithPrice;
