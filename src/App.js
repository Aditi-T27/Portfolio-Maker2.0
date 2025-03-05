import React, { useState, useEffect } from "react";
import LeftColumn from "./Components/LeftColumn";
import Canvas from "./Components/Canvas";



const App = () => {
  // {Header...}
  // Navbar
  //{name}
  const[navName,setName]=useState(" Name ");
  // {Font Size}
  const[navNameSize,setNameSize]=useState("16px");
  // {Color}
  const [navLogoColor, setLogoColor] = useState("#ffcc00"); // Warm gold for emphasis  
  const [navItemColor, setItemColor] = useState("#f8f9fa"); // Soft white for clarity  
  const [navBgColor, setBgColor] = useState("#0a192f"); // Deep navy blue for contrast  
  const[navAlign,setNavAlign]=useState("space-evenly");
 
 
  //----------------------------------------------------------------------------------------
  //{Body of Code}
   
  const[saveBtn,setSaveBtn]=useState("No");

  // const [divs, setDivs] = useState([]); // Stores all divs

  const [divs, setDivs] = useState([
    // { id: "a1", content: "Div 1", border:"1px solid Black" ,display:"flex",components:[]},
    { id: "a1",Components:[]},
  
  ]);
  const [selectedDivId, setSelectedDivId] = useState(null); // Selected div

  // Function to add a new div-call it on click of "save" from DivEdit
  const addDiv = (Id) => {
    const newDiv = {
      id: Id,
      // content: "",
      // display:"",
      Components:[]
    };
    setDivs([...divs, newDiv]);
  };

  
    // const addComponents  = ( Component,divId) => {

// {Only use if second method does not work..or else delete from 49 to line 65}

      // const componentMap = {
//   Card: <Card />
// };

// const newComponent = componentMap[Component];
//       console.log(Component);
//       setDivs((prevDivs) =>
//         prevDivs.map((div) =>
//           div.id === divId
//             ? { ...div, Components: [...div.Components, newComponent] }
//             : div
            
//         )
//       );
//     };





const addComponents = (Component, divId, componentProps) => {
  const newCard = {
    id: `card-${Date.now()}`, // Unique card ID
    type: Component,
    props: {} // Default properties
  };


  setDivs((prevDivs) =>
    prevDivs.map((div) =>
      div.id === divId
        ? { ...div, Components: [...div.Components,newCard] }
        : div
    )
  );
};

    

  const [selectedComponents, setSelectedComponents] = useState({
    header: [],
    body: [],
    footer: [],
  });

  const [selectedSection, setSelectedSection] = useState(null); // Track selected section

  const handleComponentSelect = (component) => {
    if (!selectedSection) {
      console.error("No section selected!");
      return;
    }

    setSelectedComponents((prev) => ({
      ...prev,
      [selectedSection]: [...prev[selectedSection], component], // Append component to correct section
    }));
  };

  return (
  
    <div className="flex w-full h-[98vh] border-red-200 border-2">
      <LeftColumn 
        onComponentSelect={handleComponentSelect} 
        onSectionSelect={setSelectedSection} 
        setName={setName}  setNameSize={setNameSize}
        setLogoColor={setLogoColor} setItemColor={setItemColor} setBgColor={setBgColor} setNavAlign={setNavAlign}
        setSaveBtn={setSaveBtn} addDiv={addDiv} addComponents={addComponents}  divs={divs}// Allow LeftColumn to update selected section
      />
      {/* {saveBtn==="yes"?(addDiv(),saveBtn("No")):null} */}
      <Canvas components={selectedComponents} divs={divs} navName={navName} navNameSize={navNameSize} navLogoColor={navLogoColor} navBgColor={navBgColor} navItemColor={navItemColor} navAlign={navAlign}/>
      {/* <Canvas components={selectedComponents} navName={navName} navNameSize={navNameSize} navLogoColor={navLogoColor} navBgColor={navBgColor} navItemColor={navItemColor} navAlign={navAlign}/> */}
    </div>
  );
};

export default App;


// import React, { useState } from "react";
// import LeftColumn from "./Components/LeftColumn";
// import Canvas from "./Components/Canvas";

// const App = () => {
//   // Navbar State
//   const [navName, setName] = useState("Abc");
//   console.log("fromcanvas"+navName);
//   // Track selected components
//   const [selectedComponents, setSelectedComponents] = useState({
//     header: [],
//     body: [],
//     footer: [],
//   });

//   const [selectedSection, setSelectedSection] = useState(null); // Track selected section

//   // Handle Component Selection
//   const handleComponentSelect = (componentName) => {
//     if (!selectedSection) {
//       console.error("No section selected!");
//       return;
//     }

//     // Create an object with component name + dynamic state
//     const newComponent = { name: componentName, state: {} };

//     // If the selected component is Navbar, add navName to state
//     if (componentName === "Navbar") {
//       newComponent.state.getNavName = () => navName; // Store as a function
//     }
//     console.log(newComponent.state.getNavName()); // Always returns the latest navName

//     setSelectedComponents((prev) => ({
//       ...prev,
//       [selectedSection]: [...prev[selectedSection], newComponent], // Append object
//     }));
//   };

//   return (
//     <div className="flex w-full h-[98vh] border-red-200 border-2">
//       <LeftColumn 
//         onComponentSelect={handleComponentSelect} 
//         onSectionSelect={setSelectedSection} 
//         setName={setName} // Allow LeftColumn to update selected section
//       />
//       <Canvas components={selectedComponents} />
//     </div>
//   );
// };

// export default App;
