import React, { useState } from 'react';
import ButtonWithPrice from './ButtonWithPrice';
import CoffeeTwin from './img/coffee_twinpack.png'
import CoffeeSingle from './img/coffee_single.png'
import CoffeeStick from './img/coffee_stick.png'
import Milo from './img/milo.png'
import Colgate from './img/colgate_sachet.png'
import BearbrandSachet from './img/bearbrand_swack.jpg'
import Shampoo from './img/headshoulder_sachet.jpg'
import Safeguard from './img/Safeguard.jpg'
import Silka from './img/Silka.jpg'
import JoySmall from './img/joy_small.jpg'
import JoyLarge from './img/joy_large.jpg'
import CreamSilk from './img/creamsilk_sachet.png'
import Calla from './img/Calla.jpg'
import Ariel from './img/Ariel.png'
import ToyoMalaki from './img/toyo_malaki.jpg'
import ToyoMaliit from './img/toyo_maliit.jpeg'
import SukaMalaki from './img/suka_malaki.jpg'
import SukaMaliit from './img/suka_maliit.jpg'
import SilverSwanToyo from './img/silverswan_toyo.jpg'
import SilverSwanSuka from './img/silverswan_suka.jpg'
import Patis from './img/patis.jpg'
import MegaSardines from './img/mega_sardines.jpg'
import LigoSardines from './img/ligo_sardines.jpg'
import CenturyMalaki from './img/century_large.jpg'
import CenturyMaliit from './img/century_small.jpg'
import RoyalBig from './img/Royal_malaki.jpg'
import RoyalSmall from './img/Royal_maliit.jpg'
import SpriteBig from './img/Sprite_Malaki.jpeg'
import SpriteSmall from './img/Sprite_maliit.jpg'
import CokeBig from './img/Coke_Casalo.jpg'
import CokeMaliit from './img/coke_maliit.jpg'
import CrackLings from './img/cracklings.jpg'
import Nova from './img/Nova.jpg'
import Piattos from './img/piattos.jpg'
import SinigangMixBig from './img/sinigang_mix.png'
import SinigangMixSmall from './img/sinigang_mix_maliit.jpg'
import KnorCubes from './img/Knorr-Broth-Cubes.png'
import Fudgebar from './img/fudgebar.jpg'
import Rebisco from './img/Rebis.jpg'
import Dowedonut from './img/dowedonut.jpg'



const products = [
  { id: 1, image: CoffeeTwin, name: "Kape Twin pack", price: 14, category: "Kape" },
  { id: 2, image: CoffeeSingle, name: "Single Kape", price: 8, category: "Kape" },
  { id: 3, image: CoffeeStick, name: "Coffe Stick", price: 3, category: "Kape" },
  { id: 4, image: Milo, name: "Milo", price: 10, category: "Kape" },
  { id: 5, image: Colgate, name: "Colgate", price: 10, category: "Shampoo" },

  { id: 6, image: BearbrandSachet, name: "Bear Brand Swack", price: 13, category: "Kape" },
  { id: 7, image: Shampoo, name: "Shampoo Sachet", price: 7, category: "Shampoo" },
  { id: 8, image: Safeguard, name: "Safeguard", price: 21, category: "Sabon" },
  { id: 9, image: Silka, name: "Silka", price: 21, category: "Sabon" },
  { id: 10, image: JoySmall, name: "Joy maliit", price: 7, category: "Sabon" },

  { id: 11, image: JoyLarge, name: "Joy malaki", price: 13, category: "Sabon" },
  { id: 12, image: CreamSilk, name: "Creamsilk", price: 8, category: "Shampoo" },
  { id: 13, image: Calla, name: "Calla Maliit", price: 7, category: "Detergent" },
  { id: 14, image: Ariel, name: "Ariel", price: 15, category: "Detergent" },


  { id: 15, image: ToyoMalaki, name: "Datu puti Toyo Malaki", price: 14, category: "Condiments" },
  { id: 16, image: ToyoMaliit, name: "Datu puti Toyo Maliit", price: 7, category: "Condiments" },
  { id: 17, image: SukaMalaki, name: "Datu puti Suka Malaki", price: 11, category: "Condiments" },
  { id: 18, image: SukaMaliit, name: "Datu puti Suka Maliit", price: 6, category: "Condiments" },
  { id: 19, image: SilverSwanToyo, name: "Silver swan Toyo", price: 13, category: "Condiments" },
  { id: 20, image: SilverSwanSuka, name: "Silver swan Suka", price: 11, category: "Condiments" },
  { id: 21, image: Patis, name: "Patis", price: 17, category: "Condiments" },

  { id: 22, image: MegaSardines, name: "Mega Sardines", price: 27, category: "Delata" },
  { id: 23, image: LigoSardines, name: "Ligo Sardines", price: 27, category: "Delata" },
  { id: 24, image: CenturyMalaki, name: "Century Malaki", price: 41, category: "Delata" },
  { id: 25, image: CenturyMaliit, name: "Century Maliit", price: 32, category: "Delata" },


  { id: 26, image: CokeBig, name: "Coke Casalo", price: 29, category: "Softdrinks" },
  { id: 27, image: CokeMaliit, name: "Coke Maliit", price: 12, category: "Softdrinks" },
  { id: 28, image: SpriteBig, name: "Sprite Casalo", price: 29, category: "Softdrinks" },
  { id: 29, image: SpriteSmall, name: "Sprite Maliit", price: 12, category: "Softdrinks" },
  { id: 30, image: RoyalBig, name: "Royal Casalo", price: 29, category: "Softdrinks" },
  { id: 31, image: RoyalSmall, name: "Royal Maliit", price: 12, category: "Softdrinks" },


  { id: 32, image: Nova, name: "Nova", price: 17, category: "Snacks" },
  { id: 33, image: Piattos, name: "Piattos", price: 17, category: "Snacks" },
  { id: 34, image: CrackLings, name: "Cracklings", price: 7, category: "Snacks" },

  { id: 35, image: SinigangMixBig, name: "Sinigang Malaki", price: 16, category: "Condiments" },
  { id: 36, image: SinigangMixSmall, name: "Sinigang Maliit", price: 8, category: "Condiments" },
  { id: 37, image: KnorCubes, name: "Knorr Cubes", price: 7, category: "Condiments" },

  { id: 38, image: Fudgebar, name: "Fudgebar", price: 8, category: "Snacks" },
  { id: 39, image: Rebisco, name: "Rebisco, Skyflakes", price: 7, category: "Snacks" },
  { id: 40, image: Dowedonut, name: "Doowee Donut", price: 11, category: "Snacks" },


];


