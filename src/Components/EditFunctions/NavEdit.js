import React, { useState } from "react";




function NavEdit({setName,setNameSize, setLogoColor ,setItemColor ,setBgColor,setNavAlign}){
    
    const [newName,setNewName]=useState("Name");
    const [newNameSize,setNewNameSize]=useState("16px");
    const [navNewLogoColor, setNewLogoColor] = useState("#ffcc00"); 
    const [navNewItemColor, setNewItemColor] = useState("#f8f9fa"); // Soft white for clarity  
    const [navNewBgColor, setNewBgColor] = useState("#0a192f"); 
    const[navNewAlign,setNewNavAlign]=useState("space-evenly");
    return(
        <>
            <div className="flex flex-col gap-4 p-4 border-2 border-gray-300 rounded-lg shadow-md bg-white">
  {/* Name Input */}
  <input 
    type="text" 
    className="border-2 border-gray-400 rounded-md px-3 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
    placeholder="Enter Name"    value={newName}
    onChange={(e) => {setNewName(e.target.value); setName(newName)}}
  />

  {/* Number Input */}
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

  {/* Color Picker */}
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
      </>
    )
}
export default NavEdit