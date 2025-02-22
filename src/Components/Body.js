// import React from "react";
// import Image from './BgImage';
// import Division from "./Division";
// import Card from "./EditFunctions/Div/Card";
// const componentMap={
//     // Image: Image,
//     Division:Division
// }


  
// const componentMap2 = {
//   Card: Card,  // Store the component constructor (function)
// };

//   const NewComponent = componentMap2[Component]; // Get the component constructor from the map

//   // Dynamically create the new component with the props passed
//   // const newComponentInstance = React.createElement(Component, componentProps);

// //Rather let it display the div blocks as a whole array...
// function Body({ components,divs }){
  
   

    
// const cMap = {
//   Card: Card,  // Store the component constructor (function)
// };

//   // const NewComponent = componentMap[Component.type].; // Get the component constructor from the map

//   // Dynamically create the new component with the props passed
//   // const newComponentInstance = React.createElement(componentMap[Component.type], componentProps);



//   return(
// <>  
//   <div className="border-b">
//     <h2>Body</h2>
//     {/* {components &&
//       components.map((comp, index) => {
//         const Component = componentMap[comp];
//         return Component ? <Component key={index} /> : null;
//       })}
//        */}
//         <div>
//     {divs.map((div) => (
//       <div style={{border:div.border , display:"flex", flexWrap:"wrap", justifyContent:"justify-between"}} key={div.id} id={div.id} className="my-div">
//           {div.Components.map((Component, index) => (

//             React.createElement(componentMap[Component.type], componentProps);


//   // <div key={index}>
//   //   {Component} 
//   //    {/* This will render the actual component */}
//   // </div>
// ))}
        
//       </div>
//     ))}
//   </div>
//   </div>
//   </>
// );
// }
// export default Body;


import React from "react";
import Image from "./BgImage";
import Division from "./Division";
import Card from "./EditFunctions/Div/Card";

const componentMap = {
  Image: Image,
  Division: Division,
  Card: Card, // Store the component function itself
};

function Body({ divs }) {
  return (
    <>
      <div className="border-b">
        <h2>Body</h2>
        <div>
          {divs.map((div) => (
            <div
              key={div.id}
              id={div.id}
              className="my-div"
              style={{
                border: div.border,
                display: "flex",
                flexWrap: "wrap",
                 // Correct CSS property
              }}
            >
              {div.Components.map((component, index) => {
                const ComponentType = componentMap[component.type];

                return ComponentType ? (
                  <ComponentType key={component.id || index} id={component.id} {...component.props} /> 
                ) : null;
              })}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Body;
