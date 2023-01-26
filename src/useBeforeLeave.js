import { useEffect } from "react";

const useBeforeLeave = (onBefore) => {
  const handle = (event) => {
    const { clientY } = event;
    if (clientY <= 0) {
      //clientY <= 0: 마우스가 위쪽으로 벗어난 경우
      onBefore();
    }
  };
  useEffect(() => {
    if (typeof onBefore !== "function") {
      return;
    } else {
      document.addEventListener("mouseleave", handle);
      return () => document.removeEventListener("mouseleave", handle);
    }
  }, []);
};

function App() {
  const begForLive = () => console.log("Please don't leave");
  useBeforeLeave(begForLive);

  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;
