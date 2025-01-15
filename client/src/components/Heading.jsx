import React from 'react';

const Heading = ({ searchTerm, setSearchTerm, onSearch }) => {
  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for courses"
        className="mb-4 p-2 border border-gray-300 rounded"
      />
      <button onClick={onSearch} className="p-2 bg-blue-500 text-white rounded">Search</button>
    </div>
  );
};

export default Heading;
