import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Products from "./page/Product/Product";
import Cart from "./page/Cart/Cart";
import { Provider } from "react-redux";
import store from "./redux/Reducer";
import Header from "./components/Header/Header";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="div-root">
          <Header />
          <Routes>
            <Route exact path="/" element={<Products />} />
            <Route exact path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
