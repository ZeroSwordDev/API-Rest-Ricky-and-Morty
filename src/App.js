import Nav from "./components/Nav";
import React, { Fragment, useEffect, useState } from "react";
import Cards from "./components/Cards";
import About from "./components/About";
import Detail from "./components/Detail";
import "./App.css";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import NotFound from "./components/NotFound";
import Form from "./components/Form/Form";
import  {Favorites}  from "./components/Favorites/Favorites";

function App() {
  const [Character, setCharacter] = useState([]);
  const [access, setAccess] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const username = "Henry@soyhenry.com";
  const password = "123456";
  useEffect(() => {
    !access && navigate("/");
    // eslint-disable-next-line
  }, [access]);

  const login = (userData) => {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate("/home");
    }
  };

  const logout = () => {
    setAccess(false);
    // navigate("/");
  };

  return (
    <Fragment>
      {location.pathname !== "/" && (
        <Nav
          setCharacter={setCharacter}
          logout={logout}
          Characters={Character}
        />
      )}
      <Routes>
        <Route excat path="/" element={<Form login={login} />} />
        <Route excat path="/about" element={<About />} />
        <Route excat path="/detail/:detailId" element={<Detail />} />
        <Route excat path="/favorites" element={<Favorites />} />
        <Route path="*" element={<NotFound />} />
        <Route
          excat
          path="/home"
          element={<Cards Character={Character} setCharacter={setCharacter} />}
        />
      </Routes>
    </Fragment>
  );
}

export default App;
