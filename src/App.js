import './App.css';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/homepage/homepage.component';
import Services from './pages/services/services.component';
import Header from './components/header/header.component';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/servicios' component={Services} />
      </Switch>
    </>
  );
}

export default App;
