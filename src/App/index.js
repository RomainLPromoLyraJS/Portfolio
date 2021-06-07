// == Package imports
import React from 'react';
import { Route } from 'react-router-dom';

// == Local imports
// Components
import Header from '../Header';
import Home from '../Home';
import Resume from '../Resume';
import Projects from '../Projects';
import Footer from '../Footer';

const App = () => {
  return (
    <div className="App">
    
      <Header />

      <Route exact path='/'>
      <Home />
      </Route>
      <Route exact path='/resume'>
        <Resume />
      </Route>
      <Route exact path='/projects'>
        <Projects />
      </Route>
      <Footer />

    </div>
  );
}

export default App;
