import "./App.css";
import Loader from "./Components/Loader/Loader";
import { BrowserRouter } from "react-router-dom";
import QuestionPage from "./pages/QuestionPage/question-page";
import Layout from "./Components/Layout/layout";
function App() {
  return (
    <div className="App">
     
     <QuestionPage />
     
    </div>
  );
}

export default App;
