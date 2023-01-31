import logo from "./logo.svg";
import "./App.css";

import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Main from "./Components/Main";
import Article from "./Components/Article";
import Footer from "./Components/Footer";



function App() {
  return (
    <div className="App container">
      <Header></Header>
      <Hero></Hero>
      <Main></Main>
      <Article></Article>
      <Footer></Footer>
    </div>
  );
}


function header () { 
  <header>
        <img src="http://picsum.photos/50/50" alt="logo" />
        <nav>
          <ul>
            <li>Home</li>
            <li>Abaout</li>
            <li>Help</li>
          </ul>
        </nav>
        <button>Accaunt</button>
      </header>
 
}

export default App;
