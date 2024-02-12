import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/utils/Header"
import Home from "./pages/home/Home";
import Footer from "./components/utils/Footer";

function App() {
  return (
    <div className='bg-[#1c2230] text-white'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
