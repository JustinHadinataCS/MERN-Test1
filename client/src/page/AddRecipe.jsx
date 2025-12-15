import { useNavigate } from "react-router-dom";
import RecipeForm from "../components/RecipeForm";

function AddRecipe() {
  const navigate = useNavigate();

  const handleAddRecipe = async (newRecipe) => {
    try {
      const response = await fetch("http://localhost:5000/api/recipes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newRecipe),
      });

      if (response.ok) {
        navigate("/");
      }
    } catch (error) {
      console.error("Error adding recipe:", error);
      alert("Failed to add recipe. Please try again.");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Add New Recipe
        </h1>
        <p className="text-gray-600">
          Fill in the details below to save your recipe
        </p>
      </div>

      <RecipeForm onSubmit={handleAddRecipe} />
    </div>
  );
}

export default AddRecipe;
