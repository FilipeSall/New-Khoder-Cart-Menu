import "./App.css";
import { BrowserRouter} from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import ProductMenu from "./components/productMenu/productMenu";
import { GlobalStorage } from "./GlobalContext";
import Cart from "./components/cart/Cart";

function App() {
 
  return (
      <GlobalStorage>
        <BrowserRouter>
          <section className="App__Container">
            <Navigation />
            <ProductMenu />
            <Cart />
          </section>
        </BrowserRouter>
      </GlobalStorage>
  );
}

export default App;