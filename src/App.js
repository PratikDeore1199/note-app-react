import NoteGroup from "./components/NoteGroup";
import CreateNote from "./components/CreateNote";
import React, { useState } from "react";
function App() {
  const [notes, setNotes] = useState([]);

  const addNotes = (newNote) => {
    setNotes([...notes, newNote]);
  };
  return (
    <div className=" m-0 p-0  pb-20">
      
        <h1 className="mx-14 mb-7 pt-8">
          <span className="text-center text-5xl font-extrabold italic text-violet-900">
            Note App
          </span>
        </h1>
        <CreateNote addNote={addNotes} />
        <NoteGroup notes={notes} />
      
    </div>
  );
}

export default App;
