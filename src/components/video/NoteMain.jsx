import React from "react";
import NoteCard from "./NoteCard";
import { useSelector } from "react-redux";
import NoNoteFound from "./NoNoteFound";
import { useParams } from "react-router-dom";

const NoteMain = () => { 
  const { id: videoID } = useParams();

  const notes = useSelector(store=>store.notes).filter(item=>item.video_id === videoID)
  return (
    <div className="p-2">
      <ul>
        <li className="bg-purple-200 w-8 text-center rounded-md">All</li>
      </ul>

      <div className="mt-2 flex flex-col gap-4 h-48  overflow-y-scroll">
  
        {
          notes.length === 0 ? <NoNoteFound/>:notes?.map(note=><NoteCard key={note.note_id} note={note}/>)
        }
      </div>
    </div>
  );
};

export default NoteMain;
