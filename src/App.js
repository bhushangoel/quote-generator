import "./App.css";
import Quotes from "./components/Quotes";

function App() {
  let color = "peru";
  const cb = (resp) => {
    console.log("resp : ", resp);
    color = resp;
    document.body.style.backgroundColor = color;
  };

  return (
    <div className="App">
      <Quotes colorCallBack={cb} />
    </div>
  );
}

export default App;
