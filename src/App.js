import './App.css';
import { GlobalStyles } from "./theme/GlobalStyle";
import { Switch, Route } from 'react-router-dom';
import Landing from "./components/pages/Landing";


function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Switch>
        
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
