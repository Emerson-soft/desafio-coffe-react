import { Coffee, Package, ShoppingCartSimple, Timer } from "@phosphor-icons/react";
import { BannerImg } from "../BanneImg";

export function Banner() {
  return (
    <div className="flex items-start justify-between gap-14">
      <div className="">
        <p className="font-extrabold text-xl mb-4 font-baloo">Encontre o café perfeito para qualquer hora do dia</p>
        <p className="text-base-subtitle text-[1.25rem] leading-[130%]">Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
        <div className="grid grid-cols-2 gap-5 mt-16">
          <div className="flex items-center gap-3">
            <div className="bg-yellow-dark flex items-center justify-center rounded-full w-8 h-8">
              <ShoppingCartSimple weight="fill" className="text-white"/>
            </div>
            <p className="text-base-text text-[1rem] leading-[130%]" >Compra simples e segura</p>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-base-text flex items-center justify-center rounded-full w-8 h-8">
              <Package weight="fill" className="text-white"/>
            </div>
            <p className="text-base-text text-[1rem] leading-[130%]" >Embalagem mantém o café intacto</p>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-yellow flex items-center justify-center rounded-full w-8 h-8">
              <Timer weight="fill" className="text-white"/>
            </div>
            <p className="text-base-text text-[1rem] leading-[130%]" >Entrega rápida e rastreada</p>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-purple flex items-center justify-center rounded-full w-8 h-8">
              <Coffee weight="fill" className="text-white"/>
            </div>
            <p className="text-base-text text-[1rem] leading-[130%]" >O café chega fresquinho até você</p>
          </div>
        </div>
      </div>
      <div>
        <BannerImg />
      </div>
    </div>
  )
}