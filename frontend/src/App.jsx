import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/utils/Header"
import Home from "./pages/home/Home";
import Footer from "./components/utils/Footer";
import MovieDetails from "./components/MovieDetails";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "./store/reducers/darkModeReducer";
import { Button } from "@material-tailwind/react";
import { useTranslation } from "react-i18next";
import { changeLanguage, setDirection } from "./store/reducers/languageReducer";
import { useState } from "react";
import CurrentPage from "./pages/current page/CurrentPage";
import Pagination from "./components/utils/Pagination";

function App() {
  const dispatch = useDispatch();
  const { isDarkMode } = useSelector(state => state.darkMode);

  const handleToggle = () => {
    dispatch(toggleDarkMode());
  };

  const { language, dir } = useSelector(state => state.lang);
  const [langs, setLangs] = useState(language);
  const [dirs, setDirs] = useState(dir);

  const { i18n } = useTranslation();
  const handleChangeLang = (lang) => {
    i18n.changeLanguage(lang)
    dispatch(changeLanguage(lang))
    setLangs(lang)

    const newDir = lang === 'ar' ? 'rtl' : 'ltr';
    dispatch(setDirection(newDir));
    setDirs(newDir);
  }
  document.dir = dirs;

  const { movies } = useSelector((state) => state.movies);
  let moviesPages = []
  try {
    if(movies.total_pages) {
      moviesPages = movies.total_pages;
    } else {
      moviesPages = []
    }
  } catch(err) {}

  return (
    <div className={isDarkMode ? 'bg-[#222]' : 'bg-[#f9f9f9]'}>
      <BrowserRouter>
        <Header onToggleMode={handleToggle} darkMode={isDarkMode} langs={langs} handleChangeLang={handleChangeLang} />
        <Routes>
          <Route path="/" element={
            <div>
              <Home darkMode={isDarkMode} />
              <Pagination totalPages={moviesPages} darkMode={isDarkMode} />
            </div>
          } />
          <Route path="/movie/:id" element={<MovieDetails darkMode={isDarkMode} />} />
          <Route path="/page/:page" element={
            <div>
              <CurrentPage darkMode={isDarkMode} />
              <Pagination totalPages={moviesPages} darkMode={isDarkMode} />
            </div>
          } />
        </Routes>
        <Footer darkMode={isDarkMode} />
      </BrowserRouter>
    </div>
  )
}

export default App
