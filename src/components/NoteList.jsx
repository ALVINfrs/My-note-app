import React from "react";
import NoteItem from "./NoteItem";

const NoteList = ({ notes, onDelete, onToggleArchive }) => {
  const activeNotes = notes.filter((note) => !note.archived);
  const archivedNotes = notes.filter((note) => note.archived);

  return (
    <div className="note-list">
      <section>
        <h2>Catatan Aktif</h2>
        {activeNotes.length > 0 ? (
          activeNotes.map((note) => (
            <NoteItem
              key={note.id}
              note={note}
              onDelete={onDelete}
              onToggleArchive={onToggleArchive}
            />
          ))
        ) : (
          <p className="empty">Tidak ada catatan aktif</p>
        )}
      </section>
      <section>
        <h2>Catatan Arsip</h2>
        {archivedNotes.length > 0 ? (
          archivedNotes.map((note) => (
            <NoteItem
              key={note.id}
              note={note}
              onDelete={onDelete}
              onToggleArchive={onToggleArchive}
            />
          ))
        ) : (
          <p className="empty">Tidak ada catatan arsip</p>
        )}
      </section>
    </div>
  );
};

export default NoteList;
