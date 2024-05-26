import { MapPinLine } from "@phosphor-icons/react";

import { BaseText } from "../BaseText";
import { CardCheckout } from "./components/CardCheckout";
import { PaymentMethod } from "./components/PaymentMethod";
import { FormCheckout } from "./components/FormCheckout";
import { useStore } from "../../store/store";
import { formatCurrency } from "../../utils/formatCurrency";

export function Checkout() {
  const { taxDelivery, total, totalItems, checkouts } = useStore((state) => {
    return {
      total: state.total,
      taxDelivery: state.taxDelivery,
      totalItems: state.totalItems,
      checkouts: state.checkouts
    }
  })

  return <div className="grid grid-cols-checkout gap-8">
    <div>
      <h2 className="text-[1.124rem]/1.3 text-base-title font-baloo font-bold mb-4">Complete seu pedido</h2>
      <div className="bg-base-card rounded-md p-10 mb-3">
        <header className="flex items-start gap-2">
          <MapPinLine className="w-6 h-6 text-yellow-dark" />
          <div>
            <p className="text-base-subtitle text-base">Endereço de Entrega</p>
            <p className="text-base-text text-sm leading-[130%]">Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </header>

       < FormCheckout />
      </div>

      <PaymentMethod />
    </div>
    <div>
      <h2 className="text-[1.124rem]/1.3 font-baloo font-bold text-base-subtitle">Cafés selecionados</h2>
      <div className="bg-base-card rounded-card-checkout p-10 mt-3 flex flex-col gap-6">
        {checkouts.map((checkout) => {
          return <CardCheckout key={checkout.id} checkoutProduct={checkout}/>
        })}        

        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-2 place-content-between gap-3 ">
            <span className="text-s text-base-text">Total de  itens</span>
            <BaseText className="flex justify-end">R$ {formatCurrency(totalItems)}</BaseText>
            <span className="text-s text-base-text">Entrega</span>
            <span className="flex justify-end text-base-text text-m">R$ {formatCurrency(taxDelivery)}</span>
            <span className="text-l font-bold">Total</span>
            <span className="flex justify-end text-l font-bold">R$ {formatCurrency(total)}</span>
          </div>
          <button type="button" className="w-full bg-yellow text-white rounded-md py-3 text-button-g font-bold">CONFIRMAR PEDIDO</button>
        </div>
      </div>
    </div>
  </div>
}