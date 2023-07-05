import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Form from "./components/Form";
import ChickenEaten from "./components/ChickenEaten";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className=" w-[70%] mx-auto">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Form />} />
          <Route path="/chicken-eaten" element={<ChickenEaten />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
