import React, { useState } from 'react'
import { RiAddCircleLine, RiDeleteBinLine } from 'react-icons/ri';

const Menu = () => {
    const defaultCategories = ['Breakfast', 'Lunch', 'Dinner'];
    const [categories, setCategories] = useState([...defaultCategories]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [foodItems, setFoodItems] = useState([]);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [editCategory, setEditCategory] = useState('');
    const [expandedCategory, setExpandedCategory] = useState(null);
  
    const handleAddFoodItem = (e) => {
      e.preventDefault();
  
      if (!selectedCategory) {
        alert('Please select a category.');
        return;
      }
  
      const newFoodItem = {
        id: Date.now(),
        name,
        price,
        description,
        image,
        category: selectedCategory,
      };
  
      setFoodItems((prevFoodItems) => [...prevFoodItems, newFoodItem]);
      setName('');
      setPrice('');
      setDescription('');
      setImage('');
    };
  
    const handleDeleteFoodItem = (foodItemId) => {
      setFoodItems((prevFoodItems) =>
        prevFoodItems.filter((item) => item.id !== foodItemId)
      );
    };
  
    const handleAddCategory = (e) => {
      e.preventDefault();
  
      if (!editCategory) {
        alert('Please enter a category name.');
        return;
      }
  
      if (categories.includes(editCategory)) {
        alert('Category already exists.');
        return;
      }
  
      setCategories((prevCategories) => [...prevCategories, editCategory]);
      setEditCategory('');
    };
  
    const handleDeleteCategory = (category) => {
      setCategories((prevCategories) =>
        prevCategories.filter((cat) => cat !== category)
      );
      setExpandedCategory(null);
    };
  
    const handleCategoryChange = (e, category) => {
      const updatedCategories = categories.map((cat) =>
        cat === category ? e.target.value : cat
      );
      setCategories(updatedCategories);
    };
  
    const handleExpandCategory = (category) => {
      setExpandedCategory(category);
    };
  
    const handleCollapseCategory = () => {
      setExpandedCategory(null);
    };
  
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-semibold mb-6">Restaurant Menu</h1>
  
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Categories</h3>
          <form onSubmit={handleAddCategory} className="flex items-center mb-2">
            <input
              className="border border-gray-300 p-2 mr-2"
              type="text"
              placeholder="Enter category"
              value={editCategory}
              onChange={(e) => setEditCategory(e.target.value)}
              required
            />
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              type="submit"
            >
              <RiAddCircleLine className="inline-block mr-1" />
              Add Category
            </button>
          </form>
          <div>
            {categories.map((category, index) => (
              <div className="flex items-center mb-2" key={category}>
                <input
                  className="border border-gray-300 p-2 mr-2"
                  type="text"
                  value={category}
                  onChange={(e) => handleCategoryChange(e, category)}
                  required
                />
                {defaultCategories.includes(category) && (
                  <button
                    className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600"
                    onClick={() => handleDeleteCategory(category)}
                  >
                    <RiDeleteBinLine className="inline-block" />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
  
        <div>
          <h3 className="text-xl font-semibold mb-2">Food Items</h3>
          <form onSubmit={handleAddFoodItem} className="mb-4">
            <div className="flex flex-col mb-4">
              <label className="text-gray-700 font-semibold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="border border-gray-300 p-2"
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col mb-4">
              <label
                className="text-gray-700 font-semibold mb-2"
                htmlFor="price"
              >
                Price
              </label>
              <input
                className="border border-gray-300 p-2"
                type="number"
                id="price"
                min="0"
                step="0.01"
                value={price}
                onChange={(e) => setPrice(parseFloat(e.target.value))}
                required
              />
            </div>
            <div className="flex flex-col mb-4">
              <label
                className="text-gray-700 font-semibold mb-2"
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                className="border border-gray-300 p-2 h-24"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className="text-gray-700 font-semibold mb-2" htmlFor="image">
                Image URL
              </label>
              <input
                className="border border-gray-300 p-2"
                type="text"
                id="image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className="text-gray-700 font-semibold mb-2" htmlFor="category">
                Category
              </label>
              <select
                className="border border-gray-300 p-2"
                id="category"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                required
              >
                <option value="" disabled>
                  Select a category
                </option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              type="submit"
            >
              <RiAddCircleLine className="inline-block mr-1" />
              Add Food Item
            </button>
          </form>
  
          <div>
            {categories.map((category) => (
              <div key={category} className="mb-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold mb-2">{category}</h3>
                  {expandedCategory === category ? (
                    <button
                      className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400"
                      onClick={handleCollapseCategory}
                    >
                      Collapse
                    </button>
                  ) : (
                    <button
                      className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400"
                      onClick={() => handleExpandCategory(category)}
                    >
                      Expand
                    </button>
                  )}
                </div>
                {expandedCategory === category && (
                  <div className="grid grid-cols-3 gap-4">
                    {foodItems
                      .filter((item) => item.category === category)
                      .map((foodItem) => (
                        <div className="border border-gray-300 rounded p-4 flex flex-col items-center" key={foodItem.id}>
                          <img
                            className="w-full h-32 object-cover mb-2 rounded"
                            src={foodItem.image}
                            alt={foodItem.name}
                          />
                          <h3 className="text-lg font-semibold mb-1">{foodItem.name}</h3>
                          <p className="text-gray-600 mb-2">{foodItem.description}</p>
                          <p className="font-semibold mb-2">${foodItem.price}</p>
                          <button
                            className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600"
                            onClick={() => handleDeleteFoodItem(foodItem.id)}
                          >
                            <RiDeleteBinLine className="inline-block" />
                          </button>
                        </div>
                      ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  
}

export default Menu
