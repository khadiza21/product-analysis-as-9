import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBarr from "./components/NavBarr/NavBarr.js";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Notfound from "./components/Notfound/Notfound";
import Reviews from "./components/Reviews/Reviews";
import Dashboard from "./components/Dashboard/Dashboard";
import Blogs from "./components/Blogs/Blogs";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div>
      <NavBarr></NavBarr>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/reviews" element={<Reviews></Reviews>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="*" element={<Notfound></Notfound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
