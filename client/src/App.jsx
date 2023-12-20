import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Listt from "./components/List";
import Result from "./components/Result";
const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/runs" element={<Listt />} />
      <Route path="/runs/:id" element={<Result />} />
    </Routes>
    <Toaster />
  </BrowserRouter>
);
export default App;
