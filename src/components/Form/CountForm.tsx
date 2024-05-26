import { Minus, Plus } from "@phosphor-icons/react";
import classNames from "classnames";
import { ComponentProps, useState } from "react";
import { useCountForm } from "../../context/CountForm";


type ICountForm = ComponentProps<'div'>

export function CountForm({ className, ...props }: ICountForm) {
  const { count, handleDecrement, handleIncrement } = useCountForm()


  return (
    <div className={classNames(className, 'bg-base-button py-2 px-[0.53125rem] flex items-center justify-around gap-4 rounded-md')} {...props}>
      <Minus onClick={handleDecrement} weight='bold' className='text-purple w-4 h-4 cursor-pointer hover:text-purple-dark' />
      <p className="block">{count}</p>
      <Plus onClick={handleIncrement} weight='bold' className='text-purple w-4 h-4 cursor-pointer hover:text-purple-dark' />
    </div>
  )
}