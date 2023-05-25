import React from "react";

const NoteGroup = ({ notes }) => {
    return (
        <ul className="flex flex-col justify-center items-center mt-10 bg-yellow-200 rounded-xl mx-20 mb " >
            {notes.map((note,i)=>(
                <li
                 className="p-3 bg-violet-800 w-1/2 mx-12 my-3 rounded-md font-bold text-sm text-center italic "
                 key={i}>{note}</li>
            ))}
        </ul>
    )
}

export default NoteGroup