import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import './App.css';
import { ToastContainer } from 'react-toastify';
import MainPage from './Components/pages/Home_page';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
