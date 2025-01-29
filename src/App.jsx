import React, { useState, useEffect } from "react";
import { getInitialData } from "./utils/data";
import NoteList from "./components/NoteList";
import NoteForm from "./components/NoteForm";
import SearchBar from "./components/SearchBar";
import ThemeToggle from "./components/ThemeToggle";
import "./App.css";

const App = () => {
  const [notes, setNotes] = useState(getInitialData());
  const [searchQuery, setSearchQuery] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const toggleArchiveNote = (id) => {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, archived: !note.archived } : note
      )
    );
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app">
      <header>
        <h1>My Note App 📝</h1>
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
        <ThemeToggle
          darkMode={darkMode}
          toggle={() => setDarkMode(!darkMode)}
        />
      </header>
      <main>
        <NoteForm onAddNote={addNote} />
        <NoteList
          notes={filteredNotes}
          onDelete={deleteNote}
          onToggleArchive={toggleArchiveNote}
        />
      </main>
    </div>
  );
};

export default App;
