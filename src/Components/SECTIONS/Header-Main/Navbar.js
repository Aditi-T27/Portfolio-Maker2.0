import React from "react";


export default function Navbar({getNavName,navNameSize,navLogoColor,navBgColor,navItemColor,navAlign}) {



    return (
        <nav  
            //bg-gray-400
            style={{
                backgroundColor:navBgColor,
                justifyContent:navAlign
            }}
            className="flex md:h-12  h-13  items-center"
        >
            <div className="md:ml-7 ml-10"  style={{fontSize:navNameSize,color:navLogoColor}}>{getNavName()}</div>
            <ul className="md:flex hidden"   style={{
                  color:navItemColor  
                }}>
              
                <li className="mx-6">About</li>
                <li className="mx-4">Merits</li>
                <li className="mx-4">Contact Me</li>
            </ul>
            <div className="md:hidden">
                <a className="text-5xl text-gray-700 mr-5" href="#" dangerouslySetInnerHTML={{ __html: "&#8801;" }}></a>
            </div>
        </nav>
    );

}
    // const Navbar = ({ getNavName }) => {
    //     return (
    //       <div className="md:ml-7 ml-10">
    //         Navbar: {getNavName()} {/* ✅ Always fetches the latest value */}
    //       </div>
    //     );
    //   };
      
    //   export default Navbar;
      
  