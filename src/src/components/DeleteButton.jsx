import React from "react";

const DeleteButton = ({ onClick }) => {
  return (
    <button className="delete-button" onClick={onClick}>
      Hapus
    </button>
  );
};

export default DeleteButton;
