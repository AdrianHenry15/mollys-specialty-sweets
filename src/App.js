import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import BurgerMenu from './components/BurgerMenu'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Cakes from './pages/Cakes'
import Cookies from './pages/Cookies'
import Cupcakes from './pages/Cupcakes'
// import Contact from './pages/Contact'
// import CreateACake from './pages/CreateACake'
// import FAQs from './pages/FAQs'
// import SignatureSweets from './pages/Signature'
// import ThemeSweets from './pages/Theme'
// import Weddings from './pages/Weddings'
import PageNotFound from './pages/PageNotFound'
import './App.scss'
import Footer from './components/Footer'


const App = () => {

  return (
    <Router>
      <div className='app-container'>
        <Navbar />
        {/* <BurgerMenu /> */}
        <div className='app-content-container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cakes' element={<Cakes />} />
            <Route path='/cookies' element={<Cookies />} />
            <Route path='/cupcakes' element={<Cupcakes />} />
            {/* <Route path='/contact' element={<Contact />} /> */}
            {/* <Route path='/create' element={<CreateACake />} />
            <Route path='/signatures' element={<SignatureSweets />} />
            <Route path='/themes' element={<ThemeSweets />} />
            <Route path='/weddings' element={<Weddings />} />
            <Route path='/faqs' element={<FAQs />} /> */}
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App