import "./App.css";
import { Article } from "./components/article/article.jsx";
import { GoProList } from "./components/goProList/goProList";

function App() {
  return (
    <>
      <div className="App">
        <h1>Список з камерами GoPro</h1>
        <Article />
        <GoProList />
      </div>
    </>
  );
}

export default App;
