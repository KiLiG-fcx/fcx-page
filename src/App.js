import './App.css';
import NavBar from './components/NavBar';
import HomePage from './components/page/HomePage/HomePage';
import MyWork from './components/page/MyWork/MyWork';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/works" element={<MyWork />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
