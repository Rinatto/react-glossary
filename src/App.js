import React from "react";
import "./styles/App.css"
import {
  BrowserRouter,
  Link,
  Routes,
  Route
} from "react-router-dom";
import Glossary from "./pages/Glossary";
import Posts from "./pages/Posts";

function App() {
  return (
    <BrowserRouter>
      <div className="navbar">
        <Link to="/posts" className="link">Термины</Link>
        <Link to="/glossary" className="link">Диаграмма связей</Link>
        <Link to="https://github.com/Rinatto" className="link">Профиль GitHub</Link>
      </div>
      <Routes>
        <Route path="/posts" element={<Posts />} />
        <Route path="/glossary" element={<Glossary />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


