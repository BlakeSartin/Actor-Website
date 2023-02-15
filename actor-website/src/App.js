import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Reels from "./components/Reels";
import Pictures from "./components/Pictures";
import Contact from "./components/Contact";
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";

function App() {
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <Home />;
    case "/home":
      component = <Home />;
      break;
    case "/about":
      component = <About />;
      break;
    case "/reels":
      component = <Reels />;
      break;
    case "/pictures":
      component = <Pictures />;
      break;
    case "/contact":
      component = <Contact />;
      break;
  }
  return (
    <div>
      <Topbar />
      {component}
      <Footer />
    </div>
  );
}

export default App;
