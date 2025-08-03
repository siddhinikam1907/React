import { useCallback, useState, useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numAllow, setNumAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [Password, setPassword] = useState("");

  //use ref hook
  const passwordRef = useRef(null);
  const PasswordGen = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllow) str += "0123456789";
    if (charAllow) str += "!@#$%^&*()_~";
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numAllow, charAllow, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0, 8);
    window.navigator.clipboard.writeText(Password);
  }, [Password]);
  useEffect(() => {
    PasswordGen();
  }, [length, numAllow, charAllow, PasswordGen]);
  return (
    <>
      <div className="flex  flex-col justify-center items-center gap-10 h-screen w-screen">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-red-500 to-blue-500 text-transparent bg-clip-text ">
          Password Generator
        </h1>

        <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 h-[200px] w-[600px] rounded-xl overflow-hidden flex flex-col justify-evenly items-center">
          <div className=" w-[450px] h-[40px] top-10 flex">
            <input
              type="text"
              value={Password}
              className="w-[450px] h-[40px] top-10 rounded-tl-md rounded-bl-md p-5 outline-none  hover:ring-2 hover:ring-blue-500 shadow-xl"
              placeholder="password"
              ref={passwordRef}
            />
            <button
              onClick={copyPasswordToClipboard}
              className="h-[40px] bg-blue-400 rounded-tr-md rounded-br-md w-20 hover:bg-blue-500 text-white shadow-xl shrink-0"
            >
              Copy
            </button>
          </div>
          <div className="flex justify-evenly gap-10">
            <div className="flex gap-2">
              <input
                type="range"
                max={20}
                min={8}
                value={length}
                className="cursor-pointer"
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />
              <label className="text-blue-950">Length: {length}</label>
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                name="numberInput"
                id="numberInput"
                defaultChecked={numAllow}
                onChange={() => {
                  setNumAllow((prev) => !prev);
                }}
              />
              <label className="text-blue-950">Numbers</label>
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                name="numberInput"
                id="numberInput"
                defaultChecked={charAllow}
                onChange={() => {
                  setCharAllow((prev) => !prev);
                }}
              />
              <label className="text-blue-950">Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
