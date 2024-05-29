import { ComponentProps } from "react"
import classNames from 'classnames'

type InputRootProps = ComponentProps<'label'>

export function Root({className, ...props}:InputRootProps) {
  return <label className={classNames('', className)} {...props}/>  
}