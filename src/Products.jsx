import { useContext } from 'react';
import React from "react";
import { useParams, Link } from "react-router-dom";
import TemporaryDrawer from "./drawer";
import cart from "./assets/cart.png";
import { CartContext } from "./CartContext";
import pepsi from './assets/Pepsi.png';
import cocacola from './assets/cocacola.png'
import sprite from './assets/sprite.jpg'
import fanta from './assets/cocacola.png'
import mountaindew from './assets/mountaindew.jpg'
import sevenup from './assets/7up.jpg'
import mirinda from './assets/mirinda.jpg'
import thumsup from './assets/thumbsup.jpg'
import limca from './assets/limca.jpg'
import maaza from './assets/maaza.jpg'
import puff from './assets/vegpuff.jpg'
import samosa from './assets/samosa.jpg';
import fries from './assets/frenchfries.jpg';
import burger from './assets/cheeseburger.jpg';
import sandwich from './assets/paneersandwich.jpg';
import pizza from './assets/vegpizza.jpg';
import springroll from './assets/springroll.jpg';
import nuggets from './assets/cheesecornnuggets.jpg';
import garlicbread from './assets/garlicbread.jpg';
import paneerwrap from './assets/paneerwrap.jpg';
import hotdog from './assets/veghotdog.jpg';
import blackforest from './assets/blackforestcake.jpg';
import redvelvet from './assets/redvelvetcake.jpg';
import truffle from './assets/truffle.jpg';
import pineapple from './assets/pineapplecake.jpg';
import vanillaCake from './assets/vanillabeancake.jpg';
import fruitcake from './assets/fruitcake.jpg';
import butterscotchCake from './assets/butterscotchcake.jpg';
import strawberryCake from './assets/strawberrycutcake.jpg';
import whiteforest from './assets/whiteforest.jpg';
import coffeecake from './assets/coffeewallnut.jpg';
import rainbowcake from './assets/rainbowcake.jpg';
import gulabjamun from './assets/cocacola.png';
import kajukatli from './assets/cocacola.png';
import rasgulla from './assets/cocacola.png';
import ladoo from './assets/cocacola.png';
import barfi from './assets/cocacola.png';
import jalebi from './assets/cocacola.png';
import mysorepak from './assets/cocacola.png';
import soanpapdi from './assets/cocacola.png';
import kalakand from './assets/cocacola.png';
import peda from './assets/cocacola.png';
import coconutladoo from './assets/cocacola.png';
import vanilla from './assets/cocacola.png';
import chocolate from './assets/cocacola.png';
import strawberry from './assets/cocacola.png';
import butterscotch from './assets/cocacola.png';
import mango from './assets/cocacola.png';
import chocobar from './assets/cocacola.png';
import pistachio from './assets/cocacola.png';
import blackcurrant from './assets/cocacola.png';
import tuttifrutti from './assets/cocacola.png';
import cassata from './assets/cocacola.png';
import kulfi from './assets/cocacola.png';
import balloons from './assets/cocacola.png';
import candles from './assets/cocacola.png';
import hats from './assets/cocacola.png';
import snowspray from './assets/cocacola.png';
import popper from './assets/cocacola.png';
import banner from './assets/cocacola.png';
import sparklers from './assets/cocacola.png';
import whistles from './assets/cocacola.png';
import confetti from './assets/cocacola.png';
import sash from './assets/cocacola.png';
import paperplates from './assets/cocacola.png';

