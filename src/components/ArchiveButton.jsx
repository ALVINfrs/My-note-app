import React from "react";

const ArchiveButton = ({ archived, onClick }) => {
  return (
    <button className="archive-button" onClick={onClick}>
      {archived ? "Pindahkan" : "Arsipkan"}
    </button>
  );
};

export default ArchiveButton;
