import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Shop from "./pages/Shop";
import Header from "./components/Header";
import "./App.css"
function App(){
  return (
  <div>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/shop" element={<Shop />}/>
    </Routes>
  </div>);
}
export default App;