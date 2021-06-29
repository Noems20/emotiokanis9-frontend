import './App.scss';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
import Services from './pages/services/services.component';
import About from './pages/about/about.component';
import Contact from './pages/contact/contact.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Footer from './components/footer/footer.component';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/servicios' component={Services} />
        <Route exact path='/nosotros' component={About} />
        <Route exact path='/contacto' component={Contact} />
        <Route exact path='/login' component={SignInAndSignUpPage} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
