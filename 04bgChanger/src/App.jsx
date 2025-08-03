import { useState } from "react";

function App() {
  const [color, Setcolor] = useState("olive");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-20 inset-x-0 px-2 h-7  ">
          <div className="flex flex-wrap gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              className="outline-none px-4  text-white shadow-lg rounded-3xl w-[100px] h-8 "
              onClick={() => Setcolor("red")}
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              className="outline-none px-4  text-white shadow-lg rounded-3xl w-[100px] h-8"
              onClick={() => Setcolor("#1a1a1a")}
              style={{ backgroundColor: "#1a1a1a" }}
            >
              Black
            </button>
            <button
              className="outline-none px-4  text-white shadow-lg rounded-3xl w-[100px] h-8"
              onClick={() => Setcolor("green")}
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>
            <button
              className="outline-none px-4  text-white shadow-lg rounded-3xl w-[100px] h-8"
              onClick={() => Setcolor("yellow")}
              style={{ backgroundColor: "yellow" }}
            >
              Yellow
            </button>
            <button
              className="outline-none px-4  text-white shadow-lg rounded-3xl w-[100px] h-8"
              onClick={() => Setcolor("blue")}
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>
            <button
              className="outline-none px-4  text-white shadow-lg rounded-3xl w-[100px] h-8"
              onClick={() => Setcolor("violet")}
              style={{ backgroundColor: "violet" }}
            >
              Violet
            </button>
            <button
              className="outline-none px-4  text-white shadow-lg rounded-3xl w-[100px] h-8"
              onClick={() => Setcolor("pink")}
              style={{ backgroundColor: "pink" }}
            >
              Pink
            </button>
            <button
              className="outline-none px-4  text-white shadow-lg rounded-3xl w-[100px] h-8"
              onClick={() => Setcolor("orange")}
              style={{ backgroundColor: "orange" }}
            >
              Orange
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
