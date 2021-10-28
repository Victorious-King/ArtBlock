import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/app.sass";
import Page from "./components/Page";
import Home from "./screens/Home";
import Faq from "./screens/Faq";
import Item from "./screens/Item";

function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Page>
              <Home />
            </Page>
          )}
        />
        <Route
          exact
          path="/about"
          render={() => (
            <Page>
              <Faq />
            </Page>
          )}
        />
        <Route
          exact
          path="/item/:id"
          render={(props) => (
            <Page>
              <Item {...props} />
            </Page>
          )}
        />
      </Switch>
    </Router>
  );
}

export default App;
