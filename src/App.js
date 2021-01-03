import './App.css';
import { Switch, Route } from 'react-router-dom';
import GlobalStyle from "./theme/GlobalStyle";
import LandingPage from "./components/LandingPage.js";
import Register from "./components/Register.js";
import Login from "./components/Login.js";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <GlobalStyle />

      <Switch>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
