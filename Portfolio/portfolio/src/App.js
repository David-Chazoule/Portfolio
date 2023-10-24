import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import { useState } from "react";

function App() {
  const [translate, setTranslate] = useState(false);
  return (
    <div className="App">
      <Header translate={translate} setTranslate={setTranslate} />

      <Routes>
        <Route exact path="/" element={<Home translate={translate} />} />
        <Route path="/About" element={<About translate={translate} />} />
        <Route path="/Skills" element={<Skills translate={translate} />} />
        <Route path="/Projects" element={<Projects translate={translate} />} />
        <Route path="/Contact" element={<Contact translate={translate} />} />
      </Routes>
    </div>
  );
}

export default App;
