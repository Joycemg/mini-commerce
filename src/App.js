
import { HeaderApp } from "./components/header_app";
import { ListProduct } from "./components/list_product";
import "./assets/css/cssStyle.css"

const App = () => {
  return (
    <div className="container">
      <HeaderApp/>
      <ListProduct/>
    </div>
  );
}

export default App;
