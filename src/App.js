import Home from './routes/home/home.component'
import Shop from './routes/shop/shop.component'
import Navigation from './routes/navigation/navigation.component'
import SignIn from './routes/sign-in/sign-in.component'
import Checkout from './routes/checkout/checkout.component'
import { Routes , Route } from 'react-router-dom'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation/>}>
        <Route index element={<Home />}/>
        <Route path='shop' element={<Shop />}/>
        <Route path='sign-in' element={<SignIn />}/>
        <Route path='checkout' element={<Checkout />}/>
      </Route>
    </Routes>
  )
}

export default App;
