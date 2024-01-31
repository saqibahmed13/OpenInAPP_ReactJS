"use client";
// RowComponent.jsx
import React, { useState } from "react";
import "./table.css";

const RowComponent = ({ index, link, prefix, addTags, onTagSelection }) => {
  const [selectedTags, setSelectedTags] = useState([]);

  const handleTagSelection = (e) => {
    const selectedTag = e.target.value;

    if (selectedTags.includes(selectedTag)) {
      setSelectedTags(selectedTags.filter((tag) => tag !== selectedTag));
    } else {
      setSelectedTags([...selectedTags, selectedTag]);
    }

    onTagSelection(link, selectedTags);
  };

  const handleRemoveTag = (tag) => {
    setSelectedTags(selectedTags.filter((selectedTag) => selectedTag !== tag));
    onTagSelection(link, selectedTags);
  };

  return (
    <tr className="border border-white rounded-2xl ">
      <td className="p-4 bg-white">{index + 1}</td>
      <td className="p-4 bg-white text-left text-blue-500 underline pb-1">
        <a href={link} target="_blank" rel="noopener noreferrer">
          {link}
        </a>
      </td>
      <td className="p-4 bg-white  text-left">{prefix}</td>
      <td className="p-4 bg-white text-left overflow-x-auto max-w-[200px]">
        {" "}
        
        <select
          className="border rounded-lg p-1 px-3 appearance-none bg-white border-gray-300 text-gray-700"
          onChange={handleTagSelection}
          value=""
        >
          <option value="" disabled>
            Select Tag
          </option>
          {addTags &&
            addTags.split(", ").map((tag, tagIndex) => (
              <option
                key={tagIndex}
                value={tag}
                className="p-2 rounded-lg border hover:border-gray-100 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
              >
                {tag}
              </option>
            ))}
        </select>
      </td>
      <td className="p-4 bg-white text-left overflow-x-auto max-w-[200px]">
        {" "}
        {/* Set max width for horizontal scrolling */}
        {selectedTags.map((selectedTag, tagIndex) => (
          <span
            key={tagIndex}
            className="bg-blue-500 text-white rounded-md p-1 m-1"
          >
            {selectedTag}
            <span
              className="cursor-pointer ml-1"
              onClick={() => handleRemoveTag(selectedTag)}
            >
              &#10006;
            </span>
          </span>
        ))}
      </td>
    </tr>
  );
};

export default RowComponent;
