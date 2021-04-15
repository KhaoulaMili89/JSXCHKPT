import "./App.css";
import "./style.css";
import img1 from "../src/images/Tech1.jpg";
import ReactPlayer from "react-player";
function App() {
  return (
    <div>
      <div className="App">
        <div style={{ border: "solid 1px silver", maxWidth: "100vw" }}>
          <h1 className="red title">Khaoula</h1>
          <br />
          <div className="IMG">
          <img src={"./Tech2.jpg"} />
          <img src={img1} /></div>
        </div>

        <ReactPlayer className="Video" url="https://youtu.be/7fPXI_MnBOY" />
      </div>
    </div>
  );
}

export default App;
