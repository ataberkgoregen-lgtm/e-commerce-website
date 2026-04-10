import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./components/layout";
import Homepage from "./components/homepage";
import ShopPage from "./components/products";
import ProductDetailPage from "./components/ProductDetailPage";
import Contact from "./components/contact";
import About from "./components/about";
import BlogPage from "./components/blog";
import Team from "./components/teams.jsx";
import Login from "./components/login.jsx";
import Register from "./components/register.jsx";
import ShoppingCart from "./components/shoppingcart.jsx";
import CreateOrder from "./components/createorder.jsx";
import OrderSuccess from "./components/ordersuccess.jsx";
import OrderHistory from "./components/orderhistory.jsx";
import { ProtectedRoute } from "./components/protectedroute.jsx";
import { useSelector } from "react-redux";
const App = () => {
  const user = useSelector((store) => store.client.user); // Store yapına göre 'client' veya 'user' olabilir

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
        <Route path="/login">
          <Layout>
            <Login></Login>
          </Layout>
        </Route>
        <Route path="/register">
          <Layout>
            <Register></Register>
          </Layout>
        </Route>
        <Route path="/blog">
          <Layout>
            <BlogPage></BlogPage>
          </Layout>
        </Route>
        <Route path="/team">
          <Layout>
            <Team></Team>
          </Layout>
        </Route>
        <Route path="/about">
          <Layout>
            <About></About>
          </Layout>
        </Route>
        <Route path="/cart">
          <Layout>
            <ShoppingCart></ShoppingCart>
          </Layout>
        </Route>
        <Route path="/orders">
          {user.token ? <OrderHistory /> : <Redirect to="/login" />}
        </Route>
        <Route path="/order/success">
          <Layout>
            <OrderSuccess />
          </Layout>
        </Route>
        <Route path="/order">
          <Layout>
            <ProtectedRoute component={CreateOrder} />
          </Layout>
        </Route>
        <Route path="/shop/:gender/:categoryName/:categoryId/:productNameSlug/:productId">
          <Layout>
            <ProductDetailPage />
          </Layout>
        </Route>
        <Route path="/shop/:gender/:categoryName/:categoryId">
          <Layout>
            <ShopPage />
          </Layout>
        </Route>
        <Route path="/shop">
          <Layout>
            <ShopPage />
          </Layout>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
