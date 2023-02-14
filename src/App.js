import { createContext, useState } from "react";
import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";

import "./App.css";
import Home from "./Pages/MainPages";
import Header from "./Components/Header";
import Admin from "./Pages/Admin";   
import Singlepage from "./Pages/Singlepage";
import Footer from "./Components/Footer";

import NotFound from "./Pages/NotFound";  
import AuthContextProvider from "./Context/AuthContext";

export const languageContext = createContext("Uz");

function App() {
  const [lang, setLang] = useState("Uz");
  return (
    <languageContext.Provider value={lang}>
      <AuthContextProvider>
        <div className="App">
          <Header lang={lang} setLang={setLang} />
          <Routes>
            <Route path="/" element={<Home lang={lang} setLang={setLang} />} />
            <Route path="/products/:name" element={<Singlepage />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
 
          <Footer lang={lang} setLang={setLang} />
        </div>
      </AuthContextProvider>
    </languageContext.Provider>
  );
}

// fireBase api link
// https://online-shop-6881c-default-rtdb.firebaseio.com/

export default App;
