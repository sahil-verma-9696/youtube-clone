import React from "react";
import { useSelector } from "react-redux";

const NoteCard = () => {
  const notes = useSelector(store=>store.notes)
  console.log(notes)
  const content =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur magnam blanditiis possimus esse, dolore non expedita veniam, reprehenderit hello optio soluta! Quibusdam, dignissimos quia culpa fuga expedita cumque ipsa sapiente nihil illum architecto quas.";
  return (
    <div className="w-full h-28 bg-purple-200 rounded-xl p-2">
      <h3 className="text-sm font-bold">{"Covered basic SQL syntax"}</h3>
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
    </div>
  );
};

export default NoteCard;
