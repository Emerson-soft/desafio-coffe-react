import { Minus, Plus, Trash } from "@phosphor-icons/react";
import { ICheckout, useStore } from "../../../../store/store";
import { formatCurrency } from "../../../../utils/formatCurrency";

interface ICardCheckoutProps {
  checkoutProduct: ICheckout
}

export function CardCheckout({ checkoutProduct }: ICardCheckoutProps) {
  const { increment, decrement, removeCheckout } = useStore((state) => {
    return {
      increment: state.increment,
      decrement: state.decrement,
      removeCheckout: state.removeCheckout
    }
  })
  const total = checkoutProduct.price * checkoutProduct.quantity

  return (
    <div className="flex gap-5 pb-6 border-b items-start border-b-base-button">
      <img className="w-16 h-16" src={`/src/assets/${checkoutProduct.photo}.png`} alt="" />    
      <div className="flex flex-col">
        <h3 className="text-base-subtitle text-m mb-2">{checkoutProduct.title}</h3>
        <div className="flex gap-1 items-center">
          <div className='bg-base-button py-2 px-[0.53125rem] flex items-center justify-around gap-4 rounded-md'>
            <Minus onClick={() => decrement(checkoutProduct)} weight='bold' className='text-purple w-4 h-4 cursor-pointer hover:text-purple-dark' />
            <p className="block">{checkoutProduct.quantity}</p>
            <Plus onClick={() => increment(checkoutProduct)} weight='bold' className='text-purple w-4 h-4 cursor-pointer hover:text-purple-dark' />
          </div>

          <button className="bg-base-button p-2 flex items-center rounded-md gap-1 h-full">
            <Trash className="text-purple h-4 w-4" />
            <span onClick={() => removeCheckout(checkoutProduct.id)} className="text-base-text text-button-s">REMOVER</span>
          </button>
        </div>
      </div>
      <span className="text-base-text text-m font-bold">R$ {formatCurrency(total)} </span>
    </div>
  )
}