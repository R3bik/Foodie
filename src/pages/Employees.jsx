import React,{useState} from 'react'

const Employees = () => {
  const [employees, setEmployees] = useState([]);
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [dateOfJoin, setDateOfJoin] = useState('');

  const handleAddEmployee = (e) => {
    e.preventDefault();

    const newEmployee = {
      id: Date.now(),
      name,
      id,
      phoneNumber,
      dateOfJoin,
    };

    setEmployees((prevEmployees) => [...prevEmployees, newEmployee]);
    setName('');
    setId('');
    setPhoneNumber('');
    setDateOfJoin('');
  };

  const handleDeleteEmployee = (employeeId) => {
    setEmployees((prevEmployees) =>
      prevEmployees.filter((employee) => employee.id !== employeeId)
    );
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-6">Employee Management</h1>

      <form onSubmit={handleAddEmployee} className="mb-6">
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
          <label className="text-gray-700 font-semibold mb-2" htmlFor="id">
            ID
          </label>
          <input
            className="border border-gray-300 p-2"
            type="text"
            id="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col mb-4">
          <label
            className="text-gray-700 font-semibold mb-2"
            htmlFor="phoneNumber"
          >
            Phone Number
          </label>
          <input
            className="border border-gray-300 p-2"
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col mb-4">
          <label
            className="text-gray-700 font-semibold mb-2"
            htmlFor="dateOfJoin"
          >
            Date of Join
          </label>
          <input
            className="border border-gray-300 p-2"
            type="date"
            id="dateOfJoin"
            value={dateOfJoin}
            onChange={(e) => setDateOfJoin(e.target.value)}
            required
          />
        </div>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          type="submit"
        >
          Add Employee
        </button>
      </form>

      <div>
        {employees.length > 0 ? (
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border p-2">Name</th>
                <th className="border p-2">ID</th>
                <th className="border p-2">Phone Number</th>
                <th className="border p-2">Date of Join</th>
                <th className="border p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.id}>
                  <td className="border p-2">{employee.name}</td>
                  <td className="border p-2">{employee.id}</td>
                  <td className="border p-2">{employee.phoneNumber}</td>
                  <td className="border p-2">{employee.dateOfJoin}</td>
                  <td className="border p-2">
                    <button
                      className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600"
                      onClick={() => handleDeleteEmployee(employee.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No employees added yet.</p>
        )}
      </div>
    </div>
  );
}

export default Employees
