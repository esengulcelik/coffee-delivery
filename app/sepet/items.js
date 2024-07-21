import Image from "next/image";
import React from "react";
import { RiDeleteBin5Line } from "react-icons/ri";

export default (props) => {
    const {decrementValue, incrementValue, coffee, index, deleteAll} = props;
    return (
        <div key={`item${index}`} className="flex xl:flex-row flex-col  items-center gap-2">

            <div key={`itemHead${index}`} className="flex  gap-2  items-center">
                <Image src={coffee.image} width={60} height={60} className="" alt="Coffee Image" />
                <div key={`itemSub${index}`}>
                    <p className="whitespace-nowrap xl:text-lg text-sm">{coffee.name}</p>
                    <div key={`itemSubSub${index}`} className="flex gap-2">
                        <div className="bg-custom-card rounded-xl px-2 py-2 gap-2 flex ">
                            <button onClick={() => decrementValue(index)} className="text-purple-800">-</button>
                            <span className="">{coffee.count}</span>
                            <button onClick={() => incrementValue(index)} className="text-purple-800">+</button>
                        </div>
                        <button onClick={() => deleteAll(index)} className="bg-custom-card items-center flex text-black xl:text-sm text-xs   rounded-lg xl:px-3 xl:py-3 px-1 py-1">
                            <RiDeleteBin5Line className="text-purple-600 " />  REMOVER
                        </button>
                    </div>
                </div>
            </div>
            <div className="items-center mt-2">
            <p className="font-bold xl:ml-0 ml-36 whitespace-nowrap xl:text-lg text-sm ">R$ {(coffee.price * coffee.count).toFixed(2)}</p>
            </div>
        </div>
    );
}