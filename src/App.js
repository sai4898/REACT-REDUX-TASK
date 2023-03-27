import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter ,Route,Routes,} from 'react-router-dom';
import Header from './components/Header';
import Card from './components/Card';
import CardsDetails from './components/CardsDetails';
import Cart from './components/Cart';
import Placeorder from './components/PlaceOrder';

const App = () => {
  return (
   <>
   <BrowserRouter>
   <Header />
   <Routes>
    <Route path='/' exact element={<Card />} />
    <Route path='/cards/:id' element={<CardsDetails />} />
    <Route path='/cart' element={<Cart />} />
    
   <Route path='/placeorder' element={<Placeorder />} />
  
   </Routes>

   </BrowserRouter>
   
   </>
  )
}

export default App