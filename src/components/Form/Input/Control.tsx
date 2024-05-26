import { ComponentProps } from "react"
import classNames from 'classnames'


type InputControlProps = ComponentProps<'input'>

export function Control({className, ...props}: InputControlProps) {
  return <input className={classNames('w-full text-base-text text-sm focus:outline-none bg-base-input', className)} {...props}/>
}