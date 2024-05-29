import { MapPinLine } from "@phosphor-icons/react";

import { BaseText } from "../BaseText";
import { CardCheckout } from "./components/CardCheckout";
import { PaymentMethod } from "./components/PaymentMethod";
import { FormCheckout } from "./components/FormCheckout";
import { useStore } from "../../store/store";
import { formatCurrency } from "../../utils/formatCurrency";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from "react-router-dom";

const schemaDelivery = z.object({
  cep: z.string().min(8, { message: 'CEP inválido' }),
  street: z.string().min(3, { message: 'Rua inválida' }),
  number: z.string().min(1, { message: 'Número inválido' }),
  complement: z.string().optional(),
  neighborhood: z.string().min(3, { message: 'Bairro inválido' }),
  city: z.string().min(3, { message: 'Cidade inválida' }),
  state: z.string().min(2, { message: 'UF inválido' }),
  paymentMethod: z.string().min(1, { message: 'Forma de pagamento inválida' }),
})

type FormDelivery = z.infer<typeof schemaDelivery>

export function Checkout() {
  const { taxDelivery, total, totalItems, checkouts, updateFormDelivery } = useStore((state) => {
    return {
      total: state.total,
      taxDelivery: state.taxDelivery,
      totalItems: state.totalItems,
      checkouts: state.checkouts,
      updateFormDelivery: state.updateFormDelivery,
      resetFormDelivery: state.resetFormDelivery, 
    }
  })

  const { resetCheckout } = useStore((state) => {
    return {
      resetCheckout: state.resetCheckout     
    }
  })

  const navigate = useNavigate();

  const formDelivery = useForm<FormDelivery>({
    resolver: zodResolver(schemaDelivery)
  })

  const { handleSubmit } = formDelivery

  function onSubmitDelivery(data: FormDelivery) {
    updateFormDelivery(data)    
    navigate('/success')
    resetCheckout()
  }

  return <div className="grid grid-cols-checkout gap-8 h-[100vh]">
    <FormProvider {...formDelivery}>
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

          < FormCheckout onSubmit={handleSubmit(onSubmitDelivery)} />
        </div>

        <PaymentMethod />
      </div>
      <div>
        <h2 className="text-[1.124rem]/1.3 font-baloo font-bold text-base-subtitle">Cafés selecionados</h2>
        <div className="bg-base-card rounded-card-checkout p-10 mt-3 flex flex-col gap-6">
          {checkouts.map((checkout) => {
            return <CardCheckout key={checkout.id} checkoutProduct={checkout} />
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
            <button type="submit" form="delivery" className="w-full bg-yellow text-white rounded-md py-3 text-button-g font-bold">CONFIRMAR PEDIDO</button>
          </div>
        </div>
      </div>
    </FormProvider>
  </div>
}