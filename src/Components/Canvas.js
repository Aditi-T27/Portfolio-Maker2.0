
import React from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";


const Canvas = ({ components,navName,navNameSize,navLogoColor,navBgColor,navItemColor,navAlign,divs}) => {
  return (
    <div style={{ flex: 1, border: "2px dashed #ccc", minHeight:"auto" }}>
      {/* Render Header, Body, and Footer Sections */}
      <Header components={components.header} navName={navName} navNameSize={navNameSize} navLogoColor={navLogoColor} navBgColor={navBgColor} navItemColor={navItemColor} navAlign={navAlign}/>
      <Body divs={divs} />     
      {/* <Body components={components.body} />      */}
    </div>
  );
};

export default Canvas;


  