import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import MainPage from "./pages/wrapper";
export default function App() {
  return (
    <React.Fragment>
      <Header></Header>
      <Routes>
        <Route index element={<MainPage />}></Route>
      </Routes>
    </React.Fragment>
  );
}
