import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-emerald-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold flex items-center gap-2">
            🍳 Recipe Box
          </Link>

          <div className="flex gap-6">
            <Link
              to="/"
              className={`hover:text-emerald-400 transition ${
                isActive("/") ? "border-b-2 border-black" : ""
              }`}
            >
              Home
            </Link>
            <Link
              to="/add"
              className={`hover:text-emerald-200 transition ${
                isActive("/add") ? "border-b-2 border-white" : ""
              }`}
            >
              Add Recipe
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
