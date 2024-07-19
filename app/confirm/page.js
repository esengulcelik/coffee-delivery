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

import { useRouter, useSearchParams } from 'next/navigation';
import { CiBank } from "react-icons/ci"; <CiBank />
import { CiMoneyBill } from "react-icons/ci"; <CiMoneyBill />
import { PiCoffeeFill } from "react-icons/pi";
import { GoClockFill } from "react-icons/go";
import { BsBoxSeamFill } from "react-icons/bs";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BiDollar } from "react-icons/bi";
import { HiCurrencyDollar } from "react-icons/hi2";


export default function confirm() {
    const searchParams = useSearchParams();

    
    // Query string'inden verileri alıyoruz
    const rua = searchParams.get('rua');
    const numero = searchParams.get('numero') || 'Não disponível';
    const bairro = searchParams.get('bairro') || 'Não disponível';
    const cidade = searchParams.get('cidade') || 'Não disponível';
    const uf = searchParams.get('uf') || 'Não disponível';
console.log(rua)
    return (
        <div>
            <div className="z-20  fixed top-0 left-0 right-0 py-8 bg-white flex justify-around   w-full">
                <Link href={"/"}>
                    <Image src="images/coffe-delivery-logo.e98727a6.svg" alt="Coffee Delivery Logo"
                        width={80}
                        height={80}
                    />
                </Link>
                <div className="flex gap-2">
                    <div className="bg-custom-purple  rounded-lg px-2  text-purple-700  ">
                        <button className="text-sm flex  py-1 mt-1">
                            <MdLocationOn className="text-xl" />
                            Fortaleza, CE
                        </button>
                    </div>
                    <Link href={"/sepet"} className="bg-custom-beige text-orange-800 px-3 py-2 rounded-lg">
                        <SlBasketLoaded className="w-5 h-5" />
                    </Link>
                </div>
            </div>
            <div className='mt-40'>
                <div className='flex flex-col mx-auto max-w-5xl xl:w-full w-4/5'>
                    <h1 className='font-bold text-3xl text-orange-500'>Uhu! Pedido confirmado</h1>
                    <h2>Agora é só aguardar que logo o café chegará até você</h2>
                </div>
                <div className='xl:flex xl:flex-row flex flex-col  mx-auto max-w-5xl  gap-10 mt-16  items-center justify-center'>





                    <div className='flex flex-col xl:w-full w-4/5  basis-1/2 h-full  rounded-tr-3xl rounded-bl-3xl bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-500 p-1'>
                        <div className='gap-6 flex flex-col  bg-white rounded-tr-3xl rounded-bl-3xl px-8 py-8'>
                            <div className='flex gap-3'>
                                <div className='px-2 py-2 rounded-full text-white bg-purple-400'>
                                    <MdLocationOn className='w-5 h-5  ' />
                                </div>
                                <div className='flex flex-col '>
                                <p>Entrega em  {rua}, {numero}</p>
                                <p></p>
                                </div>
                            </div>
                            <div className='flex gap-3'>
                                <div className="px-2 py-2 rounded-full bg-orange-400 text-white">
                                    <GoClockFill className="w-5 h-5" />
                                </div>
                                <div className='flex flex-col'>
                                    <p>Previsão de entrega</p>
                                    <p>20 min - 30 min</p>
                                </div>
                            </div>
                            <div className='flex gap-3'>
                                <div className='px-3 py-3 w-10 rounded-full text-4xl text-white bg-orange-700'>
                                    <BiDollar className='items-center w-5 h-5' />
                                </div>
                                <div className='flex flex-col'>
                                    <p>Pagamento na entrega</p>
                                    <p>Cartão de Débito</p>
                                </div>
                            </div>
                        </div>
                    </div>







                    <div className="basis-1/2 xl:w-full w-4/5">
                        <Image src="/images/motor.png" width={500} height={500} className="" alt="Coffee Image" />
                    </div>
                </div>
            </div>

        </div>
    )
}