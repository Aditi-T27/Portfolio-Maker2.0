// import React, { useState } from "react";
// import Card from "./Card";
// import Image from "./Image";
// import TextBox from "./TextBox";
// import BgImage from "./BgImage";

// const componentMap = {
//   Card: Card,
//   Image: Image,
//   TextBox: TextBox,
//   BgImage: BgImage,
// };

//     function DivEdit({setSaveBtn}) {
//   const [divName, setDivName] = useState("");
//   const [savedDivName, setSavedDivName] = useState(null);
//   const [selectedComponent, setSelectedComponent] = useState(null);
// //   const[saveBtn,setSaveBtn]=useState("No");

//   const handleSave = () => {
//     if (divName.trim() === "") {
//       alert("Div name cannot be empty!");
//       return;
//     }
//     setSavedDivName(divName);
   
//   };

//   return (
//     <div className="p-4">
//       <h2 className="text-xl font-bold mb-4">Enter Div Name</h2>

//       {/* Input for entering the Div Name */}
//       <div className="flex mx-2">
//         <input
//           type="text"
//           className="border-2 border-black rounded-md px-2 py-1"
//           placeholder="Enter Div Name"
//           value={divName}
//           onChange={(e) => setDivName(e.target.value)}
//         />
//         <button
//           className={`border-2 rounded-lg ml-2 px-4 py-1 text-white transition ${
//             divName.trim() === ""
//               ? "bg-gray-400 cursor-not-allowed"
//               : "bg-green-500 hover:bg-green-700"
//           }`}
//           onClick={handleSave}
//           disabled={divName.trim() === ""}
//         >
//           Save
//         </button>
//       </div>

//       {/* Display the saved div name and component selection buttons */}
//       {savedDivName && (
        
//         <>
//         {setSaveBtn("Yes")}
//           <h3 className="text-lg font-semibold mt-4">
//             Div Name: <span className="text-blue-500">{savedDivName}</span>
//           </h3>

//           <div className="flex flex-wrap gap-2 mt-4">
//             {Object.keys(componentMap).map((key) => (
//               <button
//                 key={key}
//                 onClick={() => setSelectedComponent(key)}
//                 className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
//               >
//                 {key}
//               </button>
//             ))}
//           </div>

//           {/* Display selected component */}
//           <div className="mt-6 p-4 border rounded-md bg-gray-100">
//             <h3 className="font-semibold">Selected Component:</h3>
//             {selectedComponent ? (
//               React.createElement(componentMap[selectedComponent])
//             ) : (
//               <p className="text-gray-500">No component selected</p>
//             )}
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// export default DivEdit;


import React, { useState, useEffect } from "react";
import Card from "./Card";
import Image from "./Image";
import TextBox from "./TextBox";
import BgImage from "./BgImage";

const componentMap = {
  Image: Image,
  Card: Card,
  TextBox: TextBox,
  BgImage: BgImage,
};

function DivEdit({ setSaveBtn ,addDiv,addComponents}) {
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

  // const compClick=(key)=>{
  //   setSelectedComponent(key);
  //   addComponents(key,divName)
  // };



  const compClick = (key) => {
    setSelectedComponent(key);
    
    const componentProps = {
      Card: { title: "Dynamic Card", content: "This is a unique card!" },
      // Other components and their respective props
    };
  
    addComponents(key, divName, componentProps[key]);  // Passing the props to the component
  };
  

  // Move state update inside useEffect
//   useEffect(() => {
//     if (savedDivName) {
//       setSaveBtn("Yes");
//     }
//   }, [savedDivName]); // Runs only when `savedDivName` changes

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

          <div className="flex flex-wrap gap-2 mt-4">
            {Object.keys(componentMap).map((key) => (
              <button
                key={key}
                onClick={() => compClick(key)}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
              >
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
