
import { HeaderApp } from "./components/header_app";
import { ListProduct } from "./components/Product/list_product";
import { AlertProduct } from "./components/Product/AlertProduct";
import "./assets/css/cssStyle.css"

const App = () => {
  return (
    <div className="container">
      <HeaderApp/>
      <AlertProduct/>
      <ListProduct/>
    </div>
  );
}

export default App;
