import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FixedContainer from './components/container/Container'
import WelcomeMessage from './components/Homepage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<WelcomeMessage/>}>
          <Route index element={<WelcomeMessage />} />
          <Route path="blogs" element={<><h1>blogs</h1></>} />
          <Route path="contact" element={<WelcomeMessage />} />
          <Route path="*" element={<WelcomeMessage />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
