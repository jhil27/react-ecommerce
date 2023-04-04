import {Routes,Route } from 'react-router-dom';
import './App.css';
import './components/catagory-container/catagory-container.component';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import SignIn from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import CheckOut from'./routes/check-out/check-out.component'
const App=() =>{
  return (<Routes>
    <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='sign-in' element={<SignIn />} />
        <Route path='check-out' element={<CheckOut />} />
      </Route>
  </Routes>)
 
}

export default App;
