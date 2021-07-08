import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
import Services from './pages/services/services.component';
import About from './pages/about/about.component';
import Contact from './pages/contact/contact.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Footer from './components/footer/footer.component';
import ScrollToTop from './components/scroll-to-top/scroll-to-top';
import BackToTop from './components/scroll-to-top/back-to-top.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import './App.scss';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  // console.log(currentUser);
  return (
    <>
      <Header currentUser={currentUser} />
      <ScrollToTop />
      <BackToTop />
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