const allProducts={
drinks : [
  { id: "Juice-01", Title: "Pepsi", Price: 100, liter: 1, img: pepsi },
  { id: "Juice-02", Title: "Coca-Cola", Price: 95, liter: 1, img: cocacola },
  { id: "Juice-03", Title: "Sprite", Price: 90, liter: 1, img: sprite },
  { id: "Juice-04", Title: "Fanta", Price: 95, liter: 1, img: fanta },
  { id: "Juice-05", Title: "Mountain Dew", Price: 100, liter: 1, img: mountaindew },
  { id: "Juice-06", Title: "7Up", Price: 90, liter: 1, img: sevenup },
  { id: "Juice-07", Title: "Mirinda", Price: 85, liter: 1, img: mirinda },
  { id: "Juice-08", Title: "Thums Up", Price: 105, liter: 1, img: thumsup },
  { id: "Juice-09", Title: "Limca", Price: 85, liter: 1, img: limca },
  { id: "Juice-10", Title: "Maaza", Price: 120, liter: 1.2, img: maaza }
],snacks: [
    { id: "Snack-01", Title: "Veg Puff", Price: 25, type: "1 piece", img: puff },
    { id: "Snack-02", Title: "Samosa", Price: 20, type: "1 piece", img: samosa },
  { id: "Snack-03", Title: "French Fries", Price: 80, type: "1 plate", img: fries },
  { id: "Snack-04", Title: "Cheese Burger", Price: 120, type: "1 piece", img: burger },
  { id: "Snack-05", Title: "Paneer Sandwich", Price: 90, type: "1 piece", img: sandwich },
  { id: "Snack-06", Title: "Veg Pizza", Price: 150, type: "Regular", img: pizza },
  { id: "Snack-07", Title: "Spring Roll", Price: 60, type: "2 pieces", img: springroll },
  { id: "Snack-08", Title: "Garlic Bread", Price: 90, type: "4 pieces", img: garlicbread },
  { id: "Snack-09", Title: "Paneer Wrap", Price: 140, type: "1 piece", img: paneerwrap },
  { id: "Snack-10", Title: "Cheese Corn Nuggets", Price: 110, type: "6 pieces", img: nuggets },
  { id: "Snack-11", Title: "Veg Hot Dog", Price: 80, type: "1 piece", img: hotdog }
  ],
  cakes: [
    { id: "Cake-01", Title: "Black Forest", Price: 450, type: "1kg", img: blackforest },
    { id: "Cake-02", Title: "Red Velvet", Price: 550, type: "1kg", img: redvelvet },
  { id: "Cake-03", Title: "Choco Truffle", Price: 600, type: "1kg", img: truffle },
  { id: "Cake-04", Title: "Pineapple", Price: 400, type: "1kg", img: pineapple },
  { id: "Cake-05", Title: "Vanilla Bean", Price: 350, type: "1kg", img: vanillaCake },
  { id: "Cake-06", Title: "Fruit Cake", Price: 500, type: "1kg", img: fruitcake },
  { id: "Cake-07", Title: "Butterscotch Cake", Price: 450, type: "1kg", img: butterscotchCake },
  { id: "Cake-08", Title: "Strawberry Shortcake", Price: 550, type: "1kg", img: strawberryCake },
  { id: "Cake-09", Title: "White Forest", Price: 500, type: "1kg", img: whiteforest },
  { id: "Cake-10", Title: "Coffee Walnut", Price: 650, type: "1kg", img: coffeecake },
  { id: "Cake-11", Title: "Rainbow Cake", Price: 700, type: "1kg", img: rainbowcake }
    // ... rest of cakes
  ],

  sweets: [{ id: "Sweet-01", Title: "Gulab Jamun", Price: 150, type: "500g", img: gulabjamun },
  { id: "Sweet-02", Title: "Kaju Katli", Price: 400, type: "500g", img: kajukatli },
  { id: "Sweet-03", Title: "Rasgulla", Price: 140, type: "500g", img: rasgulla },
  { id: "Sweet-04", Title: "Motichoor Ladoo", Price: 180, type: "500g", img: ladoo },
  { id: "Sweet-05", Title: "Milk Barfi", Price: 220, type: "500g", img: barfi },
  { id: "Sweet-06", Title: "Jalebi", Price: 120, type: "500g", img: jalebi }, 
   { id: "Sweet-07", Title: "Mysore Pak", Price: 250, type: "500g", img: mysorepak },
  { id: "Sweet-08", Title: "Soan Papdi", Price: 180, type: "500g", img: soanpapdi },
  { id: "Sweet-09", Title: "Kalakand", Price: 300, type: "500g", img: kalakand },
  { id: "Sweet-10", Title: "Peda", Price: 220, type: "500g", img: peda },
  { id: "Sweet-11", Title: "Coconut Ladoo", Price: 190, type: "500g", img: coconutladoo } ],

  icecreams: [{ id: "Ice-01", Title: "Vanilla Scoop", Price: 60, type: "100ml", img: vanilla },
  { id: "Ice-02", Title: "Chocolate Fudge", Price: 80, type: "100ml", img: chocolate },
  { id: "Ice-03", Title: "Strawberry", Price: 70, type: "100ml", img: strawberry },
  { id: "Ice-04", Title: "Butterscotch", Price: 75, type: "100ml", img: butterscotch },
  { id: "Ice-05", Title: "Mango Delight", Price: 85, type: "100ml", img: mango },
  { id: "Ice-06", Title: "Choco Bar", Price: 40, type: "1 piece", img: chocobar },
  { id: "Ice-07", Title: "Pistachio Scoop", Price: 90, type: "100ml", img: pistachio },
  { id: "Ice-08", Title: "Black Currant", Price: 85, type: "100ml", img: blackcurrant },
  { id: "Ice-09", Title: "Tutti Frutti", Price: 70, type: "100ml", img: tuttifrutti },
  { id: "Ice-10", Title: "Cassata Slice", Price: 120, type: "1 piece", img: cassata },
  { id: "Ice-11", Title: "Malai Kulfi", Price: 50, type: "1 piece", img: kulfi },
],
  party: [{ id: "Party-01", Title: "Party Balloons", Price: 50, type: "Pack of 50", img: balloons },
  { id: "Party-02", Title: "Magic Candles", Price: 30, type: "Pack of 10", img: candles },
  { id: "Party-03", Title: "Party Hats", Price: 60, type: "Pack of 5", img: hats },
  { id: "Party-04", Title: "Snow Spray", Price: 80, type: "1 Bottle", img: snowspray },
  { id: "Party-05", Title: "Party Popper", Price: 100, type: "1 Piece", img: popper },
  { id: "Party-06", Title: "Birthday Banner", Price: 70, type: "1 Piece", img: banner },
  { id: "Party-07", Title: "Sparkle Candles", Price: 40, type: "Pack of 5", img: sparklers },
  { id: "Party-08", Title: "Party Whistles", Price: 35, type: "Pack of 10", img: whistles },
  { id: "Party-09", Title: "Confetti Shooter", Price: 120, type: "1 Piece", img: confetti },
  { id: "Party-10", Title: "Birthday Sash", Price: 80, type: "1 Piece", img: sash },
  { id: "Party-11", Title: "Paper Plates & Cups", Price: 60, type: "Set of 10", img: paperplates },
]}


