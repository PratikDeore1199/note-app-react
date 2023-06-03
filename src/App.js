import Note from "./components/Note";
import CreateNote from "./components/CreateNote";
import React, { useState } from "react";
import Modal from "./components/Modal";
function App() {
  const [newNote, setNewNote] = useState("");
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(-1);
  const [isEditable, setIsEditable] = useState(false);
  const handleInputChange = (e) => {
    setNewNote(e.target.value);
  };
  const deleteNote=()=>{
    setNotes((prev)=>{
      return notes.filter((notes,i)=>{
        return i!== activeNote;
      })
    })
    setActiveNote(-1)
  }

  const addNotes = (newNote) => {
    setNotes([...notes, newNote]);
  };

  const handleAddNote = () => {
    if (newNote.trim() !== "") {
      addNotes(newNote);
      setNewNote("");
    }
  };

  return (
    <div className=" m-0 p-0  pb-20">
      <h1 className="mx-14 mb-7 pt-8">
        <span className="text-center text-5xl font-extrabold italic text-violet-900">
          Note App
        </span>
      </h1>
      <CreateNote
        addNote={addNotes}
        newNote={newNote}
        setNewNot={setNewNote}
        handleAddNote={handleAddNote}
        handleInputChange={handleInputChange}
      />
      {notes.map((note, i) => {
        return (
          <Note
            key={i}
            note={note}
            onClick={() => {
              setActiveNote(i);
            }}
          />
        );
      })}
      <Modal
        show={activeNote > -1}
        onClose={() => {
          setActiveNote(-1);
        }}
      >
        {isEditable ? (
          <textarea
            onChange={(e) => {
              const editedNotes = [...notes];
              editedNotes[activeNote] = e.target.value;
              setNotes(editedNotes);
            }}
            className="w-full"
          >
            {notes[activeNote]}
          </textarea>
        ) : (
          <p
            onDoubleClick={() => {
              setIsEditable(true);
            }}
          >
            {notes[activeNote]}
          </p>
        )}
        <button 
          onClick={deleteNote}
          className="p-0.5 bg-red-600 rounded-md float-right"
          >Delete</button>
      </Modal>
    </div>
  );
}

export default App;
