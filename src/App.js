import { Routes, Route, BrowserRouter, useParams } from "react-router-dom";
import Home from "./Pages/Home";
import Collections from "./Pages/Collections";
import articles from "./Pages/Articles";
import "antd/dist/antd.css";
import Articles from "./Pages/Articles";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="collections" element={<Collections />} />
        <Route path="collections/:id" element={<Collections />} />
        <Route path="articles/:id" element={<Articles />}></Route>
        <Route path="articles" element={<Articles />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
