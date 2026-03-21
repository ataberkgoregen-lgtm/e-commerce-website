import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./components/layout";
import Homepage from "./components/homepage";
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Layout>
            <Homepage></Homepage>
          </Layout>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
