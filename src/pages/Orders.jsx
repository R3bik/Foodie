import React, {useState} from 'react'

const Orders = () => {
  const [items, setItems] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0);
  const [paid, setPaid] = useState(false);

  const handleAddItem = (e) => {
    e.preventDefault();

    const newItem = {
      id: Date.now(),
      name,
      description,
      quantity,
      price,
      paid,
    };

    setItems((prevItems) => [...prevItems, newItem]);
    setName('');
    setDescription('');
    setQuantity(1);
    setPrice(0);
    setPaid(false);
  };

  const handleDeleteItem = (itemId) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handlePriceChange = (itemId, newPrice) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, price: newPrice } : item
      )
    );
  };

  const handlePaidChange = (itemId) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, paid: !item.paid } : item
      )
    );
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-6">Orders</h1>

      <form onSubmit={handleAddItem} className="mb-6">
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
          <label
            className="text-gray-700 font-semibold mb-2"
            htmlFor="quantity"
          >
            Quantity
          </label>
          <div className="flex">
            <button
              className="border border-gray-300 p-2 rounded-l"
              onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
            >
              -
            </button>
            <input
              className="border-t border-b border-gray-300 px-2 py-1"
              type="number"
              id="quantity"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              required
            />
            <button
              className="border border-gray-300 p-2 rounded-r"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
          </div>
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
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          type="submit"
        >
          Add Item
        </button>
      </form>

      <div>
        {items.map((item) => (
          <div className="border border-gray-300 p-4 mb-4" key={item.id}>
            <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
            <p className="text-gray-600">{item.description}</p>
            <div className="flex items-center mt-4">
              <div className="flex items-center mr-4">
                <button
                  className="border border-gray-300 p-2 rounded-l"
                  onClick={() =>
                    handleQuantityChange(
                      item.id,
                      item.quantity > 1 ? item.quantity - 1 : 1
                    )
                  }
                >
                  -
                </button>
                <input
                  className="border-t border-b border-gray-300 px-2 py-1"
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) =>
                    handleQuantityChange(item.id, parseInt(e.target.value))
                  }
                  required
                />
                <button
                  className="border border-gray-300 p-2 rounded-r"
                  onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                >
                  +
                </button>
              </div>
              <div className="flex items-center mr-4">
                <span className="text-gray-700 font-semibold">Price:</span>
                <input
                  className="border border-gray-300 p-2 ml-2"
                  type="number"
                  min="0"
                  step="0.01"
                  value={item.price}
                  onChange={(e) =>
                    handlePriceChange(item.id, parseFloat(e.target.value))
                  }
                  required
                />
              </div>
              <button
                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 ml-auto"
                onClick={() => handleDeleteItem(item.id)}
              >
                Delete
              </button>
            </div>
            <div className="flex items-center mt-2">
              <input
                type="checkbox"
                id={`paid-${item.id}`}
                checked={item.paid}
                onChange={() => handlePaidChange(item.id)}
              />
              <label
                className="text-gray-700 font-semibold ml-2"
                htmlFor={`paid-${item.id}`}
              >
                Paid
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Orders
