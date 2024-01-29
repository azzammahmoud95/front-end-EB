import "./App.css";
import Loader from "./Components/Loader/Loader";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import QuestionPage from "./pages/QuestionPage/question-page";
import Layout from "./Components/Layout/layout";
import LunchTest from "./pages/LunchTestPage/lunch-test";
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LunchTest />} />
        <Route path="/questions" element={<QuestionPage />} />
        {/* <Route path="/results" component={ResultPage} /> */}
        {/* Add more routes for other pages */}
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
