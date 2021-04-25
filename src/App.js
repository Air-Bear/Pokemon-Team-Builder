import './App.css';
import { GlobalStyles } from "./theme/GlobalStyle";
import { Switch, Route } from 'react-router-dom';
import Landing from "./components/pages/Landing";
import PokeSearch from './components/pages/PokeSearch';


function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Switch>
        <Route path="/search">
          <PokeSearch />
        </Route>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
