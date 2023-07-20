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
import ChickenEaten from "./components/ChickenEaten";
import DetailsDish from "./components/DetailsDish";
import AllDishes from "./components/AllDishes";
import Result from "./pages/ResultPage";
import Footer from "./components/Footer";

function App() {
  const [selectedDish, setSelectedDish] = useState(0);

  return (
    <BrowserRouter>
      <Header />
      <div className=" lg:w-[70%] mx-auto ">
        <Routes>
          <Route
            path="/"
            element={<Home setSelectedDish={setSelectedDish} />}
          />
          <Route path="/details" element={<DetailsDish />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
