import Nav from "./components/Nav";
import React, { Fragment, useState } from "react";
import Cards from "./components/Cards";
import About from "./components/About";
import Detail from "./components/Detail";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";

function App() {
  const [Character, setCharacter] = useState([]);

  return (
    <Fragment>
      <Nav setCharacter={setCharacter} Characters={Character} />
      <Routes>
        <Route excat path="/about" element={<About />} />
        <Route excat path="/detail/:detailId" element={<Detail />} />
        <Route path="*" element={<NotFound />} />
        <Route
          excat
          path="/"
          element={<Cards Character={Character} setCharacter={setCharacter} />}
        />
      </Routes>
    </Fragment>
  );
}

export default App;
