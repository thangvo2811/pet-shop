import { Fragment } from "react";
import "./App.scss";
import Header from "./components/layout/Header";
import Banner from "./components/banner/Banner";
import { Route, Routes } from "react-router-dom";
import Main from "./components/layout/Main";
import About from "./pages/About";
import Discovery from "./pages/Discovery";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Routes>
      <Route element={<Main></Main>}>
        <Route path="/" element={<Banner></Banner>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/discovery" element={<Discovery></Discovery>}></Route>
        <Route path="/service" element={<Service></Service>}></Route>
        <Route
          path="/contact"
          element={
            <>
              <Contact></Contact>
              <Footer></Footer>
            </>
          }
        ></Route>
      </Route>
    </Routes>
  );
}

export default App;
