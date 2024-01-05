import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomeMessage from './components/Home/Homepage';
import InProgressMessage from './components/progress/InProgress'
import CronExpressionGenerator from './components/cron/CronGenerator'

const currentURL = window.location.href;
const currentPath = window.location.pathname;
const searchParams = window.location.search;
const hashFragment = window.location.hash;

console.log('Current URL:', currentURL);
console.log('Current Path:', currentPath);
console.log('Search Parameters:', searchParams);
console.log('Hash Fragment:', hashFragment);

function App() {
  return (
    
    <BrowserRouter>
    <Routes>
          <Route index element={<WelcomeMessage />} />
          <Route path="CronJobGenerator" element={<CronExpressionGenerator />} />
          <Route path="contact" element={<WelcomeMessage />} />
          <Route path="*" element={<WelcomeMessage />} />
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
