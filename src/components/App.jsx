
import Container from 'ui/Container';
import { Navigation } from './Navigation/Navigation';
import { Route, Routes } from 'react-router-dom';
import { Register } from '../screens/Register/Register';
import { Login } from '../screens/Login/Login';
import { Phonebook } from '../screens/Phonebook/Phonebook';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useGetCurrentUserQuery } from 'redux/auth';

export const App = () => {

  const isToken = useSelector(state => state.auth.token)
  const { data: isCurrentUser } = useGetCurrentUserQuery();

  useEffect(() => {
  if(isToken) {
    
  }
 
  }, [])
  

  return (
      <Container>
      <Navigation />
      <Routes>
        {isCurrentUser? <Route path='/' element={<Phonebook />} /> : null}
        <Route path='/register' element={<Register />}/>
        <Route path='/login' element={<Login />} />
      </Routes>

      </Container>
    
  );
};
