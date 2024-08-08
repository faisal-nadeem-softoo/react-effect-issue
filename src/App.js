import React, { useEffect, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.addEventListener("click", () => {
      setCount((count) => count + 1);
    });
  }, []);

  return <div className="App">{count}</div>;
}
