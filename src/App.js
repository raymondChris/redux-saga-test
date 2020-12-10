import { useRef } from "react";

import "./App.css";
import { Input, ControlBar, Result } from "./components";

function App() {
  const inputRef = useRef();

  return (
    <div className="App">
      <Input inputRef={inputRef} />
      <ControlBar inputRef={inputRef} />
      <Result />
    </div>
  );
}

export default App;
