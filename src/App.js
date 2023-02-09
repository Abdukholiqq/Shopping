// import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Admin from "./Pages/Admin";
import Hero from "./Components/Hero";
import Main from "./Components/Main";
import Article from "./Components/Article";
import Footer from "./Components/Footer";

// import Swiperr from "./Components/Halpers/Swiper";
import NotFound from "./Pages/NotFound";
import Loaderr from "./Components/Halpers/Loaderr";
import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Singlepage from "./Pages/Singlepage";
import Home from "./Pages/MainPages";

// import Star from "../Components/Halpers/Stars";
function App() {
  return (
    <div className="App">
      <Header />
      {/* <Loaderr/> */}
      {/* <Star></Star> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hero" element={<Hero />} />
        {/* <Route path="/main" element={<Main />} /> */}
        <Route path="/products/:name" element={<Singlepage />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
       
        </div>
  );
}

// fireBase api link
// https://online-shop-6881c-default-rtdb.firebaseio.com/

export default App;
