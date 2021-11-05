//import { updateProduct } from '../../server/controllers/product.controller';
import './App.css';
import Main from "./view/Main";
import OneProduct from './components/OneProduct';
import {Router} from "@reach/router"
import UpdateProduct from './components/UpdateProduct';


function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/" />
        <OneProduct path="/product/:id" />
        <UpdateProduct path="/product/edit/:id" />
      </Router>
      
    </div>
  );
}

export default App;
