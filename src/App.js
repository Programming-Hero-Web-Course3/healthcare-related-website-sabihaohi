import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Header from './componanats/Header/Header';
import Home from './componanats/Home/Home';
import Aboutus from './componanats/AboutUs/Aboutus';
import Classes from './componanats/Classes/Classes';
import Appointment from './componanats/Appoinment/Appointment';
import Blog from './componanats/Blog/Blog';
import NotFound from './componanats/NotFound/NotFound';
import Login from './componanats/Login/Login';
import SignUp from './componanats/SignUp/Signup';
import Footer from './componanats/Footer/Footer';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './componanats/PrivateRoute/PrivateRoute';
import Service from './componanats/Service/Service';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/home">
              <Home></Home>
            </Route>

            <Route path="/classes">
              <Classes></Classes>
            </Route>

            <PrivateRoute path="/appointment">
              <Appointment></Appointment>
            </PrivateRoute>

            <PrivateRoute path="/blog">
              <Blog></Blog>
            </PrivateRoute>

            <Route path="/aboutus">
              <Aboutus></Aboutus>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="/signup">
              <SignUp></SignUp>
            </Route>

            <Route path="/service/:serviceId">
              <Service></Service>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>
          <Footer></Footer>
        </Router>

      </AuthProvider>
    </div>
  );
}

export default App;
