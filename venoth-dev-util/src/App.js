import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomeMessage from './components/Home/Homepage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<WelcomeMessage/>}>
          <Route index element={<WelcomeMessage />} />
          <Route path="blogs" element={<WelcomeMessage />} />
          <Route path="contact" element={<WelcomeMessage />} />
          <Route path="*" element={<WelcomeMessage />} />
      </Route>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
