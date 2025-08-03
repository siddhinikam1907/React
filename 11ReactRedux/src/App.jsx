import Todos from "./Components/Todos.jsx";
import Addtodo from "./Components/Addtodo.jsx";

import "./App.css";

function App() {
  return (
    <>
      <div className="bg-yellow-100 h-screen flex flex-col  justify-center items-center ">
        <div className=" w-[660px] rounded-md flex flex-col justify-center items-center">
          <Addtodo />
          <Todos />
        </div>
      </div>
    </>
  );
}

export default App;
