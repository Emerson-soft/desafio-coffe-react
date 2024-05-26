
import { MapPin, ShoppingCartSimple } from "@phosphor-icons/react";
import { LogoCoffe } from "../Logo";
import { Link } from "react-router-dom";
import { useStore } from "../../store/store";

export function Header() {
  const checkouts = useStore((state) => state.checkouts)

  const total = checkouts.length

  return (
    <header className="flex items-center justify-between py-8 mb-24">
      <Link to={'/'}><LogoCoffe className="h-10 w-20" /></Link>
      <div className="flex items-center gap-3">
        <div className="bg-purple-light p-2 rounded-md flex items-center justify-center gap-1">
          <MapPin weight="fill" className="text-purple w-5 h-5" />
          <span className="text-purple-dark">Porto Alegre, RS</span>
        </div>
        {total > 0 ? (
          <Link to={'checkout'}><div data-total={total} className="bg-yellow-light p-2 after:bg-yellow-dark after:text-white after:text-s after:font-bold after:h-5 after:w-5 rounded-md after:content-[attr(data-total)] after:absolute relative after:-top-2 after:-right-2 after:rounded-full after:flex after:items-center after:justify-center" >
            <ShoppingCartSimple weight="fill" className="text-yellow-dark h-6 w-6" />
          </div>
          </Link>
        ) : (
          <Link to={'checkout'}><div className="bg-yellow-light p-2 rounded-md" >
            <ShoppingCartSimple weight="fill" className="text-yellow-dark h-6 w-6" />
          </div>
          </Link>
        )}
      </div>
    </header>
  )
}