import React from "react";
import { showFormattedDate } from "../utils/helper";
import { FiArchive, FiTrash, FiInbox } from "react-icons/fi";

const NoteItem = ({ note, onDelete, onToggleArchive }) => {
  return (
    <div className="note-item">
      <h3>{note.title}</h3>
      <p>{note.body}</p>
      <small>{showFormattedDate(note.createdAt)}</small>
      <div className="note-actions">
        <button onClick={() => onToggleArchive(note.id)}>
          {note.archived ? <FiInbox /> : <FiArchive />}
        </button>
        <button onClick={() => onDelete(note.id)}>
          <FiTrash />
        </button>
      </div>
    </div>
  );
};

export default NoteItem;
