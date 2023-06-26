import Home from "@pages/Home";
import "./assets/styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "components/Header";
import Footer from "components/Footer";
/* testing commmit */

function App() {
  return (
    <div className="App flex flex-col h-screen justify-between">
      <BrowserRouter>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
