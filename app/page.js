'use client'
import React from 'react';
import Head from "next/head";
import Image from "next/image";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { MdLocationOn } from "react-icons/md";
import { SlBasketLoaded } from "react-icons/sl";
import { PiCoffeeFill } from "react-icons/pi";
import { GoClockFill } from "react-icons/go";
import { BsBoxSeamFill } from "react-icons/bs";
import { IoCart } from 'react-icons/io5'; // Cart icon
import Product from "./component/product"
const initialCoffeeData = [
  {
    name: "Expresso Tradicional",
    price: 9.90,
    image: "/images/tradicional.png",
    count: 1
  },
  {
    name: "Expresso Americano",
    price: 10.50,
    image: "/images/americano.png",
    count: 1
  },
  {
    name: "Expresso Cremoso",
    price: 11.00,
    image: "/images/cremoso.png",
    count: 1
  },
  {
    name: "Expresso Gelado",
    price: 12.00,
    image: "/images/gelado.png",
    count: 1
  },
  {
    name: "Café com Leite",
    price: 13.50,
    image: "/images/leite.png",
    count: 1
  },
  {
    name: "Latte",
    price: 14.00,
    image: "/images/latte.png",
    count: 1
  },
  {
    name: "Capuccino",
    price: 15.00,
    image: "/images/capuccino.png",
    count: 1
  },
  {
    name: "Macchiato",
    price: 15.50,
    image: "/images/macchiato.png",
    count: 1
  },
  {
    name: "Mocaccino",
    price: 16.00,
    image: "/images/mocaccino.png",
    count: 1
  },
  {
    name: "Chocolate Quente",
    price: 16.50,
    image: "/images/chocolate.png",
    count: 1
  },
  {
    name: "Cubano",
    price: 17.00,
    image: "/images/latte.png",
    count: 1
  },
  {
    name: "Havaiano",
    price: 17.50,
    image: "/images/latte.png",
    count: 1
  },
  {
    name: "Árabe",
    price: 18.00,
    image: "/images/latte.png",
    count: 1
  },
  {
    name: "Irlandês",
    price: 18.50,
    image: "/images/latte.png",
    count: 1
  }
];
export default function Home() {
  const [value, setValue] = useState(1);
  const [coffeeData, setCoffeeData] = useState([])

  useEffect(() => {
    setCoffeeData(initialCoffeeData);
  }, []);

  const [cartCount, setCartCount] = useState(0);
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartCount(cart.length);
  }, []);

  const handleAddToCart = (name, price, image,count) => {
    // Sepete ekleme işlemleri burada gerçekleştirilecek
    const coffee = { name, price, image ,count};
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let existIndex=cart.findIndex(c=>c.name===coffee.name)
    if(existIndex>=0){
      cart[existIndex].count+=coffee.count
    }
    else cart.push(coffee);
    localStorage.setItem('cart', JSON.stringify(cart));
    setCartCount(cart.length);
  };


  return (
    <div>
         <div className="z-20 fixed top-0 left-0 right-0 py-8 bg-white flex justify-around   w-full">
                <Link href={"/"}>
                    <Image src="images/coffe-delivery-logo.e98727a6.svg" alt="Coffee Delivery Logo"
                        width={80}
                        height={80}
                    />
                </Link>
                <div className="flex gap-2">
                    <div className="bg-custom-purple  rounded-lg px-2  text-purple-700  ">
                        <button className="text-sm flex  py-1 mt-1 sc-dkzDqf hfAsYb">
                            <MdLocationOn className="text-xl" />
                            Fortaleza, CE
                        </button>
                    </div>
                    <Link href={"/sepet"} className="bg-custom-beige text-orange-800 px-3 py-2 rounded-lg">
                        <button className='sc-dkzDqf bufHds'><span>{cartCount}</span>
                        <SlBasketLoaded className="w-5 h-5" />
                        </button>
                    </Link>
                </div>
            </div>
      <div className="  mt-16  bg-gradient-to-r from-yellow-50 via-purple-50 to-yellow-50 ">
        <div className=" container mx-auto max-w-6xl xl:flex xl:flex-row flex flex-col space-x-7 py-20 ">
          <div className="basis-1/2 space-y-24 ">
            <div className="space-y-8 xl:ml-0 ml-2 ">
              <h1 className="font-bold xl:text-5xl text-4xl leading-normal ">Encontre o café perfeito para qualquer hora do dia</h1>
              <h3 className="xl:text-2xl text-sm">Com o Coffe Delivery você recebe seu café onde estiver, a qualquer hora</h3>
            </div>
            <div className="xl:flex xl:flex-row flex flex-col xl:gap-8 gap-4 xl:w-full w-4/5">
              <div className="space-y-4 xl:pl-0 pl-4">
                <div className="flex items-center gap-2">
                  <div className="px-3 py-3 w-10 rounded-full bg-orange-600 text-white">
                    <SlBasketLoaded className=" w-4 h-4 " />
                  </div>
                  <p className="whitespace-nowrap">  Compra simples e segura</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="px-3 py-3 w-10 rounded-full bg-orange-400 text-white">
                    <GoClockFill className=" w-4 h-4" />
                  </div>
                  <p className="whitespace-nowrap"> Embalagem mantém o café intacto</p>
                </div>
              </div>
              <div className="space-y-4 xl:pl-0 pl-4">
                <div className="flex items-center gap-2">
                  <div className="px-3 py-3 w-10 rounded-full bg-slate-700 text-white">
                    <BsBoxSeamFill className=" w-4 h-4 " />
                  </div>
                  <p className="whitespace-nowrap">  Entrega rápida e rastreada</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="px-3 py-3 w-10 rounded-full bg-purple-800 text-white">
                    <PiCoffeeFill className=" w-4 h-4 " />
                  </div>
                  <p className="whitespace-nowrap">  O café chega fresquinho até você</p>
                </div>
              </div>
            </div>
          </div>
          <div className=" basis-1/2 ">
            <Image src="/images/coffee.png" alt="Coffee Delivery Logo" className="mt-20 w-full "
              width={700}
              height={700}
            />
          </div>

        </div>
      </div>

      <div className="container mx-auto mt-5  font-bold max-w-5xl mb-32">
        <span className="xl:text-3xl text-xl xl:ml-0 ml-8 "> Nossos cafés</span>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
          {coffeeData.map((coffee, index) => (
           <Product coffee={coffee} index={index} handleAddToCart={handleAddToCart} setCoffeeData={setCoffeeData} coffeeData={coffeeData}/>
          ))}


        </div>



      </div>


    </div>
  );
}