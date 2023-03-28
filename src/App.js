import {Routes,Route } from 'react-router-dom';
import './App.css';
import './components/catagory-container/catagory-container.component';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import SignIn from './routes/authentication/authentication.component';

const Shop = () => {
  return <h1>I am the shop page</h1>;
};
const App=() =>{
  return (<Routes>
    <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='sign-in' element={<SignIn />} />
      </Route>
  </Routes>)
 
}

export default App;