import React, { useState } from "react";
import NavEdit from "./EditFunctions/NavEdit";
import DivEdit from "./EditFunctions/Div/DivEdit";

const LeftColumn = ({ setSaveBtn,onComponentSelect, onSectionSelect ,setName,setNameSize, setLogoColor ,setItemColor ,setBgColor,setNavAlign,addDiv,addComponents}) => {
    const [selectedSection, setSelectedSection] = useState(null);
    const [editComp,setEditcomp]=useState("");
    // Navbar editing
    // const [newName,setNewName]=useState(" Name ");
    // const [newNameSize,setNewNameSize]=useState("16px");
    // const [navNewLogoColor, setNewLogoColor] = useState("#ffcc00"); 
    // const [navNewItemColor, setNewItemColor] = useState("#f8f9fa"); // Soft white for clarity  
    // const [navNewBgColor, setNewBgColor] = useState("#0a192f"); 
    // const[navNewAlign,setNewNavAlign]=useState("space-evenly");

  
  // DISPLAY ON LEFT COLUMN ON CLICK A CERTAIN SECTION
    const sectionComponents = {
      header: ["Navbar", "Title", "Logo"],
      body: ["Division", "Image", "Button"],
    //   footer: ["Copyright", "Social Links", "Contact Info"],
    };
  
    const handleSectionClick = (section) => {
      setSelectedSection(section);
      onSectionSelect(section); // Notify App.js about the selected section
    };

    function handler({comp}){
        onComponentSelect(comp);
        setEditcomp(comp);
    }
  
    return (
      <div className="w-1/4 p-4 border-r">
        {!selectedSection ? (
          <>
            <button className="border-2 bg-blue-500 text-white font-bold m-4  border-blue-200 p-4 rounded-lg px-28" onClick={() => handleSectionClick("header")}>Header</button>
            <button className="border-2 bg-blue-500 text-white font-bold m-4  border-blue-200 p-4 rounded-lg px-28" onClick={() => handleSectionClick("body")}>Body</button>
            <button className="border-2 bg-blue-500 text-white font-bold m-4  border-blue-200 p-4 rounded-lg px-28"onClick={() => handleSectionClick("footer")}>Footer</button>
          </>
        ) : (
          <>
            {sectionComponents[selectedSection].map((comp, index) => (
              <button  className="border-2 bg-blue-500 text-white font-bold m-4  border-blue-200 p-4 rounded-lg" key={index} onClick={() => handler({comp})}>
                {comp}
              </button>
             
            ))}
            <button onClick={() => {setSelectedSection(null)
                setEditcomp("");
            } }>Back</button>
            
           
            {editComp === "Navbar" ? <NavEdit setName ={setName } setNameSize={setNameSize} setLogoColor={setLogoColor} setItemColor={setItemColor} setBgColor={setBgColor} setNavAlign={setNavAlign} /> : null}
           
             {editComp === "Division" ? <DivEdit setSaveBtn={setSaveBtn} addDiv={addDiv} addComponents={addComponents}/> : null}
          </>
        )}
      </div>
    );
  };

  export default LeftColumn;




  /* 
     {!editComp ? null :<div className="flex flex-col gap-4 p-4 border-2 border-gray-300 rounded-lg shadow-md bg-white">

  <input 
  type="text" 
  className="border-2 border-gray-400 rounded-md px-3 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
  placeholder="Enter Name"    value={newName}
  onChange={(e) => {setNewName(e.target.value); setName(newName)}}
/>


<input 
type="number" 
className="border-2 border-gray-400 rounded-md px-3 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
placeholder="Enter Number"
value={newNameSize}
onChange={(e) => {
  const value = e.target.value;
  setNewNameSize(value);
  setNameSize(value + "px");
}}
/>


<div className="flex font-bold m-2 justify-between">
Logo-Color
<input 
  type="color" 
  className="w-16 h-10 border-2 border-gray-400 rounded-md cursor-pointer w-72"
  value={navNewLogoColor}
  onChange={(e) => {
    const value = e.target.value;
    setNewLogoColor(value);
    setLogoColor(value);
  }}
/>
</div>

<div className="flex font-bold m-2 justify-between">
Bg-Color
<input 
  type="color" 
  className="w-16 h-10 border-2 border-gray-400 rounded-md cursor-pointer w-64"
  value={navNewBgColor}
  onChange={(e) => {
    const value = e.target.value;
    setNewBgColor(value);
    setBgColor(value);
  }}
/>
</div>

<div className="flex font-bold m-2 justify-between">
Item-Color
<input 
  type="color" 
  className="w-16 h-10 border-2 border-gray-400 rounded-md cursor-pointer w-64"
  value={navNewItemColor}
  onChange={(e) => {
    const value = e.target.value;
    setNewItemColor(value);
    setItemColor(value);
  }}
/>
</div>

<div className="flex font-bold m-2 justify-between items-center">
<span>Content-Align</span>
<select 
  className="w-64 h-10 border-2 border-gray-400 rounded-md cursor-pointer px-2"
  value={navNewAlign}
  onChange={(e) => {
    const value = e.target.value;
    setNewNavAlign(value);
    setNavAlign(value);
  }}
>
  <option value="flex-start">flex-start</option>
  <option value="center">center</option>
  <option value="end">end</option>
  <option value="space-around">space-around</option>
  <option value="space-between">space-between</option>
  <option value="space-evenly">space-evenly</option>
  <option value="stretch">stretch</option>
</select>
</div>

</div>
}
  
  
    
  */