import { useState, useEffect } from 'react'
import { fecthProduct } from './data/products'
import { HashRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Layouts from './layout/layout/Layouts'
import Home from './pages/Home/Home'
import Todo from './pages/Todo/Todo'
import Product from './pages/Product/Products'
import Cart from './pages/Cart/Cart'
import Login from './pages/Login/Login'
import Calculator from './pages/Calculator/Calculator'
import Animate from './pages/Animate/Animate'
import Component from './pages/Component/Component'
import './App.css'

function App() {
  const [token, setToken] = useState('')
  const [role, setRole] = useState('')

  const [products, setProducts] = useState([])
  const [carts, setCarts] = useState([])

  useEffect(() =>
    setProducts(fecthProduct())
    , [])

  useEffect(() =>
    console.log(products)
    , [products])

  if (token === '') {
    return (<Login setToken={setToken}  setRole={setRole} />)
  }

  return (
    <div className='app-contrainer'>
      <HashRouter>
        <Routes>
          <Route element={<Layouts products={products} carts={carts} setToken={setToken} />}>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/calculator' element={<Calculator />} />
            <Route path='/animate' element={<Animate />} />
            <Route path='/component' element={<Component/>} />
            <Route path='/todo' element={<Todo />} />
            <Route path='/product' element={<Product products={products} carts={carts} setCarts={setCarts}/>} />
            <Route path='/cart' element={<Cart carts={carts} setCarts={setCarts}/>} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
