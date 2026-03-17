 import { useState } from "react";


function App() {
  const [son, setSon] = useState(0);

  return (
    <div>
      <h1>{son}</h1>
      <button onClick={() => setSon(son + 1)}>
        bos
      </button>
    </div>
  );
}

export default App;

