import { isElementType } from "@testing-library/user-event/dist/utils";
import { useRef } from "react";

const useFullscreen = (callback) => {
  const element = useRef();
  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen();
      if (callback && typeof callback === "function") {
        callback(true);
      }
    }
  };
  const exitFull = () => {
    document.exitFullscreen();
    if (callback && typeof callback === "function") {
      callback(false);
    }
  };
  return { element, triggerFull, exitFull };
};

function App() {
  const onFullS = (isFull) => {
    console.log(isFull ? "We are full" : "We are small");
  };
  const { element, triggerFull, exitFull } = useFullscreen(onFullS);

  return (
    <div>
      <div ref={element}>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQCAMAAADQmBKKAAABF1BMVEX///9ChfTqQzX7vAQ0qFPqQTJFrVfrSkVJi/T7v0Tr8f7/9+v86+vr9Oz7ugD7uAAlpUo0f/Q8gvT4ysj2wb7zpJ/qOinqNSL7vTT+79P7swDgRkUbd/PB0/uo1LE8qVr3+f6Grffj6/3619j+9/foDgDpKhTsX1Twg372ubfxkYzucWnqNy/1r6774+PveXTrVEntZ2L+6L393Z780YD8x0n7xDX8zGv81pD94q78xlf7vSP80Hb83sf70aH6y4b7wWLouBXkfH3kk5jgprLlzNvh6M+71qulzqCBv4NMolJOhNihvvnU691QtXAAoDwggOPT4PxjnuWNteaox+ddlPXM3upnuXcAnCp2ovaJxpaxyfq83cE47vODAAAENUlEQVR4nO3ZiVbaQBQG4CEQQWOARE1EUVBLXFsVNyB237CC1LZUQd7/OToJLgRmwozn4qTnzP8CfOfeO1tASEZGRkZGRkZGRkZG5v/I3Pb83MbsK9GMxyyUvDibW9tvRFP8zB6oihfLtpI7G6I1OLPJPghHte3dOdGeQRAmWdbObJRAOLYiuG/DIEXd244WSFGd19ECYZHIGhFAeLYFLjYSSLEscZskEaTY+8KOEjJIETfYFJDqRAykOAsRA6kHgs4QGkhx5iMGsg4jBlL3xPSMClJsMT0LAYlZZyGgncn9quaHE2QdTub40MpHxyeni4uLp2eVao4DpCYnMNVaueamM/H7pDPuaWXIFAJS4EFHi4+Yh2TiZwHSS4KOMiMcv05LtQHSy7VMOyNy/Cq5VRbQAehQl12qB2fp/GHNhawy0Eta1Q3heEWqaeNAoPtQNaw8AVEICPDSON6DRSdaOEiFe8LmxvTrXnQeClKTYB7NTbOA4pmjMBDgCFUYGubHzYWBwDpWZuTgLfKMDrL2oTyoxtYwv2k5KqgEVqAcu8crEQVk70J50DHrBHlxc2SQqoA97rUTDk88XSGDSnCbYpWjYxh0QgTZW2Aevo7hvF0eBTmHcBcPbZqrQvHMu1GQDehBGmeBMu9HWmZvQn6tyi3xgeIfkkPrq7QFey/jBblBj2UBPw/LnC2LLw1+yLedfeiPi88HqZal7MN/xeeaoXQ6jUFebMdRDybzZ1BlmjG16emPXpZxDj99/vJ1hi1FXpHGlm/f6xdTOD8uYymuNCZQRdSsX2VbrWwCp/AzxhUzfw3PuUhkfcxzQLH8HTBHv3nSeKBLXtAKrGc1wPFApkiQ3m0lgin8MjhBkDOkX2UTw6DfvKB1QM/NiCcx9SfP5THbRTjPaH0w6C9fgYw1MA+6IHgSU3qba6pNuFW/OjzP96A1riFqz0B5miSOB7oW1DHCQPdBqMNRIgNs0TdvaRVC1+wgswPlIU90H4Q6zGNtgm3TTYrHB62zlsiAu3vUw0CowbY5mjGwJYYKFE8fhJiWvhmDOzWoHbsHFdsMIgPwnF8dA0Iz40UG5M2sOw40VmQCnhmIuisOgNDMWthkG3A7ohedOtNPIITuUrQimUYH8BbkgaieQRBa7+SJW2TeuCuCepBO7VgAhNB1xzSCJtM0Ug1gDnOFfFIjZRqGafYtWNdegdsNn0BMM/RoWml02qlYqt1Za0xCg8iXaToIp1j0XvHF4kQ0XmhnPQ008YzdqV86vaiB6MtMEIh+dogC9YhvIIEg6k4kCkR5JgoEociBKCUSB6Ls1gJBeov89UMYiLxdiwQRx0goiCQSC8JdG26bYBBqFrLRAiG9GyyScBBuW+C/hQiAcN+6hewDqhAFEG7caveqddtqtW7roilP0Zu9Xq8pWiEjIyMjIyMjIyMjI8OYfyYRiXn6nRq9AAAAAElFTkSuQmCC" />
        <button onClick={exitFull}>Exit Fullscreen</button>
      </div>
      <button onClick={triggerFull}>Make Fullscreen</button>
    </div>
  );
}

export default App;
