import { ReactNode, createContext, useContext, useState } from "react";

interface ICountFormContext {
  count: number
  handleDecrement: () => void
  handleIncrement: () => void
}

interface ICountFormProps {
  children: ReactNode
}

const CountForm = createContext<ICountFormContext>({} as ICountFormContext)

export function CountFormProvider({ children }: ICountFormProps) {
  const [count, setCount] = useState(1)

  function handleDecrement() {
    setCount((state) => {
      if (state < 1) {
        return state
      } else {
        return 1
      }
    })
  }

  function handleIncrement() {
    setCount((state) => state + 1)
  }

  return (
    <CountForm.Provider value={{ count, handleDecrement, handleIncrement }}>
      {children}
    </CountForm.Provider>
  )
}

export function useCountForm() {
  return useContext(CountForm)
}