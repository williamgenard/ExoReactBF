import './App.css'
import Bonjour from './components/bonjour/Bonjour'
import Counter from './components/counter/Counter'
import ProductList from './components/product-list/ProductList'

function App() {

  const products = [
    {
      id: 1,
      name: "Pomme",
      price: 1,
      promo: true
    },
    {
      id: 2,
      name: "Poire",
      price: 1.2,
      promo: false
    },
    {
      id: 3,
      name: "Cerise",
      price: 1.5,
      promo: false
    },
  ]

  return (
    <>
      {/* <Bonjour name="William" age={29} />
      <Bonjour name="William" /> */}
      {/* <ProductList products={products}/> */}
      <Counter/>
      <Counter incr={5}/>
    </>
  )
}

export default App
