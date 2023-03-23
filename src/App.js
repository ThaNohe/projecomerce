import Home from "./components/Home/Home";
import CartContent from './components/CartContent/CartContent'
import Products from "./components/Products/Products";
//import CartContent from "./components/CartContent/CartContent";
import {DataProvider} from "./components/Context/DataContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
           <Route path="/cart" element={<CartContent/>}/> 
          <Route path="/cart" element={<Products/>}/>
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
