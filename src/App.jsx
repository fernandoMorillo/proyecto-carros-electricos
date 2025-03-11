import { Route, Switch } from "wouter";
import Homepage from "./pages/Home/Homepage";
import Empleados from "./pages/Empleados/Empleados";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <h1>Mi App con Wouter</h1>
      <nav>
        <a href="/">Inicio</a>
        <a href="/empleados">Empleados</a>
        <a href="/about">Acerca de</a>
      </nav>

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
