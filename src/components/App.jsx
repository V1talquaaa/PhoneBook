
import Container from 'ui/Container';
import { Navigation } from './Navigation/Navigation';
import { Route, Routes } from 'react-router-dom';
import { Register } from '../screens/Register/Register';
import { Login } from '../screens/Login/Login';
import { Contacts } from '../screens/Contacts/Contacts';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useGetCurrentUserQuery } from 'redux/auth';
import { Home } from 'screens/Home/Home';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const App = () => {

  const isToken = useSelector(state => state.auth.token)
  const data  = useGetCurrentUserQuery();

  useEffect(() => {
  if(isToken) {
    console.log(data);
    console.log(isToken);
  }
 
  }, [data, isToken])
  
  return (
      <Container>
      <Navigation />
      <Routes>

        <Route element={<PublicRoute />}>
        <Route path='/' element={<Home />} />
        </Route>
       

        <Route element={<PrivateRoute redirectTo="/login"/>}>
          <Route path='/contacts' element={<Contacts />} /> 
        </Route>
        
        <Route element={<PublicRoute redirectTo="/" restricted/>}>
        <Route path='/register' element={<Register />}/>
        <Route path='/login' element={<Login />} />
        </Route>

      </Routes>

      </Container>
    
  );
};
