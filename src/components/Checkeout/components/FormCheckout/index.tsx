import { ComponentProps } from 'react'
import * as Input from '../../../Form/Input'

type IFormCheckout = ComponentProps<'form'>

export function FormCheckout({ ...props }: IFormCheckout) { 
  
  return (
    <form className="mt-8 space-y-4" id='delivery' {...props}>

      <Input.Root className="flex flex-col gap-1 w-52">
        <Input.Control field='cep' placeholder="CEP" />
        <Input.ErrorMessage field='cep' />
      </Input.Root>

      <Input.Root className='flex flex-col'>
        <Input.Control field='street' placeholder="Rua" />
        <Input.ErrorMessage field='street' />
      </Input.Root>

      <div className="flex gap-3">
        <Input.Root>
          <Input.Control placeholder="Número" field='number' />
          <Input.ErrorMessage field='number' />
        </Input.Root>
        <Input.Root className="w-full">
          <Input.Control placeholder="Complemento" field='complement' isOpcional/>
          <Input.ErrorMessage field='complement' />          
        </Input.Root>
      </div>

      <div className="flex gap-3">
        <Input.Root className="w-full">
          <Input.Control field='neighborhood' placeholder="Bairro" />
          <Input.ErrorMessage field='neighborhood' />
        </Input.Root>
        <Input.Root className="w-full">
          <Input.Control placeholder="Cidade" field='city' />
          <Input.ErrorMessage field='city' />
        </Input.Root>

        <Input.Root>
          <Input.Control placeholder="UF" field='state' />
          <Input.ErrorMessage field='state' />
        </Input.Root>
      </div>

    </form>
  )
}