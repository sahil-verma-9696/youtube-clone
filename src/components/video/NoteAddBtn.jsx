import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch } from "react-redux";
import { addEmptyNote, toggleEditMode } from "./../../store/noteStlice";
import { useParams } from "react-router-dom";

const NoteAddBtn = () => {
  const { id: videoID } = useParams();
  const dispatch = useDispatch();
  function handleCreateNote() {
    dispatch(addEmptyNote({
      video_id : videoID
    }));
    // dispatch(toggleEditMode())
  }
  return (
    <button
      onClick={handleCreateNote}
      className="size-7 rounded-full bg-purple-200"
    >
      <FontAwesomeIcon size="lg" icon={faPlus} />
    </button>
  );
};

export default NoteAddBtn;
