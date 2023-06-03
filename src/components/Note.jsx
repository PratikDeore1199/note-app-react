import React from "react";


const Note = (props) => {
  return (
    <div onClick={props.onClick} >
    <div className="flex flex-col justify-center items-center mt-10 bg-yellow-200 rounded-xl mx-20 mb ">
      <p 
      className="p-3 flex flex-row justify-between items-center bg-violet-800 w-1/2 mx-12 my-3 rounded-md font-bold text-sm text-center italic ">
        {props.note}

      </p>
      <span className=" flex flex-row justify-around gap-2">
        
        </span>
    </div>
    </div>
  );
};

export default Note;
