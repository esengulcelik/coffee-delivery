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
import { useRouter } from 'next/navigation';
import { CiBank } from "react-icons/ci"; <CiBank />
import { CiMoneyBill } from "react-icons/ci"; <CiMoneyBill />
import { PiCoffeeFill } from "react-icons/pi";
import { GoClockFill } from "react-icons/go";
import { BsBoxSeamFill } from "react-icons/bs";
import { RiDeleteBin5Line } from "react-icons/ri";
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
const Sepet = () => {
    const [coffeeData, setCoffeeData] = useState([]);
    const [selectedOption, setSelectedOption] = useState('');
    const router = useRouter();
    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        setCoffeeData(cart);
    }, []);

    const handleFormSubmit = (e) => {
        const form = document.getElementById("addressForm");

        if (!(form instanceof HTMLFormElement)) {
            console.error('Form elementi bulunamadı!');
            return;
        }

        const formData = new FormData(form);
        const address = {
            cep:formData.get("phone"),
            rua: formData.get('rua'),
            numero: formData.get('numero'),
            bairro: formData.get('bairro'),
            cidade: formData.get('cidade'),
            uf: formData.get('uf'),
        };

        if (!address.rua  || address.rua ==="" || !address.numero  || address.numero ==="" || !address.bairro || address.bairro ==="" || !address.cidade || address.cidade ==="" || !address.uf || address.uf ==="") {
            console.error('Form elemanları eksik!');
            return;
        }
       
        // Verileri URL query string ile Confirm sayfasına yönlendirme
    };
    const incrementValue = (index) => {
        const newCoffeeData = [...coffeeData];
        newCoffeeData[index].count += 1;
        localStorage.setItem('cart', JSON.stringify(newCoffeeData));
        setCoffeeData(newCoffeeData);
    };
    const getTotal = (tax = 0) => {
        let total = tax;
        coffeeData.forEach(item => {
            total += item.price * item.count;

        });
        return total.toFixed(2)
    }
    const decrementValue = (index) => {
        const newCoffeeData = [...coffeeData];
        if (newCoffeeData[index].count > 1) {
            newCoffeeData[index].count -= 1;
            localStorage.setItem('cart', JSON.stringify(newCoffeeData));
            setCoffeeData(newCoffeeData);
        }
    };
    const deleteAll = (index) => {
        const newCoffeeData = coffeeData
        newCoffeeData.splice(index, 1)
        localStorage.setItem('cart', JSON.stringify(newCoffeeData));
        setCoffeeData(newCoffeeData);
    }
    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const submitForm = () => {
        const addressForm = document.getElementById("submitForm");
        if(addressForm)
            addressForm.click();   
    }
    const [selectedDiv, setSelectedDiv] = React.useState(0);
    const selectDiv = (index) => {
        setSelectedDiv(index);
    }
    const setActiveDiv = (index) =>{
        const divElements =document.getElementsByClassName("divArea");
        if (divElements){
            for(let i =1;i<=divElements.length;i++){
                if(i ==index)
                {
                    divElements[i-1].classList.add("selectedDivArea");
                    continue;
                }
                divElements[i-1].classList.remove("selectedDivArea")
            }
        }
    }
    React.useEffect(()=>{
        setActiveDiv(selectedDiv)
    },[selectedDiv])
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
                    <Link href={"/sepet"} className="bg-custom-beige text-orange-800 px-3 py-1 rounded-lg">
                        <SlBasketLoaded className="w-5 h-5" />
                    </Link>
                </div>
            </div>


            <div>
                <div className=" xl:flex xl:flex-row flex flex-col gap-6   justify-center mx-auto max-w-5xl mt-36 ">
                    <form id="addressForm" action='/confirm' onSubmit={handleFormSubmit}>

                        <div className="flex flex-col gap-4 basis-3/5  xl:w-full w-4/5 ">
                            <p className="font-bold">Complete seu pedido</p>
                            <div className="bg-custom-sepet rounded-lg ">

                                <div className="flex py-8 px-6 gap-2 ">
                                    <HiOutlineLocationMarker className="text-orange-500  text-xl" />
                                    <div className="flex flex-col">
                                        <span>Endereço de Entrega</span>
                                        <span className="text-sm">Endereço de Entrega</span>
                                    </div>
                                </div>
                                <div className="mb-5 max-w-lg  mx-auto ml-5 space-y-3  py-6 px-4">
                                    <input type="text" name='phone' id="phone" className="bg-custom-form border w-40 border-gray-200 text-gray-500 text-sm rounded-lg  block p-2.5   " placeholder="CEP" required />
                                    <input type="text" name="rua" id="rua" className="bg-custom-form border border-gray-200 text-gray-500 text-sm rounded-lg  block w-full p-2.5   " placeholder="rua" required />
                                    <div className="flex gap-2">
                                        <input type="text" name="numero" id="numero" className="bg-custom-form border border-gray-200 text-gray-500 text-sm rounded-lg  block w-full p-2.5   " placeholder="numero" required />
                                        <div className=" items-center relative block w-full  ">
                                            <input type="text" name="complemento" id="complemento" className="bg-custom-form border border-gray-200 text-gray-500 text-sm rounded-lg  block w-full p-2.5    " placeholder="complemento" required />
                                            <span class=" absolute  right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm italic">Opcional</span>
                                        </div>
                                    </div>
                                    <div className="flex gap-6">
                                        <input type="text" name="bairro" id="bairro" className="bg-custom-form border border-gray-200 text-gray-500 text-sm rounded-lg  block w-full p-2.5   " placeholder="bairro" required />
                                        <input type="text" name="cidade" id="cidade" className="bg-custom-form border border-gray-200 text-gray-500 text-sm rounded-lg  block w-full p-2.5   " placeholder="cidade" required />
                                        <input type="text" name="uf" id="uf" className="bg-custom-form border border-gray-200 text-gray-500 text-sm rounded-lg  block w-full p-2.5   " placeholder="uf" required />
                                    </div>
                                </div>
                            </div>

                            <div className="bg-custom-sepet px-9 py-10 space-y-16 rounded-lg">
                                <div className="flex gap-2">
                                    <p className="text-purple-700 text-xl">$</p>
                                    <div className="flex flex-col">
                                        <p className="text-lg">Pagamento</p>
                                        <p className="text-sm">Pagamento</p>
                                    </div>
                                </div>
                                <div className="xl:flex xl:flex-row flex flex-col gap-2 ">
                                    <div id="div1" className="divArea bg-custom-card rounded-lg xl:w-1/3 w-full" onClick={(e)=> selectDiv(1)}>
                                        <input id="credit" type="radio" class="hidden" value="option1"
                                            className="hidden"
                                            checked={selectedOption === 'option1'}
                                            onChange={handleOptionChange} name="paymentMethod" />
                                        <label className={`cursor-pointer p-4 border rounded ${selectedOption === 'option1' ? 'bg-green-500 text-white' : 'bg-white'
                                            }`}>
                                            <div className="flex gap-2 items-center text-sm ">
                                                <CiCreditCard1 className="text-purple-700 text-lg" />
                                                Cartão de Cŕedito
                                            </div>
                                        </label>
                                    </div>
                                    <div id='div2' className="divArea bg-custom-card rounded-lg xl:w-1/3 w-full" onClick={(e)=> selectDiv(2)}>
                                        <input id="debit" type="radio" class="hidden" name="paymentMethod" value="debit" />
                                        <label>
                                            <div className="flex gap-2 mt-2 items-center ml-2 text-sm">
                                                <CiBank className="text-purple-700 text-lg" />
                                                Cartão de Débito
                                            </div>
                                        </label>
                                    </div>
                                    <div id="div3" className="divArea bg-custom-card rounded-lg xl:w-1/3 w-full" onClick={(e)=> selectDiv(3)}>
                                        <input id="cash" type="radio" class="hidden" name="paymentMethod" value="cash" />
                                        <label>
                                            <div className="flex gap-2  items-center mt-2 ml-2 text-sm ">
                                                <CiMoneyBill className="text-purple-700 focus:bg text-lg" />
                                                Dinheiro
                                            </div>
                                        </label>
                                    </div>

                                </div>

                            </div>
                        </div>
                        <button id="submitForm" style={{display:"none"}} type='submit' onClick={handleFormSubmit} />
                    </form>

                    <div className="bg-custom-sepet  xl:w-full w-4/5  flex basis-2/5 rounded-tr-3xl rounded-bl-3xl px-3  mt-10 ">
                        <div>

                        </div>
                        <section className="space-y-5 w-full px-7 py-7 ">
                            {coffeeData.map((coffee, index) => (
                                <div className="flex  items-center gap-5">

                                    <div className="flex gap-4 items-center">
                                        <Image src="/images/tradicional.png" width={60} height={60} className="" alt="Coffee Image" />
                                        <div>
                                            <p className="whitespace-nowrap">Expresso Tradicional</p>
                                            <div className="flex gap-2">
                                                <div className="bg-custom-card rounded-xl px-2 py-2 flex ">
                                                    <button onClick={() => decrementValue(index)} className="text-purple-800">-</button>
                                                    <span>{coffee.count}</span>
                                                    <button onClick={() => incrementValue(index)} className="text-purple-800">+</button>
                                                </div>
                                                <button onClick={() => deleteAll(index)} className="bg-custom-card items-center flex text-black text-sm w-full  rounded-lg px-3 py-3">
                                                    <RiDeleteBin5Line className="text-purple-600" />  REMOVER
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="font-bold whitespace-nowrap ">{coffee.price * coffee.count}</p>
                                </div>
                            ))}

                            <div className="flex justify-between ">
                                <p>Total de itens</p>
                                <p className="justify-end">R$ {getTotal()}</p>
                            </div>
                            <div className="flex justify-between">
                                <p>Entrega</p>
                                <p>R$ 3,50</p>
                            </div>
                            <div className="flex justify-between font-bold text-xl">
                                <p>Total</p>
                                <p>R$ {getTotal(3.50)} </p>
                            </div>
                                <button type='button' onClick={submitForm} className="bg-orange-300 text-white text-sm w-full  rounded-lg px-3 py-3">
                                    CONFIRMAR PEDIDO
                                </button>
                        </section>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Sepet;