'use client'
import React from 'react';
import Image from "next/image";
import Head from "next/head";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { MdLocationOn } from "react-icons/md";
import { SlBasketLoaded } from "react-icons/sl";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { CiCreditCard1 } from "react-icons/ci";
import { useRouter } from 'next/router';
import { CiBank } from "react-icons/ci"; <CiBank />
import { CiMoneyBill } from "react-icons/ci"; <CiMoneyBill />
import { PiCoffeeFill } from "react-icons/pi";
import { GoClockFill } from "react-icons/go";
import { BsBoxSeamFill } from "react-icons/bs";
import { RiDeleteBin5Line } from "react-icons/ri";
export default (props) => {
    const {setCoffeeData,coffeeData,index,coffee,handleAddToCart}=props;
  const incrementValue = (index) => {
    const newCoffeeData = [...coffeeData];
    newCoffeeData[index].count += 1;
    setCoffeeData(newCoffeeData);
  };

  const decrementValue = (index) => {
    const newCoffeeData = [...coffeeData];
    if (newCoffeeData[index].count > 1) {
      newCoffeeData[index].count -= 1;
      setCoffeeData(newCoffeeData);
    }
  };

  return (
    <div
      key={index}
      className="flex flex-col basis-1/4 items-center mt-20 relative"
    >
      <div className="z-10 absolute -mt-16 flex items-center justify-center">
        <Image
          src={coffee.image}
          width={100}
          height={100}
          className=""
          alt="Coffee Image"
        />
      </div>
      <div className="relative z-0 space-y-8 px-4 py-6 xl:w-full w-4/5  bg-gray-100 rounded-tr-3xl rounded-bl-3xl flex flex-col items-center gap-3">
        <div className="flex-col space-y-5 justify-center ">
          <div className="flex justify-center">
            <span className="bg-amber-100 text-yellow-600 rounded-xl mt-4 px-2 py-1 text-xs">
              TRADICIONAL
            </span>
          </div>
          <div className="justify-center flex flex-col items-center">
            <h1 className="text-lg">{coffee.name}</h1>
            <p className="text-sm font-light ml-2">
              O tradicional café feito com água quente e grãos moídos
            </p>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="gap-2 flex items-center">
            <span className="text-gray-400 font-medium text-sm">R$</span>
            <span className="text-gray-600 text-xl">{coffee.price}</span>
          </div>
          <div className="bg-slate-200 rounded-xl gap-2 px-4 py-2 flex ">
            <button
              onClick={() => decrementValue(index)}
              className="text-purple-800"
            >
              -
            </button>
            <span className='font-light'>{coffee.count}</span>
            <button
              onClick={() => incrementValue(index)}
              className="text-purple-800"
            >
              +
            </button>
          </div>

          <div className="px-3 py-2 w-10 rounded-xl bg-purple-800 text-white">
            <button
              onClick={() =>
                handleAddToCart(coffee.name, coffee.price, coffee.image,coffee.count)
              }
            >
              <SlBasketLoaded className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};