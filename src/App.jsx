import React, { useState } from "react";
import CommentsContainer from "./components/CommentsContainer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <CommentsContainer></CommentsContainer>
    </div>
  );
}

export default App;
