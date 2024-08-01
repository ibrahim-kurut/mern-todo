
import './App.css';
import HomePage from './pages/HomePage';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from './pages/LoginPage';
import Navbar from './components/navbar/Navbar';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
function App() {


  const { user } = useSelector(state => state.auth)

  return (
    <BrowserRouter>
      <ToastContainer position="top-center" theme="colored" />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {
          user && <Route path="/profile/:id" element={<ProfilePage />} />
        }
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
