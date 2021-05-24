import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Home from './components/Home';
import Mercury from './components/planets/Mercury';
import Venus from './components/planets/Venus';
import Earth from './components/planets/Earth';
import Mars from './components/planets/Mars';
import Jupiter from './components/planets/Jupiter';
import Saturn from './components/planets/Saturn';
import Uranus from './components/planets/Uranus';
import Neptune from './components/planets/Neptune';
import Pluto from './components/planets/Pluto';

import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* <Route exact path='/'>
            <Home />
          </Route> */}
          <Route path='/mercury'>
            <Mercury />
          </Route>
          <Route path='/venus'>
            <Venus />
          </Route>
          <Route exact path='/'>
            <Earth />
          </Route>
          <Route path='/mars'>
            <Mars />
          </Route>
          <Route path='/jupiter'>
            <Jupiter />
          </Route>
          <Route path='/saturn'>
            <Saturn />
          </Route>
          <Route path='/uranus'>
            <Uranus />
          </Route>
          <Route path='/neptune'>
            <Neptune />
          </Route>
          <Route path='/pluto'>
            <Pluto />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
