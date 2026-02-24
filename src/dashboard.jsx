import React from "react";
import {useContext} from "react";
import { CartContext } from "./CartContext";
import {Link} from "react-router-dom"
import TemporaryDrawer from "./drawer";
import cakes from "./assets/cakes.png";
import drinks from "./assets/drinks.png";
import snacks from "./assets/snacks.png";
import celebrations from "./assets/celebrations.png";
import icecreams from "./assets/icecreams.png";
import sweets from "./assets/sweets.png";
import cart from "./assets/cart.png";

const FeatureCard = ({ title, line1, line2, image, bgColor, link }) => {
  
  return (
    <Link
      to={link}
      className={`group flex flex-col md:flex-row items-center justify-between p-8 md:p-12 ${bgColor} rounded-3xl cursor-pointer hover:scale-105 transition-all duration-300 w-full shadow-sm`}
    >
      <div className="text-center md:text-left mb-6 md:mb-0">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">{title}</h2>
        <p className="text-sm md:text-xl text-black/80">{line1}</p>
        <p className="text-sm md:text-xl text-black/80">{line2}</p>
      </div>
      <img
        src={image}
        alt={title}
        className="w-48 md:w-64 drop-shadow-lg group-hover:rotate-30 group-hover:scale-110 transition-all duration-500"
        />
      </Link>
    
  );
};

const StandardCard = ({ title, line1, line2, image, bgColor,link }) => {
  
  return (
    <Link
      to={link}
      className={`group flex flex-col sm:flex-row items-center justify-between p-6 ${bgColor} rounded-2xl cursor-pointer hover:scale-105 transition-all duration-300 w-full shadow-sm gap-4`}
    >
      <div className="text-center sm:text-left flex-1">
        <h3 className="text-2xl md:text-3xl font-bold text-black mb-2">{title}</h3>
        <p className="text-sm text-black/80">{line1}</p>
        <p className="text-sm text-black/80">{line2}</p>
    </div>
    <img
      src={image}
      alt={title}
      className="w-32 md:w-40 drop-shadow-md group-hover:rotate-30 group-hover:scale-110 transition-all duration-500"
    />
  </Link>
);
};

export default function Dashboard() {
   const { cartCount} = useContext(CartContext);
  return (
    <div className="min-h-screen bg-lime-200">
  
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
            <span className="absolute top-0 -right-3 bg-red-500 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full border-2 border-fuchsia-950">
                {cartCount}
              </span>
          </button>
        </div>
      </header>


      <main className="pt-32 pb-16 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
 
          <FeatureCard
            title="Drinks"
            line1="From fresh bites to warm sips."
            line2="The perfect blend to start your day."
            image={drinks}
            bgColor="bg-blue-200"
            link="products/drinks"
          />

          <div className="flex flex-col gap-8 justify-center">
            <StandardCard
              title="Cakes"
              line1="Indulge in our irresistible cakes."
              line2="A slice of happiness in every bite."
              image={cakes}
              bgColor="bg-fuchsia-200"
              link="products/cakes"
            />
            <StandardCard
              title="Snacks"
              line1="Satisfy your cravings with our"
              line2="delicious snacks."
              image={snacks}
              bgColor="bg-emerald-200"
              link="products/snacks"
            />
          </div>


          <div className="flex flex-col gap-8 justify-center order-2 lg:order-1">
            <StandardCard
              title="Ice Creams"
              line1="Ice creams are the perfect treat to"
              line2="beat the heat."
              image={icecreams}
              bgColor="bg-fuchsia-200"
              link="products/icecreams"
            />
            <StandardCard
              title="Sweets"
              line1="Sweets are the perfect way to satisfy"
              line2="your sweet tooth."
              image={sweets}
              bgColor="bg-emerald-200"
              link="products/sweets"
            />
          </div>

          <div className="order-1 lg:order-2">
            <FeatureCard
              title="Party"
              line1="Celebrate every moment with our special treats."
              line2="GRAB YOURS NOW!"
              image={celebrations}
              bgColor="bg-blue-200"
              link="products/party"
            />
          </div>

        </div>
      </main>
    </div>
  );
}