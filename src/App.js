import './App.css';
import NavBar from './components/NavBar';
import HomePage from './page/HomePage/HomePage';
import MyWork from './page/MyWork/MyWork';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar className="navbar"/>
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
