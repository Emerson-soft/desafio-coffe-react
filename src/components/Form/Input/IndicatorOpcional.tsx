import { ComponentProps } from "react"
import classNames from 'classnames'

type IndicatorOpctionalProps = ComponentProps<'span'>

export function IndicatorOpctional ({className, ...props}: IndicatorOpctionalProps) {
  return <span className={classNames('text-base-label leading-[1.3]', className)} {...props}>Opcional</span>
}