import { useEffect } from "react";
import { useStore } from "../../store/store";
import { Banner } from "../Banner";
import { Card } from "../Card";
import { CountFormProvider } from "../../context/CountForm";
import { Toast } from "../Toast";

export function Home() {
  const { loadProducts, products } = useStore((state) => {
    return {
      products: state.product,
      loadProducts: state.loadProducts
    }
  })

  useEffect(() => {
    loadProducts()
  }, [])


  return (
    <>
      <Banner />
      <main>
        <h2 className='text-base-text text-l font-extrabold font-baloo'>Nossos cafés</h2>         
        <div className='grid grid-cols-4 mt-9 gap-10 mb-5'>
          {products?.map((product) => (
            <CountFormProvider key={product.id}>
              <Card  product={product} />
            </CountFormProvider>
          ))}
        </div>
      </main>
    </>
  )
}