//Author Name: Md Wahiduzzaman Emon
//Author GitHub URL: https://github.com/MdWahiduzzamanEmon
//Author LinkedIn URL: https://www.linkedin.com/in/md-wahiduzzaman-emon-5b1b3b1b3/

import "./App.css";
import MainTable from "./lib/components/MainTable/MainTable";

function App() {
  return (
    <div className="App">
      <MainTable filter style={{ fontSize: "20px" }} align={"center"} />
    </div>
  );
}

export default App;
