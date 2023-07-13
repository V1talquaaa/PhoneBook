
import Container from 'ui/Container';
import { Navigation } from './Navigation/Navigation';
import { Route, Routes } from 'react-router-dom';
import { Register } from '../screens/Register/Register';
import { Login } from '../screens/Login/Login';
import { Phonebook } from '../screens/Phonebook/Phonebook';
import { useGetCurrentUserQuery } from 'redux/auth';

export const App = () => {
  const {data: isAuthorized} = useGetCurrentUserQuery();
  console.log(isAuthorized);
  
  return (
      <Container>
      <Navigation />
      <Routes>
        <Route path='/' element={<Phonebook />} />
        <Route path='/register' element={<Register />}/>
        <Route path='/login' element={<Login />} />
      </Routes>

      </Container>
    
  );
};
