import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/home/Home';
import Blog from './pages/blog/Blog';
import Podcasts from './pages/podcasts/Podcasts';
import Post from './pages/post/Post';
import Podcast from './pages/podcast/Podcast';
import Project from './pages/project/Project';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:slug" element={<Project />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<Post />} />
          <Route path="/podcasts" element={<Podcasts />} />
          <Route path="/podcasts/:slug" element={<Podcast />} />
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
