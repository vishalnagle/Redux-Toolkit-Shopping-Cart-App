import "./App.css";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import Layout from "./components/Layout/Layout";
import Cart from "./components/Cart/Cart";
import Products from "./components/Shop/Products"



function App() {
  let cartQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <Fragment>
      <Layout>
        {cartQuantity ? <Cart /> : null}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
