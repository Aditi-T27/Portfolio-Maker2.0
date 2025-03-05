

import React, { useState, useEffect } from "react";
import Card from "../Div-components/Card";
import Image from "../Div-components/Image";
import TextBox from "../Div-components/TextBox";
import BgImage from "../Div-components/BgImage";

const componentMap = {
  Image: Image,
  Card: Card,
  TextBox: TextBox,
  BgImage: BgImage,
};
function LocateComponent(cmpId,divName){
    //Here connect to the card editor form via the cmp id and div name this will allow access to edit the 
    // card via cmp edit and make that particular editable again
}

function DivEdit({ setSaveBtn ,addDiv,addComponents,divs}) {
  const [divName, setDivName] = useState("");
  const [savedDivName, setSavedDivName] = useState(null);
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleSave = () => {
    if (divName.trim() === "") {
      alert("Div name cannot be empty!");
      return;
    }
    setSavedDivName(divName);
    addDiv(divName);
  };

  const compClick = (key) => {
    setSelectedComponent(key);
    
    const componentProps = {
      Card: { title: "Dynamic Card", content: "This is a unique card!" },
      // Other components and their respective props
    };
  
    addComponents(key, divName, componentProps[key]);  // Passing the props to the component
  };
  
return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Enter Div Name</h2>

      {/* Input for entering the Div Name */}
      <div className="flex mx-2">
        <input
          type="text"
          className="border-2 border-black rounded-md px-2 py-1"
          placeholder="Enter Div Name"
          value={divName}
          onChange={(e) => setDivName(e.target.value)}
        />
        <button
          className={`border-2 rounded-lg ml-2 px-4 py-1 text-white transition ${
            divName.trim() === ""
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-green-500 hover:bg-green-700"
          }`}
          onClick={handleSave}
          disabled={divName.trim() === ""}
        >
          Save
        </button>
      </div>

      {/* Display the saved div name and component selection buttons */}
      {savedDivName && (
        <>
          <h3 className="text-lg font-semibold mt-4">
            Div Name: <span className="text-blue-500">{savedDivName}</span>
          </h3>
             <div>
             {divs.map((elem) => {
              if (elem.id === divName) {
               return elem.Components.map((component, index) => (
               <div key={index}><button onClick={LocateComponent(component.id,divName)}>{component.id}</button></div>
              ));
                }
               return null;  
              })}
             </div>
             
          <div className="flex flex-wrap gap-2 mt-4">
            {Object.keys(componentMap).map((key) => (
              <button
                key={key}
                onClick={() => compClick(key)}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                {key}
              </button>
            ))}
          </div>

          {/* Display selected component */}
          {/* <div className="mt-6 p-4 border rounded-md bg-gray-100">
            <h3 className="font-semibold">Selected Component:</h3>
            {selectedComponent ? (
              React.createElement(componentMap[selectedComponent])
            ) : (
              <p className="text-gray-500">No component selected</p>
            )}
          </div> */}


        </>
      )}

      
{/* <h3 className="mt-4 font-bold">Select a Div to Add Components</h3>
      <select
        className="border px-2 py-1 mt-2"
        onChange={(e) => setSavedDivName(e.target.value)}
      >
        <option value="">Select a Div</option>
     
        {divs.map((div) => (
          <option key={div.id} value={div.id}>
            {div.id}
          </option>
        ))}
      </select> */}

    </div>
  );
}

export default DivEdit;
