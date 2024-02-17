import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/utils/Header"
import Home from "./pages/home/Home";
import Footer from "./components/utils/Footer";
import MovieDetails from "./components/MovieDetails";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "./store/reducers/darkModeReducer";

function App() {
  const dispatch = useDispatch();
  const { isDarkMode } = useSelector(state => state.darkMode);

  const handleToggle = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <div className={isDarkMode ? 'bg-[#222]' : 'bg-[#f9f9f9]'}>
      <BrowserRouter>
        <Header onToggleMode={handleToggle} darkMode={isDarkMode} />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetails darkMode={isDarkMode} />} />
        </Routes>
        <Footer darkMode={isDarkMode} />
      </BrowserRouter>
    </div>
  )
}

export default App
