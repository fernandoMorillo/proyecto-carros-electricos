import { Route, Switch } from "wouter";
import Homepage from "./pages/Home/Homepage";
import Empleados from "./pages/Empleados/Empleados";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route path="/" component={Homepage} />
        <Route path="/empleados" component={Empleados} />

        <Route>404 - Página no encontrada</Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
