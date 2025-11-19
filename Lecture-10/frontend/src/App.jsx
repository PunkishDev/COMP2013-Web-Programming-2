import {BrowserRouter as Router, Routes, Route} from "react-router-dom"; 
import HomePage from "./Components/HomePage";
import RegisterPage from "./Components/RegisterPage";
import PageNotFound from "./Components/PageNotFound";
import LoginPage from "./Components/LoginPage";
import PrivatePage from "./Components/PrivatePage";
import './App.css'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}/> {/* states at route "/" show element HomePage */}
        <Route path="/register" element={<RegisterPage />}/>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/private" element={<PrivatePage />} />
        <Route path="*" element={<PageNotFound />}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
