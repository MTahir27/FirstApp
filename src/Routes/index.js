import React, {useState} from 'react';
import Home from '../Screens/Home';
import About from '../Screens/About';
import Contact from '../Screens/Contact';
import Login from '../Authentication/Login';
import Register from '../Authentication/Register';
import ForgetPassword from '../Authentication/ForgetPassword';

export default function Routes() {
  const [isAuthenticationed, setIsAuthenticated] = useState(false);
  return isAuthenticationed ? (
    <>
      <Home />
      <Contact />
      <About />
    </>
  ) : (
    <>
      <Login />
      <Register />
      <ForgetPassword />
    </>
  );
}
