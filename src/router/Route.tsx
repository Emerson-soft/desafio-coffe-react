import { Route, Routes } from "react-router-dom"
import { Main } from "../layout/Main"
import { Home } from "../components/Home/Index"
import { Checkout } from "../components/Checkeout/Index"
import { Success } from "../components/Success/Index"

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
      </Route>
    </Routes>
  )
}