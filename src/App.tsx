import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import MainPage from "./pages/wrapper";
import NewsPage from "./pages/news";
import AboutPage from "./pages/about/AboutPage";
import AnserPage from "./pages/answer/AnserPage";
import DoctorPage from "./pages/doctor/DoctorPage";
import InformationPage from "./pages/information/InformationPage";
import InsurancePage from "./pages/Insurance/InsurancePage";
import JobsPage from "./pages/jobs/JobsPage";
export default function App() {
  return (
    <React.Fragment>
      <Header></Header>
      <Routes>
        <Route index element={<MainPage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/answer" element={<AnserPage />}></Route>
        <Route path="/doctor" element={<DoctorPage />}></Route>
        <Route path="/information" element={<InformationPage />}></Route>
        <Route path="/insurance" element={<InsurancePage />}></Route>
        <Route path="/jobs" element={<JobsPage />}></Route>
        <Route path="/category/advice-news/news" element={<NewsPage />}></Route>
      </Routes>
    </React.Fragment>
  );
}
