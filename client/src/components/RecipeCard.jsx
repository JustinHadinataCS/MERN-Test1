import { Link } from "react-router-dom";

function RecipeCard({ recipe, onDelete }) {
  const handleDelete = (e) => {
    e.preventDefault();
    if (window.confirm("Are you sure you want to delete this recipe?")) {
      onDelete(recipe._id);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition p-6 border border-gray-200">
      <Link to={`/recipe/${recipe._id}`}>
        <h3 className="text-xl font-bold text-gray-800 mb-2 hover:text-emerald-600 transition">
          {recipe.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {recipe.ingredients.slice(0, 3).join(", ")}
          {recipe.ingredients.length > 3 && "..."}
        </p>
      </Link>

      <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200">
        <Link
          to={`/recipe/${recipe._id}`}
          className="text-emerald-600 hover:text-emerald-700 font-medium text-sm"
        >
          View Details →
        </Link>
        <button
          onClick={handleDelete}
          className="text-red-500 hover:text-red-700 font-medium text-sm"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default RecipeCard;
