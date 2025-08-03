import "./App.css";
import Card from "./components/Card.jsx";
import ThemeBtn from "./components/ThemeBtn.jsx";
import { ThemeProvider } from "./Context/theme.js";
import { useState, useEffect } from "react";

function App() {
  const [themeMode, setThemeMode] = useState("light");
  const lighttheme = () => {
    setThemeMode("light");
  };
  const darktheme = () => {
    setThemeMode("dark");
  };
  //actual change in theme
  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);
  return (
    <ThemeProvider value={{ themeMode, darktheme, lighttheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
