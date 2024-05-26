import { ComponentProps } from "react"
import classNames from 'classnames'

type InputRootProps = ComponentProps<'div'>

export function Root({className, ...props}:InputRootProps) {
  return <div className={classNames('p-3 rounded text-red-100 border border-base-button bg-base-input', className)} {...props}/>  
}