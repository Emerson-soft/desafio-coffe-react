import { MapPin } from "@phosphor-icons/react";
import classNames from "classnames";
import { ComponentProps } from "react";

type ICardDeliveryProps = ComponentProps<'div'>

export function CardDelivery({ className, children ,...props }: ICardDeliveryProps) {
  return (
    <div className={classNames(className, 'flex gap-3')}  {...props}>
      <div className="bg-purple rounded-full p-2 w-8 h-8">
        <MapPin weight="fill" className="text-base text-white" />
      </div>
      {children}
    </div>
  )
}