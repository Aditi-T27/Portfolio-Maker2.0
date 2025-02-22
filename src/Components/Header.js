import React from "react";
import Navbar from "./Navbar";

// const componentMap = {
//   Navbar: Navbar
// };

const componentMap = {
  Navbar: (props) => <Navbar {...props} />,
};



// Header Component
// const Header = ({ components,navName}) => (
//   <div className="border-b">
//     <h2>Header</h2>
//     {components &&
//       components.map((comp, index) => {
//         const Component =  componentMap[comp]
        
//         return Component ? <Component key={index} navName={navName} />: null;
//       })}
//   </div>
// );

// export default Header;

const Header = ({ components, navName,navNameSize,navLogoColor,navBgColor, navItemColor,navAlign}) => (
  <div className="border-b">
    <h2>Header</h2>
    {components &&
      components.map((comp, index) => {
        const Component = componentMap[comp];

        if (!Component) return null; // Avoid crashes if the component is undefined

        return (
          <Component
            key={index}
            navNameSize={navNameSize} navLogoColor={navLogoColor} navBgColor={navBgColor} navItemColor={navItemColor} navAlign={navAlign}
            getNavName={() => navName } // ✅ Always fetch latest navName
          />
        );
      })}
  </div>
);

export default Header;

// // Body Component
// export const Body = ({ components }) => (
//   <div className="border-b p-2">
//     <h2>Body</h2>
//     {components &&
//       components.map((comp, index) => {
//         const Component = componentMap[comp];
//         return Component ? <Component key={index} /> : null;
//       })}
//   </div>
// );

// // Footer Component
// export const Footer = ({ components }) => (
//   <div className="p-2">
//     <h2>Footer</h2>
//     {components &&
//       components.map((comp, index) => {
//         const Component = componentMap[comp];
//         return Component ? <Component key={index} /> : null;
//       })}
//   </div>
// );
