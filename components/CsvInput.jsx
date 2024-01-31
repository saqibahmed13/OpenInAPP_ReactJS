import React, { useState, useRef } from "react";
import Image from "next/image";
import excel from "@/public/icons/excel.svg";
import * as XLSX from "xlsx";

const CsvInput = ({ setData, loading }) => {
  const [fileSelected, setFileSelected] = useState(false);
  const [selectedFileName, setSelectedFileName] = useState("");
  // const [data, setData] = useState();
  const [inputKey, setInputKey] = useState(0);
  const fileInputRef = useRef(null);

  const handleFileUpload = (e) => {
    if (!fileSelected) {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onload = (e) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: "array" });
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

        setData(jsonData);
        setFileSelected(true);
        setSelectedFileName(file.name);
      };

      reader.readAsArrayBuffer(file);
    }
  };

  const handleRemoveFile = (e) => {
    if (fileSelected) {
      e.stopPropagation();
    }
    setSelectedFileName("");
    setData([]);
    setFileSelected(false);
    setInputKey((prevKey) => prevKey + 1);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="flex items-center justify-center w-full">
      <label
        htmlFor="dropzone-file"
        className={`flex flex-col items-center justify-center w-full h-56 border   border-gray-300 border-dashed rounded-lg cursor-pointer 
          bg-gray-50 hover:bg-gray-100
        `}
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <Image src={excel} />
          {fileSelected && (
            <p
              className="my-2 text-sm text-red-500 cursor-pointer"
              onClick={handleRemoveFile}
            >
              Remove
            </p>
          )}
          <p className="my-2 text-sm text-gray-500">
            {fileSelected
              ? `${selectedFileName}`
              : "Drop your excel sheet here or "}
              {!fileSelected && <span className="text-purple-500"> browse </span>}
            
          </p>
        </div>
        <input
          id="dropzone-file"
          type="file"
          key={inputKey}
          ref={fileInputRef}
          className="hidden"
          onChange={handleFileUpload}
          disabled={fileSelected} 
        />
      </label>
    </div>
  );
};

export default CsvInput;
