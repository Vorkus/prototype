import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Gallery from "./pages/Gallery/Gallery.jsx";
import Editor from "./pages/Editor/Editor.jsx";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/editor" element={<Editor />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
