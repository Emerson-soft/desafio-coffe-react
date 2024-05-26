import { create } from 'zustand'
import { getProductsApi } from '../api/products'

export interface IProduct {
  id: string
  tags: string[]
  title: string
  description: string
  price: number
  photo: string
}

export interface ICheckout extends IProduct {
  quantity: number
}

interface IStore {
  product: IProduct[] | null
  checkouts: ICheckout[]
  isLoading: boolean
  total: number
  taxDelivery: number
  totalItems: number
  loadProducts: () => Promise<void>
  addCheckout: (product: IProduct, quantity: number) => void
  updateTotal: () => void
  increment: (checkout: ICheckout) => void
  decrement: (checkout: ICheckout) => void
  removeCheckout: (id: string) => void
}

export const useStore = create<IStore>((set, get) => ({
  product: null,
  checkouts: [],
  isLoading: false,
  taxDelivery: 3.5,
  total: 0,
  totalItems: 0,

  loadProducts: async () => {
    const { data } = await getProductsApi()
    set({ product: data })
  },
  addCheckout: (product: IProduct, quantity: number) => {

    const { checkouts, updateTotal } = get()
    const checkoutFind = checkouts?.find((checkout) => checkout.id === product.id)

    if (checkoutFind) {
      const index = checkouts.findIndex((checkout) => checkout.id === product.id)
      checkouts[index].quantity = checkouts[index].quantity + quantity

      set({ checkouts: [...checkouts] })
      updateTotal()
      return
    }

    checkouts.push({ ...product, quantity })
    set({ checkouts: [...checkouts] })
    updateTotal()
  },

  updateTotal: () => {
    const { checkouts, taxDelivery } = get()
    const total = checkouts.reduce((acc, current) => {
      const total = acc + current.price * current.quantity
      return total
    }, 0)
    set({ total: total + taxDelivery, totalItems: total })
  },

  increment: (checkout: ICheckout) => {

    const { checkouts, updateTotal } = get()
    const index = checkouts.findIndex((item) => item.id === checkout.id)
    checkouts[index].quantity += 1
    set({
      checkouts: [...checkouts]
    })
    updateTotal()
  },

  decrement: (checkout: ICheckout) => {

    const { checkouts, updateTotal } = get()
    const index = checkouts.findIndex((item) => item.id === checkout.id)

    if (checkouts[index].quantity === 1) {
      const newCheckout = checkouts.filter((item) => item.id !== checkout.id)
      set({
        checkouts: [...newCheckout]
      })
      updateTotal()
      return
    }

    checkouts[index].quantity -= 1
    set({
      checkouts: [...checkouts]
    })
    updateTotal()
  },

  removeCheckout: (id: string) => {
    const { checkouts, updateTotal } = get()
    const newCheckout = checkouts.filter((checkout) => checkout.id !== id)
    set({
      checkouts: [...newCheckout]
    })
    updateTotal()
  }
}))