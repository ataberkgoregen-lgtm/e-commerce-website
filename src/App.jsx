import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./components/layout";
import Homepage from "./components/homepage";
import ShopPage from "./components/products";
import ProductDetailPage from "./components/ProductDetailPage";
import Contact from "./components/contact";
import About from "./components/about";
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Layout>
            <Homepage></Homepage>
          </Layout>
        </Route>
        <Route path="/contact">
          <Contact></Contact>
        </Route>
        <Route path="/about">
          <Layout>
            <About></About>
          </Layout>
        </Route>
        <Route path="/shop">
          <Layout>
            <ShopPage></ShopPage>
          </Layout>
        </Route>
        <Route path="/product/:productId">
          <Layout>
            <ProductDetailPage />
          </Layout>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
