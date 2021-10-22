import logo from './logo.svg';
import './App.css';
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import TeleOnlineFAQ from './Components/TeleOnlineFAQ/TeleOnlineFAQ';
import Header from './Components/Header/Header';
import Specialist from './Components/Specialist/Specialist';
import Careers from './Components/Careers/Careers';
import Footer from './Components/Footer/Footer';
import Login from './Pages/Login';
import AuthProvider from './Context/AuthProvider';
import Register from './Pages/Register';
import Services from './Components/Services/Services';
import NotFound from './Components/NotFound/NotFound';
import { BrowserRouter ,Switch , Route} from 'react-router-dom';
import Details from './Pages/Details';
import PrivateRoute from './PrivateRoute/PrivateRoute';



function App() {
  return (
    <div className="App">
        <AuthProvider>
           <BrowserRouter>
               <Header></Header>
                  <Switch>
                     <Route exact path="/">
                        <Home></Home>
                    </Route>
                   <Route  path="/home">
                      <Home></Home>
                  </Route>
                  <Route  path="/about">
                     <About></About>
                  </Route>
                  <PrivateRoute exact path="/services">
                      <Services></Services>
                   </PrivateRoute>
                  <Route  path="/teleOnlineFAQ">
                       <TeleOnlineFAQ></TeleOnlineFAQ>
                  </Route>
                  <Route exact path="/specialist">
                      <Specialist></Specialist>
                   </Route>
                   <PrivateRoute  path="/Careers">
                       <Careers></Careers>
                    </PrivateRoute>
                  <Route exact path="/register">
                       <Register></Register>
                  </Route>
                  <Route  path="/login">
                    <Login></Login>
                  </Route>
                  <PrivateRoute path ="/specialist/:id">
                    <Details></Details>
                    </PrivateRoute>
                  <Route  path="*">
                      <NotFound></NotFound>
                    </Route>
              </Switch>
             <Footer></Footer>
        </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;
