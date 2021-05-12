import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "./components/Homepage";
import Projects from "./pages/Projects";
import Error from "./pages/Error";
import Contacts from "./pages/Contacts";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/contact-me">
          <Contacts />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
