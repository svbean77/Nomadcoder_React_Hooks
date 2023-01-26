import { useEffect } from "react";

const useNotification = (title, options) => {
  if (!("Notification" in window)) {
    return;
  }
  const fireNotif = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  };
  return fireNotif;
};

function App() {
  const triggerNotif = useNotification("This is my message!", {
    body: "It is body message! I really like it!",
  });
  return (
    <div>
      <button onClick={triggerNotif}>Request</button>
    </div>
  );
}

export default App;
