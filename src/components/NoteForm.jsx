import React, { useState } from "react";
import { FiPlusCircle } from "react-icons/fi";

const NoteForm = ({ onAddNote }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [remainingChars, setRemainingChars] = useState(50);

  const handleTitleChange = (e) => {
    const value = e.target.value;
    if (value.length <= 50) {
      setTitle(value);
      setRemainingChars(50 - value.length);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && body) {
      const newNote = {
        id: +new Date(),
        title,
        body,
        archived: false,
        createdAt: new Date().toISOString(),
      };
      onAddNote(newNote);
      setTitle("");
      setBody("");
      setRemainingChars(50);
    }
  };

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <p className="char-counter">Sisa karakter: {remainingChars}</p>
      <input
        type="text"
        placeholder="Judul"
        value={title}
        onChange={handleTitleChange}
        required
      />
      <textarea
        placeholder="Isi catatan"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        required
      ></textarea>
      <button type="submit">
        <FiPlusCircle /> Tambah Catatan
      </button>
    </form>
  );
};

export default NoteForm;
