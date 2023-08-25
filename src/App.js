import tree from "./images/2.1.jpg"
import './App.css';
import TepaNom from "./Navbar/Navbar"
import Home from "./Home/Home"
import 'bootstrap/dist/css/bootstrap.css';
import Backend from "./getDataApi"
import Table from "./getDataApi/Table"
import Navbar from "./Navbar/Navbar";
import { BrowserRouter, Route, Routes  } from "react-router-dom";
import Ilyosxon from "./Counter/CounterList"
import HomeClass from "./HomeClass/HomeClass";
import Stat from "./Statistik"

function App() {
  return (
    <BrowserRouter>
    <div className="App">

      <Navbar />
      <Routes >
        <Route path="/" element={<Stat/>} />
        <Route path="/blog" element={<Table/>} />
        <Route path="/users" element={<Backend/>} />
        <Route path="/ilyosxon" element={<Ilyosxon/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
