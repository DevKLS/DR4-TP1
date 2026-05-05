import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./componentes/Layout";
import Home from "./pages/Home";

import Ex1 from "./pages/Ex1";
import Ex2 from "./pages/Ex2";
import Ex3 from "./pages/Ex3";
import Ex4 from "./pages/Ex4";
import Ex5 from "./pages/Ex5";
import Ex6 from "./pages/Ex6";
import Ex7 from "./pages/Ex7";
import Ex8 from "./pages/Ex8";
import Ex9 from "./pages/Ex9";
import Ex10 from "./pages/Ex10";
import Ex11 from "./pages/Ex11";
import Ex12 from "./pages/Ex12";
import Ex13 from "./pages/Ex13";
import Ex14 from "./pages/Ex14";
import Ex15 from "./pages/Ex15";
import Ex16 from "./pages/Ex16";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* EXERCÍCIOS COM LAYOUT */}
        <Route path="/ex1" element={<Layout><Ex1 /></Layout>} />
        <Route path="/ex2" element={<Layout><Ex2 /></Layout>} />
        <Route path="/ex3" element={<Layout><Ex3 /></Layout>} />
        <Route path="/ex4" element={<Layout><Ex4 /></Layout>} />
        <Route path="/ex5" element={<Layout><Ex5 /></Layout>} />
        <Route path="/ex6" element={<Layout><Ex6 /></Layout>} />
        <Route path="/ex7" element={<Layout><Ex7 /></Layout>} />
        <Route path="/ex8" element={<Layout><Ex8 /></Layout>} />
        <Route path="/ex9" element={<Layout><Ex9 /></Layout>} />
        <Route path="/ex10" element={<Layout><Ex10 /></Layout>} />
        <Route path="/ex11" element={<Layout><Ex11 /></Layout>} />
        <Route path="/ex12" element={<Layout><Ex12 /></Layout>} />
        <Route path="/ex13" element={<Layout><Ex13 /></Layout>} />
        <Route path="/ex14" element={<Layout><Ex14 /></Layout>} />
        <Route path="/ex15" element={<Layout><Ex15 /></Layout>} />
        <Route path="/ex16" element={<Layout><Ex16 /></Layout>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;