const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);



  const addToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      const updatedCartItems = cartItems.map((cartItem) => {
        if (cartItem.id === item.id) {
          return {
            ...cartItem,
            quantity: cartItem.quantity + 1,
            totalPrice: cartItem.totalPrice + item.price,
          };
        }
        return cartItem;
      });

      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, item]);
    }
  };

  const removeFromCart = (itemId) => {
    const updatedCartItems = cartItems.map((cartItem) => {
      if (cartItem.id === itemId) {
        return {
          ...cartItem,
          quantity: cartItem.quantity - 1,
          totalPrice: cartItem.totalPrice - cartItem.price,
        };
      }
      return cartItem;
    });

    const filteredCartItems = updatedCartItems.filter(
      (cartItem) => cartItem.quantity > 0 && (!selectedCategory || products.find((product) => product.id === cartItem.id)?.category === selectedCategory)
    );
    

    setCartItems(filteredCartItems);
  };

  const clearCart = () => {
    const updatedCartItems = cartItems.map((cartItem) => ({
      ...cartItem,
      quantity: 0,
      totalPrice: 0,
    }));

    setCartItems(updatedCartItems);
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.totalPrice, 0);
  };

  const filteredProducts = selectedCategory
  ? products.filter((product) => product.category === selectedCategory)
  : products;
  

  return (

    <>

    <nav className="bg-zinc-500 mx-auto p-3 py-3 pl-40 md:ml-0 md:p-3 md:px-0 flex  md:flex-row justify-center items-center gap-3 overflow-x-scroll md:overflow-x-hidden" >
      
    <button
  
  className={`text-white md:font-bold md:text-lg text-xs font-normal ${
    activeCategory === null ? 'text-sky-500' : 'text-white'
  }`}
  style={{ fontFamily: 'Inter, sans-serif' }}
  onClick={() => {
    setActiveCategory(null);
    setSelectedCategory(null);
  }}
>
  All
</button>
<button
  className={`text-white md:font-bold md:text-lg text-xs font-normal ${
    activeCategory === 'Kape' ? 'text-sky-500' : ''
  }`}
  style={{ fontFamily: 'Inter, sans-serif' }}
  onClick={() => {
    setActiveCategory('Kape');
    setSelectedCategory('Kape');
  }}
>
  Kape
</button>
<button
  className={`text-white md:font-bold md:text-lg text-xs font-normal ${
    activeCategory === 'Shampoo' ? 'text-sky-500' : ''
  }`}
  style={{ fontFamily: 'Inter, sans-serif' }}
  onClick={() => {
    setActiveCategory('Shampoo');
    setSelectedCategory('Shampoo');
  }}
>
  Shampoo
</button>

<button
  className={`text-white md:font-bold md:text-lg text-xs font-normal ${
    activeCategory === 'Sabon' ? 'text-sky-500' : ''
  }`}
  style={{ fontFamily: 'Inter, sans-serif' }}
  onClick={() => {
    setActiveCategory('Sabon');
    setSelectedCategory('Sabon');
  }}
>
Sabon
</button>

<button
  className={`text-white md:font-bold md:text-lg text-xs font-normal ${
    activeCategory === 'Delata' ? 'text-sky-500' : ''
  }`}
  style={{ fontFamily: 'Inter, sans-serif' }}
  onClick={() => {
    setActiveCategory('Delata');
    setSelectedCategory('Delata');
  }}
>
  Delata
</button>

<button
  className={`text-white md:font-bold md:text-lg text-xs font-normal ${
    activeCategory === 'Snacks' ? 'text-sky-500' : ''
  }`}
  style={{ fontFamily: 'Inter, sans-serif' }}
  onClick={() => {
    setActiveCategory('Snacks');
    setSelectedCategory('Snacks');
  }}
>
Snacks
</button>

<button
  className={`text-white md:font-bold md:text-lg text-xs font-normal ${
    activeCategory === 'Softdrinks' ? 'text-sky-500' : ''
  }`}
  style={{ fontFamily: 'Inter, sans-serif' }}
  onClick={() => {
    setActiveCategory('Softdrinks');
    setSelectedCategory('Softdrinks');
  }}
>
Softdrinks
</button>

<button
  className={`text-white md:font-bold md:text-lg text-xs font-normal ${
    activeCategory === 'Detergent' ? 'text-sky-500' : ''
  }`}
  style={{ fontFamily: 'Inter, sans-serif' }}
  onClick={() => {
    setActiveCategory('Detergent');
    setSelectedCategory('Detergent');
  }}
>
Detergent
</button>


<button
  className={`text-white md:font-bold md:text-lg text-xs font-normal ${
    activeCategory === 'Condiments' ? 'text-sky-500' : ''
  }`}
  style={{ fontFamily: 'Inter, sans-serif' }}
  onClick={() => {
    setActiveCategory('Condiments');
    setSelectedCategory('Condiments');
  }}
>
Condiments
</button>


    </nav>



    <div className='container mx-auto'>
      <h1 style={{ fontFamily: 'Inter, sans-serif' }} className='text-md font-medium text-center text-lg'>Welcome to Tindahan App</h1>

      <div className='grid grid-cols-2 md:grid-cols-5 '>

      {filteredProducts.map((product) => (
    <ButtonWithPrice
      key={product.id}
      id={product.id}
      image={product.image}
      name={product.name}
      price={product.price}
      activeCategory={activeCategory}
      onAddToCart={addToCart}
      onRemoveFromCart={removeFromCart}
    />
  ))}    </div>






     
      <div className="flex flex-col">
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div className="overflow-hidden">
        <table className="min-w-full text-left text-sm font-light">
          <thead className="border-b bg-white font-medium dark:border-neutral-500 dark:bg-neutral-600">
            <tr>
              <th scope="col" className="font-bold md:text-lg px-6 py-4 text-center" style={{ fontFamily: 'Inter, sans-serif' }}>Name</th>
              <th scope="col" className="font-bold md:text-lg px-6 py-4 text-center" style={{ fontFamily: 'Inter, sans-serif' }}>Quantity</th>
              <th scope="col" className="font-bold md:text-lg px-6 py-4 text-center" style={{ fontFamily: 'Inter, sans-serif' }}>Price</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={index} className="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700">
                <td className="font-bold md:text-lg whitespace-nowrap px-6 py-4 text-center" style={{ fontFamily: 'Inter, sans-serif' }}>{item.name}</td>
                <td className="font-bold md:text-lg whitespace-nowrap px-6 py-4 text-center" style={{ fontFamily: 'Inter, sans-serif' }}>{item.quantity}</td>
                <td className="font-bold md:text-lg whitespace-nowrap px-6 py-4 text-center" style={{ fontFamily: 'Inter, sans-serif' }}>{item.totalPrice}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>


     
 <div className='flex justify-between items-center p-3'>
  <h2 className='font-bold text-md' style={{ fontFamily: 'Inter, sans-serif' }}>Total Price: ₱{calculateTotalPrice()}</h2>
  <button className='font-medium bg-red-600 p-2 px-6 text-white text-md'style={{ fontFamily: 'Inter, sans-serif' }} onClick={clearCart}>Clear Cart</button>    
  </div>

      
    </div>

    
    </>
  );
};

export default App;
