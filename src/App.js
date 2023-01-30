import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Create from "./pages/Create";
import Update from "./pages/Update";

function App() {
  return (
    <BrowserRouter>
      <nav className="bg-gray-400 text-black hover:bg-teal-700 h-32 w-7/12 mx-auto place-content-center grid gap-6">
        <div>
          <h1 className="text-black text-2xl">Philosophers' Site</h1>
        </div>
        <div>
          <Link className="text-black hover:text-gray-600" to="/">
            Home
          </Link>
          <Link className="text-black hover:text-gray-600" to="/create">
            Enter New Philosopher
          </Link>
          <Link className="text-black hover:text-gray-600" to="/update">
            Update Philosopher
          </Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/:id" element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
