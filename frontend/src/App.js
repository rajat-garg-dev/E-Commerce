import logo from "./logo.svg";
import "./App.css";
import Navigation from "./customer/components/navigation/navigation";
import HomePage from "./customer/components/pages/home/HomePage";
import Product from "./customer/components/product/Product";

function App() {
  return (
    <div className="App">
      <Navigation />
      <div>
        {/* <HomePage /> */}
        <Product />
      </div>
    </div>
  );
}

export default App;
