import * as Input from '../../../Form/Input'

export function FormCheckout() {
  return (
    <form className="mt-8 space-y-4">
      <Input.Root className="flex w-52">
        <Input.Control placeholder="CEP" />
      </Input.Root>

      <Input.Root>
        <Input.Control placeholder="Rua" />
      </Input.Root>

      <div className="flex gap-3">
        <Input.Root>
          <Input.Control placeholder="Número" />
        </Input.Root>
        <Input.Root className="w-full flex">
          <Input.Control placeholder="Complemento" />
          <Input.IndicatorOpctional />
        </Input.Root>
      </div>

      <div className="flex gap-3">
        <Input.Root className="w-full">
          <Input.Control placeholder="Bairro" />
        </Input.Root>
        <Input.Root className="w-full flex">
          <Input.Control placeholder="Cidade" />
        </Input.Root>

        <Input.Root className="flex">
          <Input.Control placeholder="UF" />
        </Input.Root>
      </div>

    </form>
  )
}