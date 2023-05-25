import { useState } from "react";

const CreateNote = ({ addNote }) => {
  const [newNote, setNewNote] = useState("");

  const handleInputChange = (e) => {
    setNewNote(e.target.value);
  };

  const handleAddNote = () => {
    if (newNote.trim() !== "") {
      addNote(newNote);
      setNewNote("");
    }
  };

  return (
    <div className="flex justify-around items-center bg-slate-600 mt-14 mx-10 py-10 border shadow-lg rounded-xl">
      <textarea
        className="shadow-sm w-2/5 border border-gray-700 rounded-md"
        value={newNote}
        onChange={handleInputChange}
        placeholder=" Create New Note"
      />
      <button
        className="p-2 border border-gray-700 rounded-xl bg-green-600 hover:bg-blue-700"
        onClick={handleAddNote}
      >
        Add Note
      </button>
    </div>
  );
};

export default CreateNote;
