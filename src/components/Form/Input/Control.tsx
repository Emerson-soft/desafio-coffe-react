import { ComponentProps } from "react"
import classNames from 'classnames'
import { useFormContext } from "react-hook-form"

interface InputControlProps extends ComponentProps<'input'> {
  field: string
  isOpcional?: boolean
}

export function Control({className, field, isOpcional = false ,...props}: InputControlProps) {
  const { register, formState: { errors } } = useFormContext()
  return <div className="flex relative">
    <input data-error={errors[field] ? true : false}  className={classNames('block w-full p-3 bg-base-input border border-base-button rounded-[4px] text-s  placeholder-base-text focus:outline-none focus:border-yellow-dark data-[error=true]:border-pink-500 data-[error=true]:focus:border-pink-500', className)} {...register(field)} {...props} />    
    {isOpcional && <span className={classNames('text-base-label leading-[1.3] absolute top-3 right-3', className)}>Opcional</span>} 
  </div>
}