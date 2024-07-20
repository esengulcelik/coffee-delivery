import Image from "next/image";
import React from "react";
import { RiDeleteBin5Line } from "react-icons/ri";

export default (props) => {
    const {decrementValue, incrementValue, coffee, index, deleteAll} = props;
    return (
        <div key={`item${index}`} className="flex  items-center gap-5">

            <div key={`itemHead${index}`} className="flex gap-4 items-center">
                <Image src="/images/tradicional.png" width={60} height={60} className="" alt="Coffee Image" />
                <div key={`itemSub${index}`}>
                    <p className="whitespace-nowrap">{coffee.name}</p>
                    <div key={`itemSubSub${index}`} className="flex gap-2">
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
            <p className="font-bold whitespace-nowrap ">{(coffee.price * coffee.count).toFixed(2)}</p>
        </div>
    );
}