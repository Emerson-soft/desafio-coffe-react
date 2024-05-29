import { MapPin } from "@phosphor-icons/react";
import { IllustrationSuccss } from "../IllustrationSuccss";
import { useStore } from "../../store/store";
import { PaymentMethod } from "../../enum/paymentMethod.enum";

export function Success() {
  const formDelivery = useStore((state) => state.formDelivery)

  const paymentMethod = PaymentMethod[formDelivery.paymentMethod as keyof typeof PaymentMethod]

  return (
    <div className="flex justify-between h-[100vh]">
      <div>
        <p className="text-yellow-dark font-baloo text-boloo-l font-extrabold">Uhu! Pedido confirmado</p>
        <p className="text-base-subtitle text-l">Agora é só aguardar que logo o café chegará até você</p>
        <div className="border-2 rounded-success border-purple-dark p-10 mt-10 flex flex-col gap-8">
          <div className='flex gap-3'>
            <div className="bg-purple rounded-full p-2 w-8 h-8">
              <MapPin weight="fill" className="text-base text-white" />
            </div>
            <p className="text-base-text text-m">Entrega em <span className="font-bold">{formDelivery.street}, {formDelivery.number}</span><br /> {formDelivery.neighborhood} - {formDelivery.city}, {formDelivery.state}</p>
          </div>

          <div className='flex gap-3'>
            <div className="bg-purple rounded-full p-2 w-8 h-8">
              <MapPin weight="fill" className="text-base text-white" />
            </div>
            <p className="text-base-text text-m">Previsão de entrega<br /><span className="font-bold">20 min - 30min</span></p>
          </div>

          <div className='flex gap-3'>
            <div className="bg-purple rounded-full p-2 w-8 h-8">
              <MapPin weight="fill" className="text-base text-white" />
            </div>
            <p className="text-base-text text-m">Pagamento na entrega<br /><span className="font-bold">{paymentMethod}</span></p>
          </div>
        </div>
      </div>

      <div>
        < IllustrationSuccss />
      </div>
    </div>
  )
}