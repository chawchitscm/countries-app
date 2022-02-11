import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Detail from './components/Detail';
import Nav from './components/Nav';

const App = () => {
  return (
    <div className="App">
      <Router>
        <div>
          <Nav />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/detail" element={<Detail />} />
            </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
