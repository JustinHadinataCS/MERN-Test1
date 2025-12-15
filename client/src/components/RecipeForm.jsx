import { useState } from "react";

function RecipeForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !ingredients || !instructions) {
      alert("Please fill in all fields");
      return;
    }

    const ingredientsArray = ingredients
      .split("\n")
      .map((i) => i.trim())
      .filter((i) => i !== "");

    onSubmit({
      name,
      ingredients: ingredientsArray,
      instructions,
    });

    setName("");
    setIngredients("");
    setInstructions("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto"
    >
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
          Recipe Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
          placeholder="e.g., Chocolate Chip Cookies"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="ingredients"
          className="block text-gray-700 font-medium mb-2"
        >
          Ingredients (one per line)
        </label>
        <textarea
          id="ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          rows="6"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
          placeholder="2 cups flour&#10;1 cup sugar&#10;1/2 cup butter"
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="instructions"
          className="block text-gray-700 font-medium mb-2"
        >
          Instructions
        </label>
        <textarea
          id="instructions"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          rows="8"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
          placeholder="Describe how to make this recipe..."
        />
      </div>

      <button
        type="submit"
        className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition font-medium"
      >
        Add Recipe
      </button>
    </form>
  );
}

export default RecipeForm;
