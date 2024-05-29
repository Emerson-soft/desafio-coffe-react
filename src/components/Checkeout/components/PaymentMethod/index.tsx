import { Bank, CreditCard, CurrencyDollar, Money } from "@phosphor-icons/react";
import { useState } from "react";
import { useFormContext } from "react-hook-form";

const initialState = {
  credit: false,
  debit: false,
  money: false
}

type InitialState = typeof initialState
type IopctionsPayment = keyof typeof initialState

export function PaymentMethod() {

  const [select, setSelect] = useState<InitialState>(initialState)
  const { setValue } = useFormContext()
    
  function handleSelectedPaymentMethod(method: IopctionsPayment) {
    setSelect(() => {
      return {
        ...initialState,
        [method]: true
      }
    })

    setValue('paymentMethod', method)
  }

  return (
    <div className="bg-base-card rounded-md p-10">
      <div className="flex items-start gap-2">
        <CurrencyDollar className="w-[1.375rem] h-[1.375rem] text-purple" />
        <div>
          <span className="text-base">Pagamento</span>
          <p className="text-sm text-base-text">O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
        </div>
      </div>

      <div className="flex items-center gap-3 w-full mt-8">
        <button
          type="button"
          onClick={() => handleSelectedPaymentMethod('credit')}
          className="flex items-center bg-base-button rounded p-4 gap-3 w-full cursor-pointer hover:bg-base-hover transition-colors data-[selected=true]:border data-[selected=true]:border-purple data-[selected=true]:bg-purple-light"
          data-selected={select.credit}
        >
          <CreditCard className="text-purple w-4 h4" />
          <span className="text-base-text text-sm">CARTÃO DE CRÉDITO</span>
        </button>

        <button
          type="button"
          onClick={() => handleSelectedPaymentMethod('debit')}
          className="flex items-center bg-base-button rounded p-4 gap-3 w-full cursor-pointer hover:bg-base-hover transition-colors data-[selected=true]:border data-[selected=true]:border-purple data-[selected=true]:bg-purple-light"
          data-selected={select.debit}
        >
          <Bank className="text-purple w-4 h4" />
          <span className="text-base-text text-sm">CARTÃO DE DÉBITO</span>
        </button>

        <button
          type="button"
          onClick={() => handleSelectedPaymentMethod('money')}
          className="flex items-center bg-base-button rounded p-4 gap-3 w-full cursor-pointer hover:bg-base-hover transition-colors data-[selected=true]:border data-[selected=true]:border-purple data-[selected=true]:bg-purple-light"
          data-selected={select.money}
        >
          <Money className="text-purple w-4 h4" />
          <span className="text-base-text text-sm">DINHEIRO</span>
        </button>
      </div>
    </div>
  )
}