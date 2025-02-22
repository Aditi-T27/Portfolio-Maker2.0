import React from "react";
const Card = ({ title, content ,id}) =>{
    return(
        <>
          <div id= {id} className="block min-h-90 w-[300px] min-h-[340px] m-2 border-dashed border-2 rounded-md bg-white">
            <div>
                <img  className="object-cover w-full h-48" src="https://images.pexels.com/photos/30739081/pexels-photo-30739081/free-photo-of-delicious-strawberry-cake-with-elegant-tulips.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" /></div>
            <div className="w-full text-center mt-4 border-y-2 border-dotted">{title}</div>
            <div style={{ marginTop:"2px" }}><p>{content}</p></div>
          </div>
        </>
    )
}
export default Card;

