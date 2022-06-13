import Home from '../Home';
import './App.css';
import Movies from '../Movies';
import Tv from '../Tv';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from '../Detail/Detail';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/movies/:page" element={<Movies />}></Route>
            <Route path="/tv/:page" element={<Tv />}></Route>
            <Route path="/detail/:id" element={<Detail />}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
