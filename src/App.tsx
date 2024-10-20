import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/home/Home';
import Projects from './pages/projects/Projects';
import Team from './pages/team/Team';
import Blog from './pages/blog/Blog';
import Podcasts from './pages/podcasts/Podcasts';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/team" element={<Team />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/podcasts" element={<Podcasts />} />
          <Route
            path="*"
            element={<Navigate to="/" replace={true} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
