import React from "react";
import "./styles/App.css"
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Glossary from "./pages/Glossary";
import Posts from "./pages/Posts";
import Navbar from "./components/UI/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/posts" element={<Posts />} />
        <Route path="/glossary" element={<Glossary />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


