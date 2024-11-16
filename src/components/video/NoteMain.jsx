import React from "react";
import NoteCard from "./NoteCard";

const NoteMain = () => {
  return (
    <div className="p-2">
      <ul>
        <li className="bg-purple-200 w-8 text-center rounded-md">All</li>
      </ul>

      <div className="mt-2 flex flex-col gap-4 h-48  overflow-y-scroll">
        <NoteCard />
        <NoteCard />
        <NoteCard />
      </div>
    </div>
  );
};

export default NoteMain;
