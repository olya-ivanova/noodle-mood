import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import "./App.css";

const Home = lazy(() => import("./pages/home/Home"));
const Menu = lazy(() => import("./pages/menu/Menu"));
const Chefs = lazy(() => import("./pages/chefs/Chefs"));
const About = lazy(() => import("./pages/about/About"));
const Contacts = lazy(() => import("./pages/contacts/Contacts"));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/chefs" element={<Chefs />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
