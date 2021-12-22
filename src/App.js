import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from "./components/Home";
import UniversityDetails from "./components/UniversityDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="/home" element={<Home />} />
          <Route path="/details/:name" element={<UniversityDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