const Items = ({ currentList, addToCart }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {currentList.map((product) => (
        <div key={product.id} className="bg-white p-5 rounded-2xl shadow-md flex flex-col items-center text-center">
          <img src={product.img} alt={product.Title} className="w-32 h-32 object-contain mb-4" />
          <h3 className="text-xl font-bold text-black">{product.Title}</h3>
          
          <p className="text-sm text-gray-500 mb-4">
            {product.type ? product.type : `${product.liter} Liter`}
          </p> 
          
          <div className="flex justify-between items-center w-full mt-auto">
            <span className="text-xl font-extrabold text-fuchsia-950">₹{product.Price}</span>
            
            <button 
              onClick={addToCart} 
              className="bg-amber-400 text-black px-4 py-2 rounded-xl font-bold hover:bg-amber-500 transition-colors shadow-sm active:scale-95"
            >
              Add +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default function Products(){
  const { category } = useParams();
  const activeCategory = category ? category.toLowerCase() : "drinks";
  const currentList = allProducts[activeCategory] || allProducts["drinks"];
  const { cartCount, addToCart } = useContext(CartContext);
    return( 
        <>
        <header className="fixed top-0 left-0 right-0 z-50 bg-fuchsia-950 px-6 py-4 shadow-md">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                  <div className="flex-none">
                    <TemporaryDrawer />
                  </div>
                  
                  <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-widest text-amber-400 text-center flex-1 mx-4 truncate">
                    TECH FRESH BAKERY
                  </h1>
                  
                  <button 
                    className="flex-none hover:opacity-100 transition-opacity focus:outline-none"
                    aria-label="View Cart"
                  >
                    <img src={cart} alt="" className="w-12 md:w-16" />
                    <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full border-2 border-fuchsia-950">
                {cartCount}
              </span>
                  </button>
                </div>
              </header>
              <main className="pt-32 pb-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-fuchsia-950 mb-8 capitalize border-b-2 border-fuchsia-200 pb-2">
          {activeCategory}
        </h2>
        <Items currentList={currentList} addToCart={addToCart}/>
        </main>
        </>
)}
