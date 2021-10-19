import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Contacts from './Components/Contacts/Contacts';
import Register from './Components/Contacts/Register/Register';
import Dantist from './Components/Dantist/Dantist';
import DentistsDetails from './Components/DantistsDetails/DentistsDetails';
import Error from './Components/Error/Error';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Services from './Components/Services/Services';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route path="/contacts">
              <Contacts></Contacts>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/dentists">
              <Dantist></Dantist>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/services">
              <Services></Services>
            </PrivateRoute>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/dentistsdetails/:id">
              <DentistsDetails></DentistsDetails>
            </Route>
            <Route path="*">
              <Home></Home>
            </Route>
            <Route exact path="/">
              <Error></Error>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
