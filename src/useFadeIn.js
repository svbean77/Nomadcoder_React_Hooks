import { useEffect, useRef } from "react";

const useFadeIn = (duration) => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s`;
      current.style.opacity = 1;
    }
  });

  return {
    ref: element,
    style: { opacity: 0 },
  };
};

function App() {
  const fadeInH1 = useFadeIn(1);
  const fadeInP = useFadeIn(5);

  return (
    <div>
      <h1 {...fadeInH1}>Hello</h1>
      <p {...fadeInP}>hello world!</p>
    </div>
  );
}

export default App;
