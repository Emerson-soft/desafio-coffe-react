import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react";
import {  IProduct, useStore } from "../../store/store";
import { Tag } from "./components/Tag";
import { useState } from "react";
import { formatCurrency } from "../../utils/formatCurrency";

interface CardProps {
  product: IProduct
}

export function Card({ product }: CardProps) {
  const [count, setCount] = useState(1)

  const addChekout = useStore((state) => state.addCheckout)


  function handleAddCheckout() {
    addChekout({ ...product }, count)    
  }


  function handleDecrement() {
    setCount((state) => {
      if (state < 1) {
        return state
      } else {
        return 1
      }
    })
  }

  function handleIncrement() {
    setCount((state) => state + 1)
  }


  return (
    <div className='flex flex-col bg-base-card rounded-card items-center gap-3 px-5 pb-5'>
      <img className="-mt-6 w-28 h-28" src={`/src/assets/${product.photo}.png`} alt="" />
      <div className="flex gap-1">
        {product.tags.map((tag) => (
          < Tag key={tag} title={tag.toUpperCase()} />
        ))}
      </div>
      <div className='flex flex-col items-center'>
        <span className='text-base-subtitle text-s font-baloo font-bold'>{product.title}</span>
        <p className='text-base-label text-center text-sm/130'>{product.description}</p>
      </div>
      <div className='flex items-center justify-center gap-4 w-full'>
        <span className='text-base-text text-sm leading-[130%]'>R$ <span className='text-base-text text-m font-extrabold'>{formatCurrency(product.price)}</span></span>
        <div className='bg-base-button py-2 px-[0.53125rem] flex items-center justify-around gap-4 rounded-md'>
          <Minus onClick={handleDecrement} weight='bold' className='text-purple w-4 h-4 cursor-pointer hover:text-purple-dark' />
          <p className="block">{count}</p>
          <Plus onClick={handleIncrement} weight='bold' className='text-purple w-4 h-4 cursor-pointer hover:text-purple-dark' />
        </div>
        <div onClick={() => handleAddCheckout()} className='bg-purple-dark w-9 h-9 rounded-md flex items-center justify-center gap-1 hover:bg-purple cursor-pointer transition-colors'>
          <ShoppingCart weight='fill' className='text-white w-[1.375rem] h-[1.375rem] ' />
        </div>
      </div>
    </div>
  )
}