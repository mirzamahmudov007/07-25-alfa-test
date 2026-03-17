import { useState } from "react";
// render 
function App() {
  const [son , setSon] = useState(0);
  
  return (
    <div>
      <h1>{son}</h1>
      <button onClick={() => setSon(son + 1)}>click</button>
    </div>
  )

}
export default App
;