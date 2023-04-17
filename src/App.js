import {Routes,Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {onAuthStateChangedListener,getUserDetailsFromAuth} from './utils/firebase/firebase.utils';
import {setCurrentUser} from './store/user/user.action'
import './App.css';
import './components/catagory-container/catagory-container.component';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import SignIn from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import CheckOut from'./routes/check-out/check-out.component'
const App=() =>{
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      console.log(user)
      if (user) {
        getUserDetailsFromAuth(user);
      }

      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, [dispatch]);
  
  return (<Routes>
    <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='sign-in' element={<SignIn />} />
        <Route path='check-out' element={<CheckOut />} />
      </Route>
  </Routes>)
 
}

export default App;
