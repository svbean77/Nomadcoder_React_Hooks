import Hook from "./hooks";
import UseInput from "./useInput";
import UseTab from "./useTab";
import UseEffect from "./useEffect";
import UseTitle from "./useTitle";
import UseClick from "./useClick";
import UseConfirm from "./useConfirm";
import UsePreventLeave from "./usePreventLeave";
import UseBeforeLeave from "./useBeforeLeave";
import UseFadeIn from "./useFadeIn";
import UseNetwork from "./useNetwork";
import UseScroll from "./useScroll";
import UseFullscreen from "./useFullscreen";
import UseNotification from "./useNotification";
import UseAxios from "./useAxios";

function App() {
  return (
    <div className="App">
      <Hook />
      <hr />
      <UseInput />
      <hr />
      <UseTab />
      <hr />
      <UseEffect />
      <hr />
      <UseTitle />
      <UseClick />
      <hr />
      <UseConfirm />
      <hr />
      <UsePreventLeave />
      <hr />
      <UseBeforeLeave />
      <hr />
      <UseFadeIn />
      <hr />
      <UseNetwork />
      <hr />
      <UseScroll />
      <hr />
      <UseFullscreen />
      <hr />
      <UseNotification />
      <hr />
      <UseAxios />
    </div>
  );
}

export default App;
