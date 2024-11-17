import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteNote, toggleEditMode, updateNote } from "../../store/noteStlice"; // Ensure correct import for updateNote
import { timeAgo } from "./../../utils/utilityFun";
import { useParams } from "react-router-dom";
const NoteCard = ({ note }) => {
  
  const dispatch = useDispatch();
  const { content, createdAt, note_id, timeStamp, title, isEditing } = note;

  // State to track changes in input fields
  const [newTitle, setNewTitle] = useState(title);
  const [newContent, setNewContent] = useState(content);

  // Handle change in the title input field
  const handleTitleChange = (e) => {
    setNewTitle(e.target.value);
  };

  // Handle change in the content textarea
  const handleContentChange = (e) => {
    setNewContent(e.target.value);
  };

  // Handle note delete
  function handleNoteDelete() {
    dispatch(deleteNote({note_id}))
  }
  // Handle save or edit action
  const handleNoteSave = () => {
    if (isEditing) {
      // Dispatch updateNote action to save changes
      dispatch(
        updateNote({
          note_id,
          title: newTitle,
          content: newContent,
        })
      );
    }

    // Toggle edit mode
    dispatch(toggleEditMode({ note_id }));
  };

  return (
    <div
      className={`w-full h-fit bg-purple-200 rounded-xl p-2 ${
        isEditing ? "border border-black shadow-md" : ""
      }`}
    >
      <div className="flex justify-between items-center">
        {isEditing ? (
          <input
            onChange={handleTitleChange}
            value={newTitle} // Bind the state to the input field
            className="w-fit bg-transparent text-sm font-bold outline-none"
            type="text"
            autoFocus
            placeholder="Enter the title"
          />
        ) : (
          <h2 className="text-sm font-bold">{title}</h2>
        )}
        <p className="text-xs">{timeAgo(createdAt)}</p>
      </div>

      {isEditing ? (
        <textarea
          onChange={handleContentChange}
          value={newContent} // Bind the state to the textarea
          className="w-full mt-2 text-xs text-gray-500 bg-purple-100 rounded-md p-2"
          placeholder="Take your notes"
        ></textarea>
      ) : (
        <p className="mt-2 text-xs text-gray-500 bg-purple-100 rounded-md p-2">
          {content.length > 250 ? (
            <span>
              {content.substring(0, 150)}
              <span className="text-blue-700">{" more..."}</span>
            </span>
          ) : (
            content
          )}
        </p>
      )}

      <div>
        <button onClick={handleNoteDelete} className="text-sm text-red-500">
          Delete
        </button>
        <button
          onClick={handleNoteSave}
          className="float-end text-indigo-500 text-sm"
        >
          {!isEditing ? "Edit" : "Save"}
        </button>
      </div>
    </div>
  );
};

export default NoteCard;
