import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./index.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      {/*<h1 className="bg-green-400 text-white p-4 rounded-xl text-center sm:bg-green-700 txt-2xl sm:text-3xl">
        Tailwind Test
      </h1>
     <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800 md-flex">
        <img
          class="w-24 h-24 rounded-full mx-auto"
          src="img1.jpg"
          alt=""
          width="384"
          height="512"
        />
        <div class="pt-6 text-center space-y-4">
          <blockquote>
            <p class="text-lg font-medium">
              “Tailwind CSS is the only framework that I've seen scale on large
              teams. It’s easy to customize, adapts to any design, and the build
              size is tiny.”
            </p>
          </blockquote>
          <figcaption class="font-medium">
            <div class="text-sky-500 dark:text-sky-400">Sarah Dayan</div>
            <div class="text-slate-700 dark:text-slate-500">
              Staff Engineer, Algolia
            </div>
          </figcaption>
        </div>
      </figure> */}

      <button className="bg-blue-600 rounded-md text-white p-3 w-70">
        Click to know More
      </button>
      <Card mainHead="Beach view" btnText="Explore More" img="img2.jpg" />
      <Card mainHead="Sea view" img="img3.jpg" />
    </>
  );
}

export default App;
