import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Pages from './Pages';
import Project from './Project';
import Blog from './Blog';
import Contact from './Contact';
import { Routes, Route } from "react-router-dom";
import Header from './Header';





function App() {
  return (


    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="Pages" element={<Pages />} />
          <Route path="Project" element={< Project />} />
          <Route path="Blog" element={<Blog />} />
          <Route path="Contact" element={<Contact />} />
        </Route>
      </Routes>
    </>

  );
}

export default App;
