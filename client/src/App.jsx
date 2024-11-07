import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Header } from "./components/Header";
import BuyCredit from "./pages/BuyCredit";
import { Result } from "./pages/Result";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
        <Route path="/buy" element={<BuyCredit />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
