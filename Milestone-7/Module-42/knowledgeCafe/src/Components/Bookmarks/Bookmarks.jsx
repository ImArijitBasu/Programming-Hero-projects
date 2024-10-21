import React from "react";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks }) => {
  return (
    <div className="p-4 h-full rounded-md bg-slate-100">
      <div className="flex justify-center capitalize gap-3 mb-3">
        <h1 className="border-b-2 w-full">bookmarks: </h1>
        <p className="border-b-2 w-full">{bookmarks.length}</p>
      </div>
      {bookmarks.map((bookmark) => (
        <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};

export default Bookmarks;
