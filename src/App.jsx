import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import CategoryPage from "./components/Pages/CategoryPage"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProductDisplay from "./components/ProductDisplay/ProductDisplay"
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/men' element={<CategoryPage category="men" />} />
          <Route path='/women' element={<CategoryPage category="women" />} />
          <Route path='/kids' element={<CategoryPage category="kid" />} />
          <Route path='/productDisplay/:id' element={<ProductDisplay />} />
          {/* <Route path='/login-signup' element={<LoginSignup />} />
      <Route path='/cart' element={<Cart />} />  */}

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
