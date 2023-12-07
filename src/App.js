import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import { createContext, useState } from "react";

export const ThemeContext = createContext("dark");

function App() {
  const [translate, setTranslate] = useState(true);

  return (
    <div className="App">
      <Header translate={translate} setTranslate={setTranslate} />
       <Routes>
        <Route exact path="/Portfolio" element={<Home translate={translate} />} />
        <Route path="/About" element={<About translate={translate} />} />

        <Route path="/Projects" element={<Projects translate={translate} />} />
        <Route path="/Contact" element={<Contact translate={translate} />} />
      </Routes>
    </div>
  );
}

export default App;
