import { ComponentProps } from "react";
import classNames from "classnames";

type IBaseTextProps =ComponentProps<'span'>

export function BaseText({ className ,...props}: IBaseTextProps) {
  return <span  className={classNames(className, 'text-base-text text-m')} {...props} />
}