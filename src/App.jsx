import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./componentes/Layout";
import Home from "./pages/Home";

import Ex01 from "./pages/Ex01";
import Ex02 from "./pages/Ex02";
import Ex03 from "./pages/Ex03";
import Ex04 from "./pages/Ex04";
import Ex05 from "./pages/Ex05";
import Ex06 from "./pages/Ex06";
import Ex07 from "./pages/Ex07";
import Ex08 from "./pages/Ex08";
import Ex09 from "./pages/Ex09";
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
     <Route path="/ex1" element={<Layout><Ex01 /></Layout>} />
     <Route path="/ex2" element={<Layout><Ex02 /></Layout>} />
     <Route path="/ex3" element={<Layout><Ex03 /></Layout>} />
     <Route path="/ex4" element={<Layout><Ex04 /></Layout>} />
     <Route path="/ex5" element={<Layout><Ex05 /></Layout>} />
     <Route path="/ex6" element={<Layout><Ex06 /></Layout>} />
     <Route path="/ex7" element={<Layout><Ex07 /></Layout>} />
     <Route path="/ex8" element={<Layout><Ex08 /></Layout>} />
     <Route path="/ex9" element={<Layout><Ex09 /></Layout>} />
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