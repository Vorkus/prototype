import BaseLayout from "./layouts/BaseLayout.jsx";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Gallery from "./pages/Gallery/Gallery.jsx";
import MeshEditor from "./pages/MeshEditor/MeshEditor.jsx";

function App() {
    return (
        <BaseLayout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/meshEditor" element={<MeshEditor />} />
            </Routes>
        </BaseLayout>
    );
}

export default App