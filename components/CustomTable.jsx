// CustomTable.jsx
import React, { useState } from "react";
import RowComponent from "./RowComponent";

const CustomTable = ({ data }) => {
  const [selectedTags, setSelectedTags] = useState([]);

  const handleTagSelection = (link, selectedTag) => {
    if (selectedTags.includes(selectedTag)) {
      setSelectedTags((prevTags) => prevTags.filter((tag) => tag !== selectedTag));
    } else {
      setSelectedTags((prevTags) => [...prevTags, selectedTag]);
    }
  };

  if (data.length === 0) {
    return <p>No data available.</p>;
  }

  return (
    <div className="mt-4 bg-gray-100 rounded-lg w-11/12 overflow-x-auto p-4">
      <table className="w-full bg-gray-100 ">
        <thead>
          <tr>
            <th className="p-2 text-left">SI NO.</th>
            <th className="p-2 text-left">Links</th>
            <th className="p-2 text-left">Prefix</th>
            <th className="p-2 text-left">Add Tags</th>
            <th className="p-2 text-left">Selected Tags</th>
          </tr>
        </thead>
        <tbody>
          {data.slice(1).map((row, index) => (
            <>
            <RowComponent
              key={index}
              index={index}
              link={row[1]}  
              prefix={row[2]} 
              addTags={row[3]}  
              selectedTags={selectedTags}
              onTagSelection={handleTagSelection}
              />
              <tr className="bg-gray-100 h-4"></tr>
              </>
          ))}
          
        </tbody>
      </table>
    </div>
  );
};

export default CustomTable;